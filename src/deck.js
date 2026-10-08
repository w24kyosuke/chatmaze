const deckData = [
    // --- Sources (AI) ---
    { id: "S1", text: "你好！最近怎么样？", pinyin: "nǐ hǎo! zuì jìn zěn me yàng", meaning: "やあ！最近どう？", type: "挨拶", next: ["S1_R1", "S1_R2"] },
    { id: "S2", text: "打扰一下，有个问题想请教。", pinyin: "dǎ rǎo yí xià, yǒu gè wèn tí xiǎng qǐng jiào", meaning: "すみません、ちょっとお聞きしたいのですが。", type: "質問", next: ["S2_R1", "S2_R2"] },

    // --- User Responses to S1 ---
    { id: "S1_R1", text: "挺好的，你呢？", pinyin: "tǐng hǎo de, nǐ ne", meaning: "元気だよ、君は？", type: "返答", next: ["S1_R1_AI"] },
    { id: "S1_R2", text: "最近有点忙...", pinyin: "zuì jìn yǒu diǎn máng", meaning: "最近ちょっと忙しくて...", type: "返答", next: ["Z1"] },
    
    // --- AI Intermediate ---
    { id: "S1_R1_AI", text: "我也挺好的。对了，有个问题想请教你。", pinyin: "wǒ yě tǐng hǎo de. duì le, yǒu gè wèn tí xiǎng qǐng jiào nǐ", meaning: "私も元気だよ。ところで、ちょっとお聞きしたいことがあるんだけど。", type: "質問", next: ["S2_R1", "S2_R2"] },
    
    // --- User Responses to Question Request ---
    { id: "S2_R1", text: "没问题，你想问什么？", pinyin: "méi wèn tí, nǐ xiǎng wèn shén me", meaning: "問題ないよ、何を聞きたいの？", type: "承諾", next: ["A1"] },
    { id: "S2_R2", text: "不好意思，我现在有点忙。", pinyin: "bù hǎo yì si, wǒ xiàn zài yǒu diǎn máng", meaning: "ごめん、今ちょっと忙しいんだ。", type: "辞退", next: ["Z5"] },

    // --- AI Asks Question ---
    { id: "A1", text: "这个怎么做？教教我吧！", pinyin: "zhè ge zěn me zuò? jiāo jiāo wǒ ba", meaning: "これどうやるの？教えてよ！", type: "依頼", next: ["A2", "A3"] },
    
    // --- User Responses to Question ---
    { id: "A2", text: "没问题！其实很简单，应该这样做，你看懂了吗？", pinyin: "méi wèn tí! qí shí hěn jiǎn dān, yīng gāi zhè yàng zuò, nǐ kàn dǒng le ma", meaning: "問題ないよ！実は簡単で、こうやるべきなんだ。分かった？", type: "説明", next: ["E2", "D1", "D2"] },
    { id: "A3", text: "抱歉，这个我也不太会...", pinyin: "bào qiàn, zhè ge wǒ yě bú tài huì", meaning: "ごめん、これ私もあんまり分からないんだ...", type: "辞退", next: ["Z3"] },
    
    // --- AI Responses to Explanation ---
    { id: "E2", text: "原来如此，懂了！那我试一下... 你看这样做对不对？", pinyin: "yuán lái rú cǐ, dǒng le! nà wǒ shì yí xià... nǐ kàn zhè yàng zuò duì bu duì", meaning: "なるほど、分かった！じゃあ試してみるね… これで合ってる？", type: "試行", next: ["C1", "C2"] },
    { id: "D1", text: "啥意思？没听懂，能再解释一下吗？", pinyin: "shá yì si? méi tīng dǒng, néng zài jiě shì yí xià ma", meaning: "どういう意味？分からなかった、もう一回説明してくれる？", type: "疑問", next: ["A2", "A3"] },
    { id: "D2", text: "太难了吧！这怎么学啊。", pinyin: "tài nán le ba! zhè zěn me xué a", meaning: "難しすぎでしょ！どうやって学ぶのさ。", type: "困難", next: ["A2", "A3"] },
    
    // --- User Feedback ---
    { id: "C1", text: "没错，就是这样！你真聪明！", pinyin: "méi cuò, jiù shì zhè yàng! nǐ zhēn cōng míng", meaning: "その通り、まさにそれだよ！賢いね！", type: "肯定", next: ["F1"] },
    { id: "C2", text: "不对哦，应该这样做。再看一次...", pinyin: "bú duì o, yīng gāi zhè yàng zuò. zài kàn yí cì", meaning: "違うよ、こうやるべきだよ。もう一度見てて…", type: "訂正", next: ["E2", "D1", "D2"] },
    
    // --- AI Thanks ---
    { id: "F1", text: "谢啦！帮大忙了。", pinyin: "xiè la! bāng dà máng le", meaning: "サンキュー！大助かりだよ。", type: "感謝", next: ["F2", "F3"] },
    
    // --- User You're Welcome ---
    { id: "F2", text: "不客气，小事一桩！", pinyin: "bú kè qì, xiǎo shì yì zhuāng", meaning: "どういたしまして、お安い御用だよ！", type: "返答", next: ["Z2"] },
    { id: "F3", text: "没事，下次有问题再问我。", pinyin: "méi shì, xià cì yǒu wèn tí zài wèn wǒ", meaning: "気にしないで、また問題があったら聞いてね。", type: "返答", next: ["Z2"] },

    // --- Sinks (AI Endings) ---
    { id: "Z1", text: "那你先忙，下次再聊！", pinyin: "nà nǐ xiān máng, xià cì zài liáo", meaning: "じゃあ仕事に戻って、また今度話そう！", type: "別れ", next: [] },
    { id: "Z2", text: "好的，那我先去忙了，再见！", pinyin: "hǎo de, nà wǒ xiān qù máng le, zài jiàn", meaning: "わかった、それじゃあ仕事に戻るね。さようなら！", type: "別れ", next: [] },
    { id: "Z3", text: "好吧，那我问问别人。", pinyin: "hǎo ba, nà wǒ wèn wen bié rén", meaning: "わかった、じゃあ他の人に聞いてみるよ。", type: "別れ", next: [] },
    { id: "Z5", text: "没关系，那你先忙吧！", pinyin: "méi guān xi, nà nǐ xiān máng ba", meaning: "大丈夫、じゃあ仕事に戻ってね！", type: "別れ", next: [] }
];
