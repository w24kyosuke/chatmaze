const deckData = [
    { id: "A1", text: "怎么做？教教我吧！", pinyin: "zěn me zuò? jiāo jiāo wǒ ba", meaning: "どうやるの？教えてよ！", type: "A. 依頼", next: ["A2", "A3"] },
    { id: "A2", text: "没问题，包在我身上！", pinyin: "méi wèn tí, bāo zài wǒ shēn shàng", meaning: "問題ない、任せて！", type: "A. 承諾", next: ["B1", "F1", "A1"] },
    { id: "A3", text: "这个我也不太会...", pinyin: "zhè ge wǒ yě bú tài huì", meaning: "これ、私もあんまりできないんだ...", type: "A. 辞退", next: ["B1", "F1", "A1"] },
    { id: "B1", text: "你看，这样对不对？", pinyin: "nǐ kàn, zhè yàng duì bu duì", meaning: "見て、これで合ってる？", type: "B. 試行", next: ["C1", "C2"] },
    { id: "C1", text: "没错，你真厉害！", pinyin: "méi cuò, nǐ zhēn lì hài", meaning: "その通り、すごいね！", type: "C. 肯定", next: ["E2", "F1", "A1"] },
    { id: "C2", text: "不对哦，应该这样做。", pinyin: "bú duì o, yīng gāi zhè yàng zuò", meaning: "違うよ、こうやるべきだよ。", type: "C. 訂正", next: ["D1", "D2", "E2"] },
    { id: "D1", text: "啥意思？没听懂。", pinyin: "shá yì si? méi tīng dǒng", meaning: "どういう意味？分からなかった。", type: "D. 疑問", next: ["C2", "E1", "A2"] },
    { id: "D2", text: "太难了吧！这怎么学啊。", pinyin: "tài nán le ba! zhè zěn me xué a", meaning: "難しすぎでしょ！どうやって学ぶのさ。", type: "D. 困难", next: ["A2", "E1", "C2"] },
    { id: "E1", text: "怎么样，懂了吗？", pinyin: "zěn me yàng, dǒng le ma", meaning: "どう、分かった？", type: "E. 確認", next: ["E2", "D1", "D2"] },
    { id: "E2", text: "原来如此，懂了懂了！", pinyin: "yuán lái rú cǐ, dǒng le dǒng le", meaning: "なるほど、分かった分かった！", type: "E. 納得", next: ["C1", "F1", "B1"] },
    { id: "F1", text: "谢啦！帮大忙了。", pinyin: "xiè la! bāng dà máng le", meaning: "サンキュー！大助かりだよ。", type: "F. 感謝", next: ["F2", "A1"] },
    { id: "F2", text: "不客气，小事一桩！", pinyin: "bú kè qì, xiǎo shì yì zhuāng", meaning: "どういたしまして、お安い御用だよ！", type: "F. 返答", next: ["A1", "B1"] }
];
