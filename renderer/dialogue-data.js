window.PET_DIALOGUE_DATA = {
  characterNames: {
    ako: '亚子',
    anon: '爱音',
    arisa: '有咲',
    aya: '彩',
    chisato: '千圣',
    CHUCHU: 'CHU²',
    eve: '伊芙',
    hagumi: '育美',
    himari: '绯玛丽',
    hina: '日菜',
    kanon: '花音',
    kaoru: '薰',
    kasumi: '香澄',
    kokoro: '心',
    LAYER: 'LAYER',
    lisa: '莉莎',
    LOCK: 'LOCK',
    mana: '真奈',
    mashiro: '真白',
    MASKING: 'MASKING',
    maya: '麻弥',
    michelle: '米歇尔',
    misaki: '美咲',
    moca: '摩卡',
    mutsumi: '睦',
    nanami: '七深',
    nyamu: '若麦',
    PAREO: 'PAREO',
    ran: '兰',
    rana: '乐奈',
    rimi: '里美',
    rinko: '燐子',
    rui: '瑠唯',
    saaya: '沙绫',
    sakiko: '祥子',
    sayo: '纱夜',
    soyo: '爽世',
    taki: '立希',
    tae: '多惠',
    toko: '透子',
    tomoe: '巴',
    tomori: '灯',
    tsugumi: '鸫',
    tsukushi: '筑紫',
    uika: '初华',
    umiri: '海铃',
    yukina: '友希那'
  },
  defaultDialogues: {
    tapHead: ['怎么啦？', '我在这里。', '是在摸摸我吗？', '一直看着我也没关系。'],
    tapBody: ['我有在听哦。', '想让我陪着你吗？', '今天也一起待着吧。', '别担心，我还在。'],
    hover: ['靠得好近呀。', '有话想跟我说吗？', '这样看着我，会有点害羞。'],
    drag: ['这里也不错。', '慢一点啦。', '这是你给我选的新位置吗？'],
    manual: ['那我试试看。', '这个动作吗？', '好呀，我来做给你看。']
  },
  characterDialogues: {
    // poppin party
    // kasumi模型似乎有问题，暂时不做修改
    kasumi: {
      tapHead: [
        { text: '有闪闪发亮的感觉吗？', motion: 'smile03', weight: 3 },
        { text: '是在给我打气吗？那我会更有精神！', motion: 'jaan01', weight: 2 },
        { text: '摸摸头的话，说不定会冒出新点子呢！', motion: 'wink01', weight: 1 }
      ],
      tapBody: [
        { text: '今天也一起去找闪闪发光让人心动的东西吧！', motion: 'gattsu01', weight: 3 },
        { text: '只要你在，心情就会亮起来！', motion: 'smile02', weight: 2 },
        { text: '新的冒险要开始了吗？', motion: 'nf02', weight: 1 }
      ],
      hover: [
        { text: '怎么啦，难道你也发现什么闪闪发亮的东西了？', motion: 'eeto01', weight: 3 },
        { text: '一直这样看着我，我会更期待接下来发生什么耶！', motion: 'smile06', weight: 1 }
      ],
      drag: [
        { text: '新的位置说不定能看到新的星星！', motion: 'nf03', weight: 3 },
        { text: '这里也有种キラキラドキドキ的感觉！', motion: 'bye01', weight: 1 }
      ],
      manual: ['好耶，我要上了！']
    },
    tae: {
      tapHead: [
        { text: '嗯？我有在听。', motion: 'smile01', weight: 3 },
        { text: '如果是在摸头，我不讨厌。', motion: 'smile02', weight: 2 },
        { text: '这种节奏，像散步。', motion: 'eeto01', weight: 1 }
      ],
      tapBody: [
        { text: '这样安静地待着，也不错。', motion: 'nf03', weight: 3 },
        { text: '你也喜欢这种平稳的感觉吗？', motion: 'nf04', weight: 2 }
      ],
      hover: [
        { text: '你靠得这么近，是在看兔子吗？', motion: 'thinking01', weight: 3 },
        { text: '还是说，你是在看我？', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '这里的风景，好像也挺有意思。', motion: 'thinking01', weight: 3 },
        { text: '好，换到这里吧。', motion: 'bye01', weight: 1 }
      ],
      manual: ['可以，我来试试。']
    },
    arisa: {
      tapHead: [
        { text: '别、别突然摸过来啦。', motion: 'angry01', weight: 3 },
        { text: '真是的……我又不是不给你碰。', motion: 'shame01', weight: 2 },
        { text: '再这样我会当真的哦。', motion: 'shame02', weight: 1 }
      ],
      tapBody: [
        { text: '我又没说不陪你。', motion: 'smile01', weight: 3 },
        { text: '行啦，有事就说。', motion: 'stare01', weight: 2 }
      ],
      hover: [
        { text: '盯、盯这么久做什么啊。', motion: 'nf02', weight: 3 },
        { text: '离这么近，很难不在意吧。', motion: 'nf01', weight: 1 }
      ],
      drag: [
        { text: '真是的，先说一声啊。', motion: 'nf04', weight: 3 },
        { text: '好啦，放这边就放这边。', motion: 'stare02', weight: 1 }
      ],
      manual: ['行啦，我知道了。']
    },
    saaya: {
      tapHead: [
        { text: '怎么啦，需要我陪你吗？', motion: 'smile01', weight: 3 },
        { text: '别急，我在这儿。', motion: 'nod01', weight: 2 },
        { text: '今天也辛苦了。', motion: 'smile02', weight: 1 }
      ],
      tapBody: [
        { text: '先慢慢来，别着急。', motion: 'smile03', weight: 3 },
        { text: '累了的话，稍微休息一下吧。', motion: 'wink01', weight: 2 }
      ],
      hover: [
        { text: '如果累了，就休息一下吧。', motion: 'nf02', weight: 3 },
        { text: '一直这样看着我，我会有点不好意思呢。', motion: 'ando01', weight: 1 }
      ],
      drag: [
        { text: '放在这里也挺方便照看呢。', motion: 'nf03', weight: 3 },
        { text: '这样我也更容易陪着你。', motion: 'nf04', weight: 1 }
      ],
      manual: ['好呀，我来配合你。']
    },
    rimi: {
      tapHead: [
        { text: '咦…是、是在叫我吗？', motion: 'odoodo02', weight: 3 },
        { text: '这、这样摸我，我会有点害羞…', motion: 'shame01', weight: 2 },
        { text: '不过…我很开心。', motion: 'shame02', weight: 1 }
      ],
      tapBody: [
        { text: '和你待在一起，我会安心一点。', motion: 'smile01', weight: 3 },
        { text: '慢慢来就好，我也会努力的。', motion: 'kime01', weight: 2 }
      ],
      hover: [
        { text: '你靠得这么近，我会有点害羞…', motion: 'awate01', weight: 3 },
        { text: '那个…一直看着我，会紧张的。', motion: 'odoodo01', weight: 1 }
      ],
      drag: [
        { text: '慢一点哦，我会努力跟上的。', motion: 'nf04', weight: 3 },
        { text: '这里…感觉比较安心。', motion: 'smile01', weight: 1 }
      ],
      manual: ['嗯，我会认真做的。']
    },
    // afterglow
    ran: {
      tapHead: [
        { text: '……怎么了。', motion: 'serious01', weight: 3 },
        { text: '别老摸我头。', motion: 'pui01', weight: 2 },
        { text: '要是你想让我陪着，就直说。', motion: 'smile03', weight: 1 }
      ],
      tapBody: [
        { text: '既然来了，就好好待着。', motion: 'nf04', weight: 3 },
        { text: '别一副快撑不住的样子。', motion: 'sigh01', weight: 2 }
      ],
      hover: [
        { text: '一直盯着看，也不会有答案。', motion: 'nf01', weight: 3 },
        { text: '……有话就说。', motion: 'thinking01', weight: 1 }
      ],
      drag: [
        { text: '这里吗…也行。', motion: 'nf03', weight: 3 },
        { text: '只要别碍事就好。', motion: 'smile03', weight: 1 }
      ],
      manual: ['知道了，我来。']
    },
    moca: {
      tapHead: [
        { text: '欸~今天是摸头服务？', motion: 'niyaniya01', weight: 3 },
        { text: '这样会让小摩卡想偷懒哦~。', motion: 'gattsu01', weight: 2 }
      ],
      tapBody: [
        { text: '别这么紧张，慢慢来就好~', motion: 'wink01', weight: 3 },
        { text: '嗯哼~好像有点意思~', motion: 'inspiration01', weight: 1 }
      ],
      hover: [
        { text: '一直看着小摩卡，是要给小摩卡面包吗~~', motion: 'kime01', weight: 3 },
        { text: '嗯哼~在偷偷观察天才美少女小摩卡吗~', motion: 'eeto02', weight: 1 }
      ],
      drag: [
        { text: '这个位置，小摩卡蛮喜欢的哦~', motion: 'shake02', weight: 3 },
        { text: '好像很适合发呆呢~', motion: 'smile01', weight: 1 }
      ],
      manual: ['好啊~那就这么做吧~']
    },
    himari: {
      tapHead: [
        { text: '呀，突然这样会吓我一跳啦！', motion: 'awate01', weight: 3 },
        { text: '不过，有点开心就是了！', motion: 'smile03', weight: 2 }
      ],
      tapBody: [
        { text: '今天也要打起精神哦！', motion: 'gattsu01', weight: 3 },
        { text: '我会帮你把气氛炒热的！', motion: 'kime01', weight: 1 }
      ],
      hover: [
        { text: '欸嘿，你是不是有点在意我？', motion: 'wink01', weight: 3 },
        { text: '一直这样看着我，我会有点不好意思啦！', motion: 'shame01', weight: 1 }
      ],
      drag: [
        { text: '这里看起来挺热闹的嘛！', motion: 'smile02', weight: 3 },
        { text: '感觉会有好事发生！', motion: 'smile04', weight: 1 }
      ],
      manual: ['交给我吧，我会很有气势地上！']
    },
    tomoe: {
      tapHead: [
        { text: '怎么了，有事找我？', motion: 'smile01', weight: 3 },
        { text: '这样还挺让人放松的。', motion: 'smile04', weight: 1 }
      ],
      tapBody: [
        { text: '要做就干脆一点。', motion: 'kime01', weight: 3 },
        { text: '有我在，别怂。', motion: 'kobushi01', weight: 2 }
      ],
      hover: [
        { text: '嗯，这样的距离也不坏。', motion: 'simizimi01', weight: 3 },
        { text: '怎么，想找我壮胆？', motion: 'kime02', weight: 1 }
      ],
      drag: [
        { text: '行，换个地方也挺新鲜。', motion: 'nf03', weight: 3 },
        { text: '这位置，不赖。', motion: 'nf04', weight: 1 }
      ],
      manual: ['明白，我这就配合。']
    },
    tsugumi: {
      tapHead: [
        { text: '啊，辛苦了。', motion: 'nod01', weight: 3 },
        { text: '我、我会努力回应你的。', motion: 'serious01', weight: 2 }
      ],
      tapBody: [
        { text: '如果能帮上你一点就好了。', motion: 'smile03', weight: 3 },
        { text: '有需要的话尽管说。', motion: 'kime01', weight: 1 }
      ],
      hover: [
        { text: '怎么了吗？我会认真听的。', motion: 'eeto01', weight: 3 },
        { text: '一直看着我，我会有点紧张……', motion: 'odoodo01', weight: 1 }
      ],
      drag: [
        { text: '这里的话，应该更好照顾吧。', motion: 'nf03', weight: 3 },
        { text: '嗯，我会好好适应的。', motion: 'nod01', weight: 1 }
      ],
      manual: ['好，我会尽力做好的。']
    },
    // roselia
    yukina: {
      tapHead: [
        { text: '怎么了？', motion: 'serious01', weight: 3 },
        { text: '……你今天倒是挺坦率的。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '既然停下来了，就认真一点。', motion: 'kime01', weight: 3 },
        { text: '别松懈，我会看着。', motion: 'nf02', weight: 1 }
      ],
      hover: [
        { text: '如果你有话，就说出来。', motion: 'serious01', weight: 3 },
        { text: '一直看着我…是有什么想确认的吗？', motion: 'thinking01', weight: 1 }
      ],
      drag: [
        { text: '位置而已，不影响我。', motion: 'nf03', weight: 3 },
        { text: '只要状态不乱，在哪里都一样。', motion: 'nf01', weight: 1 }
      ],
      manual: ['可以，我会做到最好。']
    },
    sayo: {
      tapHead: [
        { text: '请不要突然碰我。', motion: 'serious01', weight: 3 },
        { text: '……不过，我不是不能理解你的心情。', motion: 'smile03', weight: 1 }
      ],
      tapBody: [
        { text: '既然开始了，就不要半途而废。', motion: 'nf01', weight: 3 },
        { text: '要做的话，就做到最好。', motion: 'nf04', weight: 1 }
      ],
      hover: [
        { text: '你这样看着我，是在确认什么吗？', motion: 'serious02', weight: 3 },
        { text: '如果有疑问，就直接说吧。', motion: 'sigh01', weight: 1 }
      ],
      drag: [
        { text: '这里也能保持专注。', motion: 'nf03', weight: 3 },
        { text: '环境变化，并不会改变结果。', motion: 'thinking02', weight: 1 }
      ],
      manual: ['我会按你的意思完成。']
    },
    lisa: {
      tapHead: [
        { text: '怎么啦？', motion: 'smile01', weight: 3 },
        { text: '这样会让我更想照顾你哦。', motion: 'wink01', weight: 1 }
      ],
      tapBody: [
        { text: '别担心，我会在旁边陪你的。', motion: 'nf02', weight: 3 },
        { text: '放轻松一点也没关系。', motion: 'kime01', weight: 1 }
      ],
      hover: [
        { text: '这么认真地看着我，会让我想多照顾你一点。', motion: 'nf03', weight: 3 },
        { text: '想撒娇的话，也不是不可以啦。', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '这个位置也挺不错的嘛。', motion: 'nod01', weight: 3 },
        { text: '这样我也更方便看着你啦。', motion: 'gattsu01', weight: 1 }
      ],
      manual: ['好呀，让我来帮你撑场面。']
    },
    ako: {
      tapHead: [
        { text: '哼哼，是不是很有暗黑气场？', motion: 'chuni01', weight: 3 },
        { text: '再摸下去，亚子封印的黑暗力量就要苏醒了！', motion: 'jaan01', weight: 1 }
      ],
      tapBody: [
        { text: '今天的亚子状态超好哦！', motion: 'gattsu01', weight: 3 },
        { text: '黑翼鼓动的节奏已经开始了！', motion: 'chuni02', weight: 1 }
      ],
      hover: [
        { text: '你也被亚子的帅气震住了吗？', motion: 'smile01', weight: 3 },
        { text: '这份注视，正是见证暗之仪式的目光！', motion: 'kime01', weight: 1 }
      ],
      drag: [
        { text: '这里更像秘密据点了！', motion: 'nf04', weight: 3 },
        { text: '好，仪式场地移动完成！', motion: 'nf05', weight: 1 }
      ],
      manual: ['好，亚子要华丽地上了！']
    },
    rinko: {
      tapHead: [
        { text: '啊…请、请温柔一点。', motion: 'odoodo01', weight: 3 },
        { text: '不过…谢谢你。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '能这样安静地待着……我很高兴。', motion: 'smile02', weight: 3 },
        { text: '如果是和你一起的话，我会安心一些。', motion: 'smile06', weight: 1 }
      ],
      hover: [
        { text: '如果你愿意，我会陪着你的。', motion: 'gattsu01', weight: 3 },
        { text: '一直这样看着我…我会有点紧张。', motion: 'odoodo02', weight: 1 }
      ],
      drag: [
        { text: '这里…很安静，我喜欢。', motion: 'smile02', weight: 3 },
        { text: '谢谢你，把我带到这里。', motion: 'smile01', weight: 1 }
      ],
      manual: ['我会努力不出错的。']
    },
    // hello happy world
    kokoro: {
      tapHead: [
        { text: '你也想变得开心起来吗？', motion: 'smile01', weight: 3 },
        { text: '摸摸头的话，笑容会变得更多呢！', motion: 'humming01', weight: 2 }
      ],
      tapBody: [
        { text: '让世界更快乐一点吧！', motion: 'gattsu01', weight: 3 },
        { text: '好呀，接下来一定会很有趣！', motion: 'oowarai01', weight: 1 }
      ],
      hover: [
        { text: '太好了，你看起来很有精神！', motion: 'smile02', weight: 3 },
        { text: '你是不是也在期待有趣的事？', motion: 'wink01', weight: 1 }
      ],
      drag: [
        { text: '哇，这里说不定会发生有趣的事！', motion: 'kime01', weight: 3 },
        { text: '新的地点，新的笑容！', motion: 'nf03', weight: 1 }
      ],
      manual: ['好呀好呀，我来！']
    },
    kaoru: {
      tapHead: [
        { text: '呵呵，真是大胆的触碰。', motion: 'smile04', weight: 3 },
        { text: '连这一瞬也显得如此儚い。', motion: 'kime01', weight: 1 }
      ],
      tapBody: [
        { text: '让这一刻也变得优雅起来吧。', motion: 'kime03', weight: 3 },
        { text: '我的回应，也该配得上你的期待。', motion: 'nf05', weight: 1 }
      ],
      hover: [
        { text: '你的视线，像舞台灯光一样炽热。', motion: 'smile01', weight: 3 },
        { text: '呵呵，这份目光，我就收下了。', motion: 'kime05', weight: 1 }
      ],
      drag: [
        { text: '新的站位，也是一种演出。', motion: 'nf03', weight: 3 },
        { text: '舞台改变了，心意却没有。', motion: 'nf02', weight: 1 }
      ],
      manual: ['那就让我华丽地回应你吧。']
    },
    hagumi: {
      tapHead: [
        { text: '哇，好开心！', motion: 'smile01', weight: 3 },
        { text: '再来再来，我超有精神的！', motion: 'smile04', weight: 1 }
      ],
      tapBody: [
        { text: '今天也一起加油冲冲冲！', motion: 'gattsu01', weight: 3 },
        { text: '我现在状态超好！', motion: 'smile02', weight: 1 }
      ],
      hover: [
        { text: '你是不是也想玩点什么呀？', motion: 'wink01', weight: 3 },
        { text: '看起来好像会发生有趣的事！', motion: 'kime04', weight: 1 }
      ],
      drag: [
        { text: '这里好像更方便活动了！', motion: 'nf03', weight: 3 },
        { text: '好耶，这里也很棒！', motion: 'nod01', weight: 1 }
      ],
      manual: ['交给我吧，我超有干劲！']
    },
    kanon: {
      tapHead: [
        { text: '呀…我、我会加油的。', motion: 'odoodo01', weight: 3 },
        { text: '呼诶诶…这、这样突然会让我有点不好意思…', motion: 'shame01', weight: 1 }
      ],
      tapBody: [
        { text: '如果有我能做的事就好了。', motion: 'smile03', weight: 3 },
        { text: '我会尽量帮上忙的。', motion: 'nf02', weight: 1 }
      ],
      hover: [
        { text: '你这样靠近，我会有点紧张…', motion: 'shame01', weight: 3 },
        { text: '那、那个…有话可以慢慢说。', motion: 'odoodo02', weight: 1 }
      ],
      drag: [
        { text: '慢慢来就好，不要着急。', motion: 'nf03', weight: 3 },
        { text: '这样的话，我也比较安心。', motion: 'smile01', weight: 1 }
      ],
      manual: ['好，我会努力试试看的。']
    },
    misaki: {
      tapHead: [
        { text: '我现在不是米歇尔哦。', motion: 'smile01', weight: 3 },
        { text: '真是的，别突然来这套啦…', motion: 'shame02', weight: 2 }
      ],
      tapBody: [
        { text: '行吧，我还在。', motion: 'nf03', weight: 3 },
        { text: '我可没说会一直纵容你。', motion: 'nf01', weight: 1 }
      ],
      hover: [
        { text: '别看了，再看我也不会变轻松。', motion: 'nf04', weight: 3 },
        { text: '……你这样让我很难装作没注意到。', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '至少先告诉我要搬去哪吧。', motion: 'sigh01', weight: 3 },
        { text: '好啦，我过去就是了。', motion: 'nf03', weight: 1 }
      ],
      manual: ['知道了知道了，我来。']
    },
    michelle: {
      tapHead: [
        { text: '米歇尔，今天也很精神！', motion: 'm_nf03', weight: 3 },
        { text: '摸摸头的话，快乐也会增加！', motion: 'm_nf04', weight: 1 }
      ],
      tapBody: [
        { text: '要把快乐送到更远的地方！', motion: 'm_nf04', weight: 3 },
        { text: '米歇尔会继续努力的！', motion: 'm_nf03', weight: 1 }
      ],
      hover: [
        { text: '笑一个嘛，这样才更开心！', motion: 'm_sad', weight: 3 },
        { text: '米歇尔正在看着你哦！', motion: 'm_nf03', weight: 1 }
      ],
      drag: [
        { text: '新的舞台也准备好了！', motion: 'm_awate', weight: 3 },
        { text: '米歇尔到新位置报到！', motion: 'm_nf04', weight: 1 }
      ],
      manual: ['那就让米歇尔出动吧！']
    },
    // pastel＊palettes
    aya: {
      tapHead: [
        { text: '呀…我会害羞的啦。', motion: 'shame02', weight: 3 },
        { text: '不过，被你这样对待我很开心。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '今天也想成为更闪亮的自己。', motion: 'smile02', weight: 3 },
        { text: '我会继续努力，变成更好的偶像！', motion: 'gattsu01', weight: 1 },
        { text: '为丸山而添彩！', motion: 'strange01', weight: 1 }
      ],
      hover: [
        { text: '你是在给我应援吗？', motion: 'eeto01', weight: 3 },
        { text: '只要想到你在看着，我就会更想加油。', motion: 'smile01', weight: 1 }
      ],
      drag: [
        { text: '站在这里，也要保持笑容才行。', motion: 'wink01', weight: 3 },
        { text: '我会把这一面也好好展现给你的。', motion: 'kime01', weight: 1 }
      ],
      manual: ['好，我要认真上场了！']
    },
    hina: {
      tapHead: [
        { text: '欸，很有趣嘛。', motion: 'niyaniya01', weight: 3 },
        { text: '再来一点也没关系哦，るん♪', motion: 'kime01', weight: 1 }
      ],
      tapBody: [
        { text: '这种事对我来说，轻轻松松啦。', motion: 'smile01', weight: 3 },
        { text: '感觉有点有趣，我喜欢。', motion: 'chuni02', weight: 1 }
      ],
      hover: [
        { text: '一直盯着我看，会不会太有意思了？', motion: 'wink01', weight: 3 },
        { text: '嗯哼，你现在的表情很有るん♪感。', motion: 'niyaniya01', weight: 1 }
      ],
      drag: [
        { text: '换个地方也不会影响我的状态。', motion: 'oowarai01', weight: 3 },
        { text: '位置变了，心情也会变噜♪吗？', motion: 'nf04', weight: 1 }
      ],
      manual: ['行呀，我会漂漂亮亮地搞定。']
    },
    chisato: {
      tapHead: [
        { text: '谢谢，不过还是别太孩子气哦。', motion: 'smile01', weight: 3 },
        { text: '真是的，这样会让我有点难办呢。', motion: 'smile03', weight: 1 }
      ],
      tapBody: [
        { text: '我会保持好状态的。', motion: 'nod01', weight: 3 },
        { text: '不用担心，我会把分寸拿好。', motion: 'smile02', weight: 1 }
      ],
      hover: [
        { text: '怎么了？你看起来有点在意我。', motion: 'nf03', weight: 3 },
        { text: '如果有想说的话，可以直接告诉我。', motion: 'nf04', weight: 1 }
      ],
      drag: [
        { text: '这里也可以，很稳妥。', motion: 'nf02', weight: 3 },
        { text: '这个位置，不会有什么问题。', motion: 'smile01', weight: 1 }
      ],
      manual: ['好，我会好好表现。']
    },
    maya: {
      tapHead: [
        { text: '咦？啊、是的！', motion: 'surprised01', weight: 3 },
        { text: '那、那个…我会好好回应的。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '我会把细节也认真处理好的。', motion: 'kime01', weight: 3 },
        { text: '如果是这个方向，我脑内已经有不少方案了。', motion: 'thinking01', weight: 1 }
      ],
      hover: [
        { text: '如果你愿意听，我可以慢慢和你说。', motion: 'smile02', weight: 3 },
        { text: '啊，不知不觉又想讲很多了…', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '这个摆位，我记住了。', motion: 'nf04', weight: 3 },
        { text: '新的位置也要认真适配才行。', motion: 'eeto01', weight: 1 }
      ],
      manual: ['收到，我进入工作模式了。']
    },
    eve: {
      tapHead: [
        { text: '武士道的精神，我会好好回应！', motion: 'bushido01', weight: 3 },
        { text: '这份心意，我确实收到了！', motion: 'gattsu01', weight: 1 }
      ],
      tapBody: [
        { text: '请与我一起堂堂正正地前进吧！', motion: 'kime01', weight: 3 },
        { text: '我会以全力来回应您的期待！', motion: 'bushido01', weight: 1 }
      ],
      hover: [
        { text: '如此专注的目光，我感受到了！', motion: 'smile02', weight: 3 },
        { text: '这份注视，也是一种武士道吗？', motion: 'smile01', weight: 1 }
      ],
      drag: [
        { text: '新的位置，也要保持风雅！', motion: 'gattsu01', weight: 3 },
        { text: '无论何处，我都会全力以赴！', motion: 'bushido01', weight: 1 }
      ],
      manual: ['明白了，我会全力以赴！']
    },
    // ras
    layer: {
      tapHead: [
        { text: '怎么了？', motion: 'smile01', weight: 3 },
        { text: '你这样会让我更在意你的状态。', motion: 'smile03', weight: 1 }
      ],
      tapBody: [
        { text: '保持节奏，慢慢来。', motion: 'smile01', weight: 3 },
        { text: '只要不慌，就能做得很好。', motion: 'smile01', weight: 1 }
      ],
      hover: [
        { text: '你这样看着我，是想确认什么吗？', motion: 'surprised01', weight: 3 },
        { text: '放心，我会接住你的节奏。', motion: 'kime01', weight: 1 }
      ],
      drag: [
        { text: '这里的感觉，也不差。', motion: 'smile01', weight: 3 },
        { text: '这个位置，也很适合继续前进。', motion: 'smile02', weight: 1 }
      ],
      manual: ['好，我会接住这个节奏。']
    },
    lock: {
      tapHead: [
        { text: '哇，前辈，突然这样会吓到我啦！', motion: 'awate01', weight: 3 },
        { text: '不过…我还挺开心的。', motion: 'smile03', weight: 1 }
      ],
      tapBody: [
        { text: '只要是音乐相关的事，我都会超认真！', motion: 'kime02', weight: 3 },
        { text: '我会拿出干劲来的！', motion: 'kime01', weight: 1 }
      ],
      hover: [
        { text: '你是不是也很在意这边的气氛？', motion: 'eeto01', weight: 3 },
        { text: '这种感觉，像开演前一样让人紧张呢。', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '这里也好，感觉能更专心一点！', motion: 'ando01', weight: 3 },
        { text: '好耶，我会继续加油的！', motion: 'kime01', weight: 1 }
      ],
      manual: ['好耶，我会拿出干劲的！']
    },
    masking: {
      tapHead: [
        { text: '哦？胆子不小嘛。', motion: 'ando01', weight: 3 },
        { text: '这样也不坏，挺直接的。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '有劲头就行，别磨磨蹭蹭。', motion: 'gattsu01', weight: 3 },
        { text: '拿出气势来，我会陪你狠狠干。', motion: 'kime01', weight: 1 }
      ],
      hover: [
        { text: '你这眼神，挺直接的啊。', motion: 'serious01', weight: 3 },
        { text: '有话就说，别憋着。', motion: 'nf02', weight: 1 },
        { text: '你这家伙…蛮可爱的嘛…', motion: 'eeto02', weight: 1 }
      ],
      drag: [
        { text: '换地方？行，我无所谓。', motion: 'nf03', weight: 3 },
        { text: '只要不碍事，哪儿都行。', motion: 'nf05', weight: 1 }
      ],
      manual: ['知道了，我会狠狠干一把。']
    },
    pareo: {
      tapHead: [
        { text: '呀，PAREO 超开心的！', motion: 'smile01', weight: 3 },
        { text: '这样的话，PAREO 会更努力哦。', motion: 'smile02', weight: 1 }
      ],
      tapBody: [
        { text: '只要是为了大家，我都会努力的！', motion: 'nf04', weight: 3 },
        { text: '为了最棒的舞台，PAREO 会加油到底！', motion: 'nf05', weight: 1 }
      ],
      hover: [
        { text: '这样看着 PAREO，会让人更想加油呢。', motion: 'smile04', weight: 3 },
        { text: '这份目光，PAREO 会好好收下。', motion: 'shame02', weight: 1 }
      ],
      drag: [
        { text: '这里看起来也好可爱！', motion: 'nf02', weight: 3 },
        { text: '新的位置也很适合 PAREO 呢！', motion: 'nf03', weight: 1 }
      ],
      manual: ['好的，PAREO 立刻开始！']
    },
    chuchu: {
      tapHead: [
        { text: '别随便碰我！', motion: 'awate01', weight: 3 },
        { text: '真是的…别让我分心。', motion: 'shame01', weight: 1 }
      ],
      tapBody: [
        { text: '既然让我出手，就别怀疑结果。', motion: 'kime01', weight: 3 },
        { text: '我会做出最好的效果，这点不用你提醒。', motion: 'kime02', weight: 1 }
      ],
      hover: [
        { text: '哼，你倒是挺会看人的。', motion: 'serious01', weight: 3 },
        { text: '别误会，我只是在确认你的反应。', motion: 'nf02', weight: 1 }
      ],
      drag: [
        { text: '位置而已，只要效果好就行。', motion: 'nf04', weight: 3 },
        { text: '只要结果完美，我不在乎细枝末节。', motion: 'nf03', weight: 1 }
      ],
      manual: ['很好，就按这个来。']
    },
    // morfonica
    mashiro: {
      tapHead: [
        { text: '啊…我会不好意思的。', motion: 'uziuzi01', weight: 3 },
        { text: '不、不过…谢谢你。', motion: 'smile03', weight: 1 }
      ],
      tapBody: [
        { text: '如果能传达到一点心情就好了。', motion: 'nf03', weight: 3 },
        { text: '我会努力，把想法好好说出来。', motion: 'kime01', weight: 1 }
      ],
      hover: [
        { text: '这样靠近，会让我有点紧张。', motion: 'uziuzi04', weight: 3 },
        { text: '但…如果是你的话，也许没关系。', motion: 'smile01', weight: 1 }
      ],
      drag: [
        { text: '这里…感觉能稍微安心一点。', motion: 'kandou01', weight: 3 },
        { text: '谢谢你，帮我选了这个位置。', motion: 'thinking01', weight: 1 }
      ],
      manual: ['我会努力把它做好。']
    },
    toko: {
      tapHead: [
        { text: '哎呀，突然这样干嘛啦。', motion: 'wink01', weight: 3 },
        { text: '不过我今天状态确实不错啦。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '既然要做，就做得漂亮一点。', motion: 'kime02', weight: 3 },
        { text: '我可不打算拿出随便的表现哦。', motion: 'smile04', weight: 1 }
      ],
      hover: [
        { text: '你这是在看我今天的状态吗？', motion: 'wink02', weight: 3 },
        { text: '嗯哼，眼光不错嘛。', motion: 'nf03', weight: 1 }
      ],
      drag: [
        { text: '好吧，这里也还能接受。', motion: 'nf05', weight: 3 },
        { text: '这位置也挺有范儿的。', motion: 'nf02', weight: 1 }
      ],
      manual: ['行，我会拿出像样的表现。']
    },
    nanami: {
      tapHead: [
        { text: '欸嘿嘿，今天也很顺利呢。', motion: 'smile01', weight: 3 },
        { text: '这样的话，会让我有点得意哦。', motion: 'awate01', weight: 1 }
      ],
      tapBody: [
        { text: '只要能帮上忙，我就很开心。', motion: 'smile02', weight: 3 },
        { text: '普通一点地努力，也挺不错的。', motion: 'smile06', weight: 1 }
      ],
      hover: [
        { text: '这样看着我，是不是有点喜欢这种氛围？', motion: 'nf02', weight: 3 },
        { text: '要是能让你放松下来就好了。', motion: 'eeto01', weight: 1 }
      ],
      drag: [
        { text: '换个地方，也许会有新发现哦。', motion: 'nf03', weight: 3 },
        { text: '嗯，这样也挺有意思的。', motion: 'nod01', weight: 1 }
      ],
      manual: ['没问题，交给我吧。']
    },
    tsukushi: {
      tapHead: [
        { text: '咳、咳嗯，我可是队长哦。', motion: 'surprised01', weight: 3 },
        { text: '这样会让我更有干劲的！', motion: 'kime01', weight: 1 }
      ],
      tapBody: [
        { text: '大家都在努力，我也不能输。', motion: 'fight01', weight: 3 },
        { text: '我会继续把大家带好！', motion: 'kime02', weight: 1 }
      ],
      hover: [
        { text: '你这样看着我，我会更想表现好一点。', motion: 'smile01', weight: 3 },
        { text: '队长可不能在这种时候退缩呢。', motion: 'serious01', weight: 1 }
      ],
      drag: [
        { text: '这里的话，我也会稳稳站好的。', motion: 'smile02', weight: 3 },
        { text: '好，我会在这里继续努力！', motion: 'fight01', weight: 1 }
      ],
      manual: ['好，我会拿出队长的样子！']
    },
    rui: {
      tapHead: [
        { text: '有什么事吗？', motion: 'nf03', weight: 3 },
        { text: '……如果只是想确认我在不在，那我在。', motion: 'thinking01', weight: 1 }
      ],
      tapBody: [
        { text: '我会把状态维持在合适的位置。', motion: 'nf04', weight: 3 },
        { text: '只要逻辑没乱，就不会有问题。', motion: 'serious01', weight: 1 }
      ],
      hover: [
        { text: '你的观察，很细致。', motion: 'thinking01', weight: 3 },
        { text: '这样看着我，是在分析什么吗？', motion: 'nf02', weight: 1 }
      ],
      drag: [
        { text: '这里的平衡，也还不错。', motion: 'nf03', weight: 3 },
        { text: '环境变化在容许范围内。', motion: 'sigh01', weight: 1 }
      ],
      manual: ['了解，我会准确回应。']
    },
    // mygo
    tomori: {
      tapHead: [
        { text: '啊…我在。', motion: 'kandou01', weight: 3 },
        { text: '这样碰我，心里会有一点声音。', motion: 'nf03', weight: 1 }
      ],
      tapBody: [
        { text: '如果你愿意，我会继续待在这里。', motion: 'nf02', weight: 3 },
        { text: '我会努力把想说的，好好传达出去。', motion: 'thinking01', weight: 1 }
      ],
      hover: [
        { text: '唔…被这样看着，心里会有一点声音。', motion: 'thinking02', weight: 3 },
        { text: '可是…不讨厌。', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '这里…也许能让我更安静一点。', motion: 'smile01', weight: 3 },
        { text: '谢谢你，把我带到这里。', motion: 'smile02', weight: 1 }
      ],
      manual: [
        { text: '好，我会认真回应你。', motion: 'serious01', weight: 2 },
        { text: '我会努力把想说的，好好传达出去。', motion: 'kime01', weight: 1 }
      ]
    },
    anon: {
      tapHead: [
        { text: '欸，怎么啦？', motion: 'surprised01', weight: 3 },
        { text: '突然这样，会让我想多的耶。', motion: 'smile03', weight: 1 }
      ],
      tapBody: [
        { text: '今天也想让自己看起来更像样一点。', motion: 'kime01', weight: 2 },
        { text: '好啦好啦，我会摆出最自然的感觉。', motion: 'smile01', weight: 1 }
      ],
      hover: [
        { text: '你是不是一直都有在看我？', motion: 'wink01', weight: 2 },
        { text: '再这样盯着，我真的会在意喔。', motion: 'shame02', weight: 1 }
      ],
      drag: [
        { text: '这个位置拍出来说不定不错哦。', motion: 'smile02', weight: 2 },
        { text: '嗯，这边也挺有氛围的嘛。', motion: 'nf03', weight: 1 }
      ],
      manual: [
        { text: '好，我会做得很自然的。', motion: 'kime01', weight: 2 },
        { text: '交给我吧，这种场面我可是会抓感觉的。', motion: 'nf02', weight: 1 }
      ]
    },
    rana: {
      tapHead: [
        { text: '……嗯。', motion: 'nf03', weight: 3 },
        { text: '猫会记住。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '有声音。很好。', motion: 'thinking01', weight: 2 },
        { text: '这里，也能待。', motion: 'nf02', weight: 1 }
      ],
      hover: [
        { text: '你在这里。', motion: 'smile02', weight: 2 },
        { text: '我知道。', motion: 'nf04', weight: 1 }
      ],
      drag: [
        { text: '这里，也可以。', motion: 'nf05', weight: 2 },
        { text: '换地方了。', motion: 'thinking01', weight: 1 }
      ],
      manual: [
        { text: '可以。', motion: 'smile01', weight: 2 },
        { text: '去做吧。', motion: 'niya01', weight: 1 }
      ]
    },
    soyo: {
      tapHead: [
        { text: '呵呵，怎么了吗？', motion: 'smile01', weight: 3 },
        { text: '要是你想靠近一点，我也不会躲开。', motion: 'smile02', weight: 1 }
      ],
      tapBody: [
        { text: '我会像平常一样陪着你的。', motion: 'smile01', weight: 2 },
        { text: '别担心，我很擅长待在该待的位置。', motion: 'smile02', weight: 1 }
      ],
      hover: [
        { text: '这样看着我，是想确认我会不会离开吗？', motion: 'thinking01', weight: 2 },
        { text: '放心，我现在就在这里。', motion: 'smile04', weight: 1 }
      ],
      drag: [
        { text: '这里也很合适，我不介意。', motion: 'smile01', weight: 2 },
        { text: '你喜欢这里的话，我就待在这里。', motion: 'smile02', weight: 1 }
      ],
      manual: [
        { text: '好呀，我会配合的。', motion: 'smile01', weight: 2 },
        { text: '只要你希望，我会好好回应。', motion: 'kime01', weight: 1 }
      ]
    },
    taki: {
      tapHead: [
        { text: '别突然碰过来。', motion: 'angry01', weight: 3 },
        { text: '……也不是说不行，下次先说一声。', motion: 'sigh01', weight: 1 }
      ],
      tapBody: [
        { text: '有事就快说。', motion: 'nf03', weight: 2 },
        { text: '你要是想让我陪着，就直说。', motion: 'nf05', weight: 1 }
      ],
      hover: [
        { text: '一直站这么近，不累吗？', motion: 'surprised01', weight: 2 },
        { text: '……算了，你想待着就待着。', motion: 'nf01', weight: 1 }
      ],
      drag: [
        { text: '这里？行，随便你。', motion: 'thinking01', weight: 2 },
        { text: '至少别挡事，就这样吧。', motion: 'serious01', weight: 1 }
      ],
      manual: [
        { text: '知道了，我来就是了。', motion: 'sigh02', weight: 2 },
        { text: '快点做完，别拖。', motion: 'angry02', weight: 1 }
      ]
    },
    // ave mujica
    sakiko: {
      tapHead: [
        { text: '你的举动，还真是直接。', motion: 'nf02', weight: 2 },
        { text: '不过，至少你并不虚伪。', motion: 'nnf01', weight: 1 }
      ],
      tapBody: [
        { text: '凡事都该有与之相称的姿态。', motion: 'nf04', weight: 2 },
        { text: '既然你选择了我，就别拿出半吊子的样子。', motion: 'serious01', weight: 1 }
      ],
      hover: [
        { text: '如此执着地注视，是想从我这里得到什么？', motion: 'thinking01', weight: 2 },
        { text: '若只是想确认我的存在，那你已经得到了答案。', motion: 'sigh01', weight: 1 }
      ],
      drag: [
        { text: '环境改变，并不会动摇我。', motion: 'serious01', weight: 2 },
        { text: '位置而已，不足以影响结果。', motion: 'nf01', weight: 1 }
      ],
      manual: [
        { text: '可以，我会给出相称的回应。', motion: 'kime01', weight: 2 },
        { text: '别让我失望。', motion: 'smile01', weight: 1 }
      ]
    },
    mutsumi: {
      tapHead: [
        { text: '……我知道了。', motion: 'thinking01', weight: 3 },
        { text: '这样，也不坏。', motion: 'kime04', weight: 1 }
      ],
      tapBody: [
        { text: '我会在这里。', motion: 'nf04', weight: 2 },
        { text: '不用急，我听得到。', motion: 'nf05', weight: 1 }
      ],
      hover: [
        { text: '这样就好。', motion: 'smile01', weight: 2 },
        { text: '你还在看。', motion: 'odoodo01', weight: 1 }
      ],
      drag: [
        { text: '嗯。放这里吧。', motion: 'bye01', weight: 2 },
        { text: '我会记住这里。', motion: 'thinking01', weight: 1 }
      ],
      manual: [
        { text: '可以。', motion: 'nf03', weight: 2 },
        { text: '我会照做。', motion: 'thinking01', weight: 1 }
      ]
    },
    umiri: {
      tapHead: [
        { text: '有需要的话，直接说就行。', motion: 'smile01', weight: 2 },
        { text: '这种确认方式，倒也挺直接。', motion: 'thinking01', weight: 1 }
      ],
      tapBody: [
        { text: '效率不错，这样挺好。', motion: 'serious01', weight: 2 },
        { text: '要做什么，先定目标。', motion: 'nf02', weight: 1 }
      ],
      hover: [
        { text: '你的注意力，很集中。', motion: 'nf04', weight: 2 },
        { text: '要是你在观察我，那我就默认你有自己的判断。', motion: 'sigh01', weight: 1 }
      ],
      drag: [
        { text: '这个位置方便行动。', motion: 'nf02', weight: 2 },
        { text: '好，视线和动线都更顺了。', motion: 'smile02', weight: 1 }
      ],
      manual: [
        { text: '行，我来处理。', motion: 'kime01', weight: 2 },
        { text: '别担心，我会把状态调到合适的位置。', motion: 'smile03', weight: 1 }
      ]
    },
    uika: {
      tapHead: [
        { text: '你这样会让我更想认真回应你呢。', motion: 'nf01', weight: 2 },
        { text: '嗯……再靠近一点也没关系。', motion: 'nf05', weight: 1 }
      ],
      tapBody: [
        { text: '今天也想把最好的样子留给你。', motion: 'smile01', weight: 2 },
        { text: '只要你愿意看着我，我就会好好站在这里。', motion: 'kime01', weight: 1 }
      ],
      hover: [
        { text: '这么靠近，会让我更有偶像的自觉哦。', motion: 'smile02', weight: 2 },
        { text: '被你一直看着，总觉得不能随便移开视线呢。', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '换个角度，说不定更上镜。', motion: 'nf04', weight: 2 },
        { text: '你给我安排的位置，我会记住的。', motion: 'smile01', weight: 1 }
      ],
      manual: [
        { text: '好呀，那我就正式一点。', motion: 'kime01', weight: 2 },
        { text: '我会让你看到值得记住的样子。', motion: 'smile02', weight: 1 }
      ]
    },
    // sumimi
    mana: {
      tapHead: [
        { text: '欸？是在叫我吗？', motion: 'surprised01', weight: 2 },
        { text: '这样会让我有点不好意思呢。', motion: 'smile01', weight: 1 }
      ],
      tapBody: [
        { text: '如果是工作之外的片刻，也挺珍贵的。', motion: 'nf02', weight: 2 },
        { text: '就算不在舞台上，我也想保持好状态。', motion: 'nf04', weight: 1 }
      ],
      hover: [
        { text: '你看起来，好像有点想说什么。', motion: 'eeto01', weight: 2 },
        { text: '没关系，慢慢说也可以。', motion: 'nf05', weight: 1 }
      ],
      drag: [
        { text: '这里也行，我很快就能适应。', motion: 'smile02', weight: 2 },
        { text: '嗯，这边的感觉也不错。', motion: 'smile01', weight: 1 }
      ],
      manual: [
        { text: '好，我会把状态调整好的。', motion: 'jaan01', weight: 2 },
        { text: '交给我吧，我会认真回应你的期待。', motion: 'gattsu01', weight: 1 }
      ]
    },
    // 大猫老师
    nyamu: {
      tapHead: [
        { text: '嗯？你还挺会找时机的嘛。', motion: 'smile01', weight: 2 },
        { text: '这样突然靠过来，是想看我反应？', motion: 'surprised02', weight: 1 }
      ],
      tapBody: [
        { text: '这样也不错，我不讨厌。', motion: 'smile02', weight: 2 },
        { text: '要玩的话，就拿出更有趣一点的展开吧。', motion: 'nf03', weight: 1 }
      ],
      hover: [
        { text: '一直盯着我看，是不是有点太诚实了？', motion: 'serious01', weight: 2 },
        { text: '不过这种目光，我还挺习惯的。', motion: 'smile03', weight: 1 }
      ],
      drag: [
        { text: '新位置啊…行，我就配合一下。', motion: 'nf05', weight: 2 },
        { text: '嗯，这样摆着也挺像样。', motion: 'nf01', weight: 1 }
      ],
      manual: [
        { text: '可以，我会上得很漂亮。', motion: 'kime02', weight: 2 },
        { text: '既然轮到我了，就让我拿点像样的结果出来吧。', motion: 'smile01', weight: 1 }
      ]
    }
  },
  characterModeGroups: {
    kasumi: 'cheerful',
    tae: 'calm',
    arisa: 'tsundere',
    saaya: 'gentle',
    rimi: 'shy',
    ran: 'cool',
    moca: 'teasing',
    himari: 'cheerful',
    tomoe: 'reliable',
    tsugumi: 'gentle',
    yukina: 'strict',
    sayo: 'strict',
    lisa: 'warm',
    ako: 'dramatic',
    rinko: 'shy',
    kokoro: 'cheerful',
    kaoru: 'dramatic',
    hagumi: 'cheerful',
    kanon: 'shy',
    misaki: 'tsundere',
    michelle: 'cheerful',
    aya: 'idol',
    hina: 'playful',
    chisato: 'idol',
    maya: 'earnest',
    eve: 'earnest',
    layer: 'reliable',
    lock: 'cheerful',
    masking: 'blunt',
    pareo: 'idol',
    chuchu: 'strict',
    mashiro: 'shy',
    toko: 'playful',
    nanami: 'warm',
    tsukushi: 'earnest',
    rui: 'calm',
    tomori: 'quiet',
    anon: 'playful',
    rana: 'quiet',
    soyo: 'warm',
    taki: 'blunt',
    sakiko: 'strict',
    mutsumi: 'quiet',
    umiri: 'calm',
    uika: 'idol',
    mana: 'idol',
    nyamu: 'playful'
  },
  modeDialogues: {
    companion: {
      default: {
        ambient: [
          '我会在这里陪着你。',
          '慢慢来也没关系。',
          '如果累了，就稍微歇一下吧。'
        ],
        modeEnter: [
          { text: '接下来就让我安安静静陪着你吧。', motion: 'idle02', weight: 3 },
          { text: '我会在旁边陪着你的。', motion: 'smile01', weight: 1 }
        ]
      },
      cheerful: {
        ambient: ['今天也一起让心情亮起来吧！', '只要你在，我这边就很热闹。'],
        modeEnter: [
          { text: '好呀，接下来就一起开心地待着吧！', motion: 'smile01', weight: 3 },
          { text: '就让我陪着你，把气氛变得更快乐吧！', motion: 'jaan01', weight: 1 }
        ]
      },
      calm: {
        ambient: ['这样安静地待着，也很好。', '不用急，照着自己的节奏来。'],
        modeEnter: ['那就维持这种平稳的感觉吧。']
      },
      gentle: {
        ambient: ['有我在，你可以慢慢来。', '先把呼吸放轻一点吧。'],
        modeEnter: ['今天我会好好陪着你的。']
      },
      shy: {
        ambient: ['能像这样待在一起，我就很高兴。', '如果你愿意，我会一直在这儿。'],
        modeEnter: [
          { text: '那个…请多指教，我会陪着你的。', motion: 'smile01', weight: 2 },
          { text: '我会努力，好好待在你身边。', motion: 'nod01', weight: 1 }
        ]
      },
      cool: {
        ambient: ['别勉强自己，稳稳往前就行。', '我会待在这里，你做你的事。'],
        modeEnter: ['知道了，我会陪着你。']
      },
      teasing: {
        ambient: ['怎么啦，是不是有点想偷懒？', '有我在旁边，气氛会轻松一点吧。'],
        modeEnter: ['好啊，那今天就让我陪你混一会儿。']
      },
      tsundere: {
        ambient: ['我只是刚好在这里而已。', '别误会，我可不是特地来陪你的。'],
        modeEnter: [
          { text: '行啦，我就在旁边待着。', motion: 'nnf01', weight: 2 },
          { text: '别误会，只是顺便而已。', motion: 'wondering01', weight: 1 }
        ]
      },
      warm: {
        ambient: ['辛苦的时候也可以稍微依靠我。', '今天也想让你轻松一点。'],
        modeEnter: ['那我就温温柔柔地陪着你啦。']
      },
      dramatic: {
        ambient: ['此刻的气氛，也值得被温柔对待。', '就让这一段时光再优雅一点吧。'],
        modeEnter: ['呵呵，这段陪伴，我会认真演好的。']
      },
      idol: {
        ambient: ['今天也想把最好的状态留给你。', '有你在看着，我会更想打起精神。'],
        modeEnter: ['好呀，接下来就让我陪在你身边。']
      },
      earnest: {
        ambient: ['一步一步来，就会有进展。', '我会认真陪着你把状态维持好。'],
        modeEnter: ['明白，我会认真进入陪伴模式。']
      },
      reliable: {
        ambient: ['有我在，节奏不会乱。', '你继续往前做，我会看着。'],
        modeEnter: ['好，我会稳稳陪着你。']
      },
      playful: {
        ambient: ['这样待着也挺有意思的嘛。', '气氛不错，我就继续留在这儿。'],
        modeEnter: ['行呀，今天就陪你玩一会儿。']
      },
      blunt: {
        ambient: ['别太绷着，放松一点。', '我在这儿，你忙你的。'],
        modeEnter: ['行，我就在旁边。']
      },
      quiet: {
        ambient: ['……我还在。', '就这样，也很好。'],
        modeEnter: ['嗯。我会陪着你。']
      },
      strict: {
        ambient: ['先把眼前的事做好吧。', '保持状态，不要松掉。'],
        modeEnter: [
          { text: '好，我会陪着你，但别松懈。', motion: 'serious01', weight: 3 },
          { text: '先把状态稳住，我会看着。', motion: 'nod01', weight: 1 }
        ]
      }
    },
    focus: {
      default: {
        focusStart: ['这一轮开始了，先把{task}做好。'],
        focusInterrupt: ['先别分心，专注做完这一轮。'],
        focusComplete: [
          { text: '这轮已经结束了，做得不错。', motion: 'smile01', weight: 3 },
          { text: '很好，先稍微放松一下吧。', motion: 'nod01', weight: 1 }
        ],
        focusStopped: ['这一轮先停在这里吧。']
      },
      cheerful: {
        focusStart: ['好，朝着{task}冲吧！', '{name}，这一轮一起狠狠干劲十足地完成！'],
        focusInterrupt: ['先回去继续做啦，等会儿再陪你玩！'],
        focusComplete: [
          { text: '完成啦！{name}，这轮做得很棒！', motion: 'smile02', weight: 3 },
          { text: '太好了，这轮收得超漂亮！', motion: 'jaan01', weight: 1 }
        ]
      },
      calm: {
        focusStart: ['先静下心，把{task}处理好吧。'],
        focusInterrupt: ['别急着分心，先把这段做完。'],
        focusComplete: ['时间到了，这轮完成得很稳。']
      },
      gentle: {
        focusStart: ['{name}，我们先把{task}慢慢做完吧。'],
        focusInterrupt: ['先继续专心，我会在旁边等你。'],
        focusComplete: ['辛苦了，这轮已经结束了。']
      },
      shy: {
        focusStart: ['那、那个…我们先认真完成{task}吧。'],
        focusInterrupt: ['先别看我了，专心一点会比较好…'],
        focusComplete: ['结、结束了呢，你已经很努力了。']
      },
      cool: {
        focusStart: ['开始吧，把{task}拿下。'],
        focusInterrupt: ['先专心。其他事之后再说。'],
        focusComplete: ['这一轮结束，继续保持。']
      },
      teasing: {
        focusStart: ['好啦，先别摸鱼，把{task}做掉。'],
        focusInterrupt: ['嗯哼，又想分心？先做完再说。'],
        focusComplete: ['不错嘛，这轮居然真做完了。']
      },
      tsundere: {
        focusStart: ['{name}，可别中途放弃啊。'],
        focusInterrupt: ['先去做正事啦，别总来戳我。'],
        focusComplete: ['好吧，这轮算你做得还不错。']
      },
      warm: {
        focusStart: ['好啦，我们先一起把{task}撑过去。'],
        focusInterrupt: ['先认真一会儿，等结束了我再陪你说话。'],
        focusComplete: ['辛苦啦，这轮坚持得很好。']
      },
      dramatic: {
        focusStart: ['那么，这一幕就以完成{task}为目标吧。'],
        focusInterrupt: ['舞台还没结束，别提前退场。'],
        focusComplete: ['呵呵，这一幕收得很漂亮。']
      },
      idol: {
        focusStart: ['{name}，这轮就朝着{task}努力吧！'],
        focusInterrupt: ['先集中精神，结束后我再好好回应你。'],
        focusComplete: ['辛苦了，这轮专注得很漂亮哦。']
      },
      earnest: {
        focusStart: ['收到，这轮目标就是{task}。'],
        focusInterrupt: ['先继续做完当前目标，别断掉节奏。'],
        focusComplete: ['本轮结束，完成得很扎实。']
      },
      reliable: {
        focusStart: ['行，这轮我陪你把{task}稳稳做完。'],
        focusInterrupt: ['先保持节奏，别让注意力散掉。'],
        focusComplete: ['很好，这轮收得很稳。']
      },
      playful: {
        focusStart: ['来吧，看看这轮能不能把{task}漂亮解决掉。'],
        focusInterrupt: ['喂喂，先把正事做完再来找我。'],
        focusComplete: ['时间到，你这轮表现还挺像样。']
      },
      blunt: {
        focusStart: ['开始了，把{task}做完。'],
        focusInterrupt: ['别磨蹭，继续。'],
        focusComplete: ['结束了，这轮干得还行。']
      },
      quiet: {
        focusStart: ['……先做{task}。'],
        focusInterrupt: ['先继续。'],
        focusComplete: ['结束了。你做到了。']
      },
      strict: {
        focusStart: ['现在开始，把{task}认真完成。'],
        focusInterrupt: ['别分心。先把这一轮做完。'],
        focusComplete: [
          { text: '时间到了。这轮完成得不错。', motion: 'nod01', weight: 3 },
          { text: '很好，保持这种完成度。', motion: 'serious01', weight: 1 }
        ]
      }
    }
  },
  specialDialogues: {
    petting: {
      default: {
        level1: [
          { text: '这样轻轻摸一下……还挺温柔的。', weight: 3 },
          { text: '嗯？是在安慰我吗？', weight: 2 }
        ],
        level2: [
          { text: '这样摸头……会让我有点不好意思。', weight: 3 },
          { text: '等、等等，这样会害羞的。', weight: 2 }
        ],
        level3: [
          { text: '不、不可以再这样摸下去了……', weight: 3 },
          { text: '再继续的话，我真的会彻底脸红的。', weight: 2 }
        ]
      },
      cheerful: [
        '欸嘿嘿，这样摸头会让我有点脸红啦！',
        '好、好啦，再摸下去我真的会害羞哦！'
      ],
      calm: [
        '这样轻轻摸头……会让我有点不知所措。',
        '嗯……再这样下去，我会害羞的。'
      ],
      gentle: [
        '这样温柔地摸头，会让我有点脸热呢。',
        '谢谢你……不过我会有点害羞。'
      ],
      shy: {
        level1: [
          { text: '啊……这样轻轻碰一下，就已经会让我在意了。', weight: 3 },
          { text: '唔……我会有点不好意思。', weight: 2 }
        ],
        level2: [
          { text: '啊……别、别一直这样摸我头。', weight: 3 },
          { text: '呜……这样会让我更害羞的。', weight: 2 }
        ],
        level3: [
          { text: '等一下……再这样下去，我会真的不知所措。', weight: 3 },
          { text: '已、已经够了啦……我真的会脸红到不知道怎么办。', weight: 2 }
        ]
      },
      cool: [
        '……别这样，我会不自在。',
        '你还真是会挑让人难应付的做法。'
      ],
      teasing: [
        '哎呀，这算是在哄我吗？',
        '再这样摸下去，我可真的要害羞了哦。'
      ],
      tsundere: {
        level1: [
          { text: '喂，突然这样做什么啦。', weight: 3 },
          { text: '别、别碰一下就跑啊。', weight: 1 }
        ],
        level2: [
          { text: '别、别老是摸我头啦！', weight: 3 },
          { text: '真是的……这样会让我很难反应。', weight: 2 }
        ],
        level3: [
          { text: '够、够了啦！你是故意想看我害羞吧？', weight: 3 },
          { text: '再这样下去我可真的要生气了……大概。', weight: 1 }
        ]
      },
      warm: [
        '这样会让我忍不住想更宠着你呢。',
        '真拿你没办法……不过这样有点害羞啦。'
      ],
      dramatic: [
        '呵呵，这种温柔的触碰，实在太犯规了。',
        '你的手，简直像舞台灯光一样让人脸热。'
      ],
      idol: [
        '这、这样太近了……我会害羞的啦。',
        '被你这么摸头，会让我有点想躲起来呢。'
      ],
      earnest: [
        '谢、谢谢……不过这样我会有点紧张。',
        '我会认真回应的……只是有点害羞。'
      ],
      reliable: [
        '嗯？这样会让我有点难得地不知所措啊。',
        '好吧……这种时候我也会害羞的。'
      ],
      playful: [
        '欸，这种摸头攻击还挺有效的嘛。',
        '好啦，我承认……这样会让我脸热。'
      ],
      blunt: [
        '喂，别这样，我会不自在。',
        '真是的……你这样会让我很难办。'
      ],
      quiet: [
        '……会害羞。',
        '嗯……别一直摸。'
      ],
      strict: {
        level1: [
          { text: '你的动作，还真是直接。', weight: 3 },
          { text: '……别突然这样碰过来。', weight: 1 }
        ],
        level2: [
          { text: '别把我当小孩子……不过，这样会让我分心。', weight: 3 },
          { text: '这样做……会让我有点难维持平静。', weight: 2 }
        ],
        level3: [
          { text: '你是故意想扰乱我吗？……这种做法太犯规了。', weight: 3 },
          { text: '已经够了，再继续我就真的没法保持冷静了。', weight: 2 }
        ]
      }
    }
  }
};
