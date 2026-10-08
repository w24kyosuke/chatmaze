const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// CLI Arguments parsing
const args = process.argv.slice(2);
let focusNodes = [];
let maxDepth = 2; // デフォルトの前後コンテキストの深さ

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--focus' && args[i + 1]) {
        focusNodes = args[i + 1].split(',').map(s => s.trim());
        i++;
    } else if (args[i] === '--depth' && args[i + 1]) {
        maxDepth = parseInt(args[i + 1], 10);
        i++;
    }
}

// YAMLファイルの読み込み
const yamlPath = path.join(__dirname, '../data/core.yaml');
let deck = [];
try {
    deck = yaml.load(fs.readFileSync(yamlPath, 'utf8'));
} catch (e) {
    console.error("❌ Error: core.yamlの読み込みに失敗しました:", e);
    process.exit(1);
}

// グラフ構造の構築
const nodes = {};
const parents = {};

deck.forEach(node => {
    nodes[node.id] = node;
    parents[node.id] = parents[node.id] || []; // 初期化
});

// 親ノードの参照を構築
deck.forEach(node => {
    const children = node.next || [];
    children.forEach(childId => {
        if (!parents[childId]) parents[childId] = [];
        parents[childId].push(node.id);
    });
});

// パスを人間（およびAI）が読みやすい台本形式にフォーマットするヘルパー関数
function formatPath(pathIds) {
    let output = `[Path: ${pathIds.join(' -> ')}]\n`;
    
    pathIds.forEach((id, index) => {
        const node = nodes[id];
        if (!node) {
            output += `(⚠️ Missing Node: ${id})\n`;
            return;
        }
        // インデックスに応じて話者を交互に切り替える（簡易的な話者判定）
        const currentSpeaker = (index % 2 === 0) ? '話者A' : '話者B';
        output += `${currentSpeaker}: ${node.text} (${node.id})\n`;
    });
    return output;
}

// 指定ノードから過去（親方向）に遡るパスを取得
function getBackwardPaths(nodeId, depth, currentPath = []) {
    if (depth === 0 || !parents[nodeId] || parents[nodeId].length === 0) {
        return [[...currentPath]];
    }
    let paths = [];
    for (const p of parents[nodeId]) {
        if (currentPath.includes(p)) continue; // 無限ループ防止
        paths.push(...getBackwardPaths(p, depth - 1, [p, ...currentPath]));
    }
    return paths.length ? paths : [[...currentPath]];
}

// 指定ノードから未来（子方向）に進むパスを取得
function getForwardPaths(nodeId, depth, currentPath = []) {
    if (depth === 0 || !nodes[nodeId] || !nodes[nodeId].next || nodes[nodeId].next.length === 0) {
        return [[...currentPath]];
    }
    let paths = [];
    for (const c of nodes[nodeId].next) {
        if (currentPath.includes(c)) continue; // 無限ループ防止
        paths.push(...getForwardPaths(c, depth - 1, [...currentPath, c]));
    }
    return paths.length ? paths : [[...currentPath]];
}

// メイン処理
if (focusNodes.length > 0) {
    // 1. 指定されたノード（Focus）の周辺コンテキストを抽出
    focusNodes.forEach(focusId => {
        if (!nodes[focusId]) {
            console.error(`⚠️ 警告: ノード '${focusId}' が見つかりません。`);
            return;
        }
        console.log(`\n===========================================`);
        console.log(`🎯 Focus Node: ${focusId} (前後コンテキストの深さ: ${maxDepth})`);
        console.log(`===========================================`);
        
        const backwardPaths = getBackwardPaths(focusId, maxDepth);
        const forwardPaths = getForwardPaths(focusId, maxDepth);
        
        let counter = 1;
        backwardPaths.forEach(bp => {
            forwardPaths.forEach(fp => {
                // 過去パス + フォーカスノード + 未来パス で完全な文脈を作成
                const fullPath = [...bp, focusId, ...fp];
                console.log(`\n--- シナリオ ${counter++} ---`);
                console.log(formatPath(fullPath));
            });
        });
    });
} else {
    // 2. フォーカス指定がない場合は、デッキ全体のサンプルパスを抽出
    console.log(`\n===========================================`);
    console.log(`🌐 デッキ全体のサンプル抽出 (最大深さ: 5)`);
    console.log(`===========================================`);
    
    // ソースノード（親がいないノード）を検索
    const sources = Object.keys(nodes).filter(id => !parents[id] || parents[id].length === 0);
    
    if (sources.length === 0) {
        console.log("⚠️ 警告: ソースノード（開始点）が見つかりません。");
        process.exit(0);
    }

    let counter = 1;
    function dfsFull(nodeId, pathAcc, depth) {
        pathAcc.push(nodeId);
        const node = nodes[nodeId];
        const children = (node && node.next) ? node.next : [];
        
        if (depth === 0 || children.length === 0) {
            console.log(`\n--- パターン ${counter++} ---`);
            console.log(formatPath(pathAcc));
        } else {
            for (const c of children) {
                if (pathAcc.includes(c)) {
                    // ループ検知
                    console.log(`\n--- パターン ${counter++} (🔄 ループ到達で打ち切り) ---`);
                    console.log(formatPath([...pathAcc, c]));
                } else {
                    dfsFull(c, [...pathAcc], depth - 1);
                }
            }
        }
    }
    
    sources.forEach(src => {
        dfsFull(src, [], 5);
    });
}
