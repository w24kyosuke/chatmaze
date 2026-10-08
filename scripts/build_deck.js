const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const dataDir = path.join(__dirname, '../data');
const outputFile = path.join(__dirname, '../src/deck.js');

function buildDeck() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));
    let combinedDeck = [];

    for (const file of files) {
        const filePath = path.join(dataDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        try {
            const parsed = yaml.load(content);
            if (Array.isArray(parsed)) {
                combinedDeck = combinedDeck.concat(parsed);
            }
        } catch (e) {
            console.error(`Error parsing ${file}:`, e);
            process.exit(1);
        }
    }

    // Convert strict JSON to JS object literal (removing quotes from keys) to keep compatibility
    const jsonString = JSON.stringify(combinedDeck, null, 4);
    const jsString = jsonString.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
    
    const fileContent = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.\n// Modify YAML files in data/ directory and run npm run build\n\nconst deckData = ${jsString};\n`;

    fs.writeFileSync(outputFile, fileContent, 'utf8');
    console.log(`Successfully built ${outputFile} with ${combinedDeck.length} cards from ${files.length} files.`);
}

buildDeck();
