// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Modify YAML files in data/ directory and run npm run build

const deckData = [
    {
        id: "S1",
        text: "你好！最近怎么样？",
        pinyin: "nǐ hǎo! zuì jìn zěn me yàng",
        meaning: "やあ！最近どう？",
        type: "挨拶",
        next: [
            "S1_R1",
            "S1_R2",
            "S1_R3"
        ]
    },
    {
        id: "S2",
        text: "打扰一下，有个问题想请教。",
        pinyin: "dǎ rǎo yí xià, yǒu gè wèn tí xiǎng qǐng jiào",
        meaning: "すみません、ちょっとお聞きしたいのですが。",
        type: "質問",
        next: [
            "S2_R1",
            "S2_R2"
        ]
    },
    {
        id: "S1_R1",
        text: "挺好的，你呢？",
        pinyin: "tǐng hǎo de, nǐ ne",
        meaning: "元気だよ、君は？",
        type: "返答",
        next: [
            "S1_R1_AI",
            "Z14"
        ]
    },
    {
        id: "S1_R2",
        text: "最近有点忙...",
        pinyin: "zuì jìn yǒu diǎn máng",
        meaning: "最近ちょっと忙しくて...",
        type: "返答",
        next: [
            "Z1"
        ]
    },
    {
        id: "S1_R1_AI",
        text: "我也挺好的。对了，有个问题想请教你。",
        pinyin: "wǒ yě tǐng hǎo de. duì le, yǒu gè wèn tí xiǎng qǐng jiào nǐ",
        meaning: "私も元気だよ。ところで、ちょっとお聞きしたいことがあるんだけど。",
        type: "質問",
        next: [
            "S2_R1",
            "S2_R2",
            "Z15"
        ]
    },
    {
        id: "S2_R1",
        text: "没问题，你想问什么？",
        pinyin: "méi wèn tí, nǐ xiǎng wèn shén me",
        meaning: "問題ないよ、何を聞きたいの？",
        type: "承諾",
        next: [
            "A1"
        ]
    },
    {
        id: "S2_R2",
        text: "不好意思，我现在有点忙。",
        pinyin: "bù hǎo yì si, wǒ xiàn zài yǒu diǎn máng",
        meaning: "ごめん、今ちょっと忙しいんだ。",
        type: "辞退",
        next: [
            "Z5"
        ]
    },
    {
        id: "A1",
        text: "这个怎么做？教教我吧！",
        pinyin: "zhè ge zěn me zuò? jiāo jiāo wǒ ba",
        meaning: "これどうやるの？教えてよ！",
        type: "依頼",
        next: [
            "A2",
            "A3"
        ]
    },
    {
        id: "A2",
        text: "没问题！其实很简单，应该这样做，你看懂了吗？",
        pinyin: "méi wèn tí! qí shí hěn jiǎn dān, yīng gāi zhè yàng zuò, nǐ kàn dǒng le ma",
        meaning: "問題ないよ！実は簡単で、こうやるべきなんだ。分かった？",
        type: "説明",
        next: [
            "E2",
            "D1",
            "D2",
            "D3",
            "D4"
        ]
    },
    {
        id: "A3",
        text: "抱歉，这个我也不太会...",
        pinyin: "bào qiàn, zhè ge wǒ yě bú tài huì",
        meaning: "ごめん、これ私もあんまり分からないんだ...",
        type: "辞退",
        next: [
            "Z3"
        ]
    },
    {
        id: "E2",
        text: "原来如此，懂了！那我试一下... 你看这样做对不对？",
        pinyin: "yuán lái rú cǐ, dǒng le! nà wǒ shì yí xià... nǐ kàn zhè yàng zuò duì bu duì",
        meaning: "なるほど、分かった！じゃあ試してみるね… これで合ってる？",
        type: "試行",
        next: [
            "C1",
            "C2"
        ]
    },
    {
        id: "D1",
        text: "啥意思？没听懂，能再解释一下吗？",
        pinyin: "shá yì si? méi tīng dǒng, néng zài jiě shì yí xià ma",
        meaning: "どういう意味？分からなかった、もう一回説明してくれる？",
        type: "疑問",
        next: [
            "A2",
            "A3"
        ]
    },
    {
        id: "D2",
        text: "太难了吧！这怎么学啊。",
        pinyin: "tài nán le ba! zhè zěn me xué a",
        meaning: "難しすぎでしょ！どうやって学ぶのさ。",
        type: "困難",
        next: [
            "A2",
            "A3"
        ]
    },
    {
        id: "C1",
        text: "没错，就是这样！你真聪明！",
        pinyin: "méi cuò, jiù shì zhè yàng! nǐ zhēn cōng míng",
        meaning: "その通り、まさにそれだよ！賢いね！",
        type: "肯定",
        next: [
            "F1"
        ]
    },
    {
        id: "C2",
        text: "不对哦，应该这样做。再看一次...",
        pinyin: "bú duì o, yīng gāi zhè yàng zuò. zài kàn yí cì",
        meaning: "違うよ、こうやるべきだよ。もう一度見てて…",
        type: "訂正",
        next: [
            "E2",
            "D1",
            "D2",
            "D4"
        ]
    },
    {
        id: "F1",
        text: "谢啦！帮大忙了。",
        pinyin: "xiè la! bāng dà máng le",
        meaning: "サンキュー！大助かりだよ。",
        type: "感謝",
        next: [
            "F2",
            "F3"
        ]
    },
    {
        id: "F2",
        text: "不客气，小事一桩！",
        pinyin: "bú kè qì, xiǎo shì yì zhuāng",
        meaning: "どういたしまして、お安い御用だよ！",
        type: "返答",
        next: [
            "Z2"
        ]
    },
    {
        id: "F3",
        text: "没事，下次有问题再问我。",
        pinyin: "méi shì, xià cì yǒu wèn tí zài wèn wǒ",
        meaning: "気にしないで、また問題があったら聞いてね。",
        type: "返答",
        next: [
            "Z2"
        ]
    },
    {
        id: "Z1",
        text: "那你先忙，下次再聊！",
        pinyin: "nà nǐ xiān máng, xià cì zài liáo",
        meaning: "じゃあ仕事に戻って、また今度話そう！",
        type: "別れ",
        next: []
    },
    {
        id: "Z2",
        text: "好的，那我先去忙了，再见！",
        pinyin: "hǎo de, nà wǒ xiān qù máng le, zài jiàn",
        meaning: "わかった、それじゃあ仕事に戻るね。さようなら！",
        type: "別れ",
        next: []
    },
    {
        id: "Z3",
        text: "好吧，那我问问别人。",
        pinyin: "hǎo ba, nà wǒ wèn wen bié rén",
        meaning: "わかった、じゃあ他の人に聞いてみるよ。",
        type: "別れ",
        next: []
    },
    {
        id: "Z5",
        text: "没关系，那你先忙吧！",
        pinyin: "méi guān xi, nà nǐ xiān máng ba",
        meaning: "大丈夫、じゃあ仕事に戻ってね！",
        type: "別れ",
        next: []
    },
    {
        id: "D3",
        text: "有没有更简单的方法？",
        pinyin: "yǒu méi yǒu gèng jiǎn dān de fāng fǎ",
        meaning: "もっと簡単な方法はないの？",
        type: "質問",
        next: [
            "A4",
            "A5"
        ]
    },
    {
        id: "D4",
        text: "算了，我放弃了。太难了。",
        pinyin: "suàn le, wǒ fàng qì le. tài nán le",
        meaning: "もういいや、諦めるよ。難しすぎる。",
        type: "辞退",
        next: [
            "Z4"
        ]
    },
    {
        id: "A4",
        text: "其实也有捷径，不过可能不够严谨。你想听吗？",
        pinyin: "qí shí yě yǒu jié jìng, bú guò kě néng bù gòu yán jǐn. nǐ xiǎng tīng ma",
        meaning: "実は近道もあるよ、でも厳密じゃないかもしれない。聞きたい？",
        type: "提案",
        next: [
            "A4_R1",
            "A4_R2"
        ]
    },
    {
        id: "A5",
        text: "抱歉，这已经是唯一的办法了。",
        pinyin: "bào qiàn, zhè yǐ jīng shì wéi yī de bàn fǎ le",
        meaning: "ごめん、これが唯一の方法なんだ。",
        type: "説明",
        next: [
            "D4",
            "E2"
        ]
    },
    {
        id: "A4_R1",
        text: "听听看吧。",
        pinyin: "tīng ting kàn ba",
        meaning: "聞いてみようかな。",
        type: "承諾",
        next: [
            "A4_EXP"
        ]
    },
    {
        id: "A4_R2",
        text: "那算了，我还是用正规方法吧。",
        pinyin: "nà suàn le, wǒ hái shì yòng zhèng guī fāng fǎ ba",
        meaning: "じゃあいいや、やっぱり正規の方法を使うよ。",
        type: "辞退",
        next: [
            "E2"
        ]
    },
    {
        id: "A4_EXP",
        text: "就是直接点击这里跳过，不过有时候会报错。懂了吗？",
        pinyin: "jiù shì zhí jiē diǎn jī zhè lǐ tiào guò, bú guò yǒu shí hou huì bào cuò. dǒng le ma",
        meaning: "直接ここをクリックしてスキップするんだ、たまにエラーになるけどね。分かった？",
        type: "説明",
        next: [
            "E2",
            "D1"
        ]
    },
    {
        id: "Z4",
        text: "没问题，需要帮忙随时找我。",
        pinyin: "méi wèn tí, xū yào bāng máng suí shí zhǎo wǒ",
        meaning: "問題ないよ、手伝いが必要ならいつでも声かけて。",
        type: "別れ",
        next: []
    },
    {
        id: "S1_R3",
        text: "别提了，最近糟透了。",
        pinyin: "bié tí le, zuì jìn zāo tòu le",
        meaning: "言わないで、最近最悪なんだよ。",
        type: "愚痴",
        next: [
            "S1_R3_AI"
        ]
    },
    {
        id: "S1_R3_AI",
        text: "怎么了？发生什么事了吗？",
        pinyin: "zěn me le? fā shēng shén me shì le ma",
        meaning: "どうしたの？何かあったの？",
        type: "質問",
        next: [
            "S4_R1",
            "S4_R2"
        ]
    },
    {
        id: "S4_R1",
        text: "工作压力太大了。天天加班。",
        pinyin: "gōng zuò yā lì tài dà le. tiān tiān jiā bān",
        meaning: "仕事のプレッシャーが大きすぎて。毎日残業だよ。",
        type: "愚痴",
        next: [
            "S5_A",
            "Z17"
        ]
    },
    {
        id: "S4_R2",
        text: "也没什么，就是有点累。",
        pinyin: "yě méi shén me, jiù shì yǒu diǎn lèi",
        meaning: "なんでもない、ちょっと疲れてるだけ。",
        type: "返答",
        next: [
            "Z5"
        ]
    },
    {
        id: "S5_A",
        text: "辛苦了，周末好好放松一下吧。",
        pinyin: "xīn kǔ le, zhōu mò hǎo hǎo fàng sōng yí xià ba",
        meaning: "お疲れ様、週末はゆっくりリラックスしなよ。",
        type: "慰め",
        next: [
            "S6_A1",
            "S6_A2"
        ]
    },
    {
        id: "S6_A1",
        text: "嗯，也对。谢谢你的安慰。",
        pinyin: "èn, yě duì. xiè xie nǐ de ān wèi",
        meaning: "うん、そうだね。慰めてくれてありがとう。",
        type: "感謝",
        next: [
            "Z12"
        ]
    },
    {
        id: "S6_A2",
        text: "实在没精力出门了...",
        pinyin: "shí zài méi jīng lì chū mén le",
        meaning: "出かける気力もないよ...",
        type: "返答",
        next: [
            "Z13"
        ]
    },
    {
        id: "Z12",
        text: "不用客气，早点休息吧。",
        pinyin: "bú yòng kè qi, zǎo diǎn xiū xi ba",
        meaning: "気にしないで、早く休んでね。",
        type: "別れ",
        next: []
    },
    {
        id: "Z13",
        text: "那就在家好好休息，别想太多。",
        pinyin: "nà jiù zài jiā hǎo hǎo xiū xi, bié xiǎng tài duō",
        meaning: "じゃあ家でゆっくり休んで、考えすぎないようにね。",
        type: "別れ",
        next: []
    },
    {
        id: "W1",
        text: "周末快到了，有什么计划吗？",
        pinyin: "zhōu mò kuài dào le, yǒu shén me jì huà ma",
        meaning: "もうすぐ週末だけど、何か予定ある？",
        type: "質問",
        next: [
            "W1_R1",
            "W1_R2",
            "W1_R3"
        ]
    },
    {
        id: "W1_R1",
        text: "打算在家里休息。",
        pinyin: "dǎ suàn zài jiā li xiū xi",
        meaning: "家で休むつもり。",
        type: "返答",
        next: [
            "W2_A"
        ]
    },
    {
        id: "W1_R2",
        text: "我想去看电影。",
        pinyin: "wǒ xiǎng qù kàn diàn yǐng",
        meaning: "映画を見に行きたいな。",
        type: "返答",
        next: [
            "W2_B"
        ]
    },
    {
        id: "W1_R3",
        text: "还没有决定呢，你呢？",
        pinyin: "hái méi yǒu jué dìng ne, nǐ ne",
        meaning: "まだ決めてないよ、君は？",
        type: "返答",
        next: [
            "W2_C"
        ]
    },
    {
        id: "W2_A",
        text: "挺好的，平时那么忙，确实需要好好放松。",
        pinyin: "tǐng hǎo de, píng shí nà me máng, què shí xū yào hǎo hǎo fàng sōng",
        meaning: "いいね、普段忙しいし、しっかりリラックスしないとね。",
        type: "同意",
        next: [
            "W3_A1",
            "W3_A2"
        ]
    },
    {
        id: "W3_A1",
        text: "是啊，准备睡个懒觉。",
        pinyin: "shì a, zhǔn bèi shuì gè lǎn jiào",
        meaning: "うん、遅くまで寝るつもり。",
        type: "返答",
        next: [
            "Z6"
        ]
    },
    {
        id: "W3_A2",
        text: "你周末打算干嘛？",
        pinyin: "nǐ zhōu mò dǎ suàn gàn má",
        meaning: "君の週末の予定は？",
        type: "質問",
        next: [
            "W2_C"
        ]
    },
    {
        id: "W2_B",
        text: "看电影？最近有什么好电影推荐吗？",
        pinyin: "kàn diàn yǐng? zuì jìn yǒu shén me hǎo diàn yǐng tuī jiàn ma",
        meaning: "映画？最近何かおすすめの映画ある？",
        type: "質問",
        next: [
            "W3_B1",
            "W3_B2",
            "Z16"
        ]
    },
    {
        id: "W3_B1",
        text: "最近上映的那部科幻片看起来不错。",
        pinyin: "zuì jìn shàng yìng de nà bù kē huàn piān kàn qǐ lái bú cuò",
        meaning: "最近公開されたあのSF映画が良さそうだよ。",
        type: "提案",
        next: [
            "W4_B1"
        ]
    },
    {
        id: "W3_B2",
        text: "我也没想好，随便看看。",
        pinyin: "wǒ yě méi xiǎng hǎo, suí biàn kàn kan",
        meaning: "私もまだ決めてない、適当に見るよ。",
        type: "返答",
        next: [
            "Z7"
        ]
    },
    {
        id: "W4_B1",
        text: "真的吗？那我们一起去怎么样？",
        pinyin: "zhēn de ma? nà wǒ men yì qǐ qù zěn me yàng",
        meaning: "本当？じゃあ一緒に行くのはどう？",
        type: "誘い",
        next: [
            "W5_B1",
            "W5_B2"
        ]
    },
    {
        id: "W5_B1",
        text: "好主意！",
        pinyin: "hǎo zhǔ yì",
        meaning: "いいアイデアだね！",
        type: "承諾",
        next: [
            "Z8"
        ]
    },
    {
        id: "W5_B2",
        text: "下次吧，这次我想自己看。",
        pinyin: "xià cì ba, zhè cì wǒ xiǎng zì jǐ kàn",
        meaning: "また今度ね、今回は一人で見たいんだ。",
        type: "辞退",
        next: [
            "Z9"
        ]
    },
    {
        id: "W2_C",
        text: "我打算去爬山，呼吸一下新鲜空气。",
        pinyin: "wǒ dǎ suàn qù pá shān, hū xī yí xià xīn xiān kōng qì",
        meaning: "山登りに行って、新鮮な空気を吸おうと思ってるんだ。",
        type: "返答",
        next: [
            "W3_C1",
            "W3_C2"
        ]
    },
    {
        id: "W3_C1",
        text: "听起来不错！注意安全啊。",
        pinyin: "tīng qǐ lái bú cuò! zhù yì ān quán a",
        meaning: "良さそうだね！気をつけてね。",
        type: "返答",
        next: [
            "Z10"
        ]
    },
    {
        id: "W3_C2",
        text: "爬山太累了，我还是在家里待着吧。",
        pinyin: "pá shān tài lèi le, wǒ hái shì zài jiā li dāi zhe ba",
        meaning: "山登りは疲れすぎるよ、やっぱり家にいるわ。",
        type: "返答",
        next: [
            "Z11"
        ]
    },
    {
        id: "Z6",
        text: "好好休息，下周见！",
        pinyin: "hǎo hǎo xiū xi, xià zhōu jiàn",
        meaning: "ゆっくり休んで、また来週！",
        type: "别れ",
        next: []
    },
    {
        id: "Z7",
        text: "哈哈，也是一种放松方式。祝你周末愉快！",
        pinyin: "hā ha, yě shì yì zhǒng fàng sōng fāng shì. zhù nǐ zhōu mò yú kuài",
        meaning: "はは、それもリラックスの一種だね。良い週末を！",
        type: "别れ",
        next: []
    },
    {
        id: "Z8",
        text: "太好了，那我来订票！",
        pinyin: "tài hǎo le, nà wǒ lái dìng piào",
        meaning: "やった、じゃあチケット予約するね！",
        type: "别れ",
        next: []
    },
    {
        id: "Z9",
        text: "好的，没问题。周末愉快！",
        pinyin: "hǎo de, méi wèn tí. zhōu mò yú kuài",
        meaning: "うん、分かった。良い週末を！",
        type: "别れ",
        next: []
    },
    {
        id: "Z10",
        text: "谢谢关心，周一见！",
        pinyin: "xiè xie guān xīn, zhōu yī jiàn",
        meaning: "気にかけてくれてありがとう、月曜日に！",
        type: "别れ",
        next: []
    },
    {
        id: "Z11",
        text: "哈哈，确实。那你好好休息！",
        pinyin: "hā ha, què shí. nà nǐ hǎo hǎo xiū xi",
        meaning: "はは、確かにね。じゃあゆっくり休んで！",
        type: "别れ",
        next: []
    },
    {
        id: "Z14",
        text: "回头我们在微信上细聊！",
        pinyin: "huí tóu wǒ men zài wēi xìn shàng xì liáo",
        meaning: "また後でWeChatで詳しく話そう！",
        type: "别れ",
        next: []
    },
    {
        id: "Z15",
        text: "哎呀，不好意思，来电话了，晚点再说！",
        pinyin: "āi yā, bù hǎo yì si, lái diàn huà le, wǎn diǎn zài shuō",
        meaning: "あ、ごめん、電話だ。また後で！",
        type: "别れ",
        next: []
    },
    {
        id: "Z16",
        text: "那我们改天一起吃饭，到时候再聊。",
        pinyin: "nà wǒ men gǎi tiān yì qǐ chī fàn, dào shí hou zài liáo",
        meaning: "じゃあまた今度一緒にご飯食べよう、その時また話そう。",
        type: "别れ",
        next: []
    },
    {
        id: "Z17",
        text: "你快去忙吧，我就不打扰你了。",
        pinyin: "nǐ kuài qù máng ba, wǒ jiù bù dǎ rǎo nǐ le",
        meaning: "早く仕事に戻って、もうお邪魔しないから。",
        type: "别れ",
        next: []
    },
    {
        id: "S3",
        text: "好久不见！最近在忙些什么？",
        pinyin: "hǎo jiǔ bú jiàn! zuì jìn zài máng xiē shén me",
        meaning: "久しぶり！最近何して忙しくしてるの？",
        type: "挨拶",
        next: [
            "S3_R1",
            "S3_R2",
            "S3_R3"
        ]
    },
    {
        id: "S3_R1",
        text: "老样子，天天上班。你呢？",
        pinyin: "lǎo yàng zi, tiān tiān shàng bān. nǐ ne",
        meaning: "相変わらずだよ、毎日仕事。君は？",
        type: "返答",
        next: [
            "Z16"
        ]
    },
    {
        id: "S3_R2",
        text: "最近在准备一个考试，每天都在学习。",
        pinyin: "zuì jìn zài zhǔn bèi yí gè kǎo shì, měi tiān dōu zài xué xí",
        meaning: "最近は試験の準備をしてて、毎日勉強してるよ。",
        type: "返答",
        next: [
            "S3_A1"
        ]
    },
    {
        id: "S3_A1",
        text: "这么努力！祝你考试顺利。",
        pinyin: "zhè me nǔ lì! zhù nǐ kǎo shì shùn lì",
        meaning: "すごく頑張ってるね！試験うまくいくといいね。",
        type: "応援",
        next: [
            "S3_R4",
            "Z17"
        ]
    },
    {
        id: "S3_R4",
        text: "谢谢！等我考完了请你吃饭。",
        pinyin: "xiè xie! děng wǒ kǎo wán le qǐng nǐ chī fàn",
        meaning: "ありがとう！試験が終わったらご飯おごるよ。",
        type: "返答",
        next: [
            "Z14"
        ]
    },
    {
        id: "S3_R3",
        text: "刚旅游回来，还挺累的。",
        pinyin: "gāng lǚ yóu huí lái, hái tǐng lèi de",
        meaning: "旅行から帰ってきたばかりで、結構疲れてるよ。",
        type: "返答",
        next: [
            "S3_A2"
        ]
    },
    {
        id: "S3_A2",
        text: "去哪儿玩了？好玩吗？",
        pinyin: "qù nǎr wán le? hǎo wán ma",
        meaning: "どこに遊びに行ったの？楽しかった？",
        type: "質問",
        next: [
            "Z14",
            "Z15"
        ]
    },
    {
        id: "S4_A",
        text: "哎呀，这么巧！你也在这里啊。",
        pinyin: "āi yā, zhè me qiǎo! nǐ yě zài zhè lǐ a",
        meaning: "あ、偶然だね！君もここにいたんだ。",
        type: "挨拶",
        next: [
            "S4_A_R1",
            "S4_A_R2"
        ]
    },
    {
        id: "S4_A_R1",
        text: "是啊，我来买点东西。你也是吗？",
        pinyin: "shì a, wǒ lái mǎi diǎn dōng xi. nǐ yě shì ma",
        meaning: "うん、ちょっと買い物しに来たんだ。君も？",
        type: "返答",
        next: [
            "S4_A_A1"
        ]
    },
    {
        id: "S4_A_A1",
        text: "对，我刚下班顺便过来逛逛。",
        pinyin: "duì, wǒ gāng xià bān shùn biàn guò lái guàng guang",
        meaning: "うん、仕事終わりにちょっと寄ったんだ。",
        type: "返答",
        next: [
            "Z16",
            "Z17"
        ]
    },
    {
        id: "S4_A_R2",
        text: "嗯，我刚好路过。好久不见啦！",
        pinyin: "èn, wǒ gāng hǎo lù guò. hǎo jiǔ bú jiàn la",
        meaning: "うん、ちょうど通りかかったんだ。久しぶりだね！",
        type: "返答",
        next: [
            "S3"
        ]
    },
    {
        id: "S5",
        text: "你吃过饭了吗？",
        pinyin: "nǐ chī guò fàn le ma",
        meaning: "もうご飯食べた？",
        type: "挨拶",
        next: [
            "S5_R1",
            "S5_R2"
        ]
    },
    {
        id: "S5_R1",
        text: "已经吃过了，你呢？",
        pinyin: "yǐ jīng chī guò le, nǐ ne",
        meaning: "もう食べたよ、君は？",
        type: "返答",
        next: [
            "S5_A1",
            "Z15"
        ]
    },
    {
        id: "S5_A1",
        text: "我也吃了。对了，你周末有什么安排？",
        pinyin: "wǒ yě chī le. duì le, nǐ zhōu mò yǒu shén me ān pái",
        meaning: "私も食べたよ。そういえば、週末何か予定ある？",
        type: "質問",
        next: [
            "W1_R1",
            "W1_R2",
            "W1_R3"
        ]
    },
    {
        id: "S5_R2",
        text: "还没呢，正准备去吃。",
        pinyin: "hái méi ne, zhèng zhǔn bèi qù chī",
        meaning: "まだだよ、ちょうど食べに行くところ。",
        type: "返答",
        next: [
            "S5_A2"
        ]
    },
    {
        id: "S5_A2",
        text: "那我就不耽误你了，快去吃吧。",
        pinyin: "nà wǒ jiù bù dān wù nǐ le, kuài qù chī ba",
        meaning: "じゃあ引き留めないから、早く食べに行きなよ。",
        type: "配慮",
        next: [
            "Z14",
            "Z16"
        ]
    }
];
