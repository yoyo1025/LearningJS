let youtuber = {
    list: {
        bussiness: {
            youtuber: [
                { name: "しまぶー", age: 20, teachProgramming() { } },
                { name: "あっちゃん", age: 37, teachProgramming() { } }
            ],
            teach() { }
        },
        entertainment: {
            youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょー" }],
            makeSmile() { }
        },
    },
    plan() { },
    uoloadvideo() { },
};

youtuber.list.bussiness.youtuber[0].name

youtuber.plan()

youtuber.list.entertainment.makeSmile()