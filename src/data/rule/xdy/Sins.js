export const Sins = {
    id: '6',
    name: "罪人榜",
    icon: "sins",
    title:{
        type: "danger",
        text: "罪人榜分成轻犯和重犯两等：轻犯仅仅记录，待错误累计移动到重犯；重犯本部落永远不收，副首领、长老一旦发现立刻踢出。如果一周内没有违反部落规定，加入QQ群联系首领，可以移出罪人榜。",
        style: { "display": "block", "textIndent": "25px"}
    },
    details: [
        {
            title: "轻犯",
            titleStyle: {textAlign: "left", color: "#8a6d3b", "fontWeight": "bolder"},
            titleStyleMobile: { background: "#8a6d3b", color:'#FFF', "fontWeight": "bolder"},
            contents: [
                // { type: "card-warning", name: "（）", reasons:["不上位捐兵（第1次）", "总计禁赛场，剩余场"] },
                //{ type: "card-warning", name: "实验三年六班（#PYJQLRG29）", reasons:["不上位捐兵（第1次，禁赛5场）", "指定时间内，攻击位数错误（第1次，禁赛2场）", "总计禁赛7场，剩余7场"] },
                //{ type: "card-warning", name: "苦笑MA（#YGPRY9J9V）", reasons:["不上位捐兵（第1次，禁赛5场）", "总计禁赛5场，剩余5场"] },
                //{ type: "card-warning", name: "正易（#9229LQLUJ）", reasons:["不上位捐兵（第1次，禁赛5场）", "总计禁赛5场，剩余5场"] },
                { type: "card-warning", name: "就是不怕死（#P0LPPQL8Y）", reasons:["不上位捐兵（第2次，禁赛10场）", "总计禁赛10场，剩余10场"] },
                { type: "card-warning", name: "一只傻阿杰（#PYRYUYC9J）", reasons:["不上位捐兵（第1次，禁赛5场）", "部落战参加不打（第1次，禁8场）", "总计禁赛13场，剩余13场"] },
                //{ type: "card-warning", name: "海神（#PVCLQ8PJV）", reasons:["不上位捐兵（第1次，禁赛5场）", "总计禁赛5场，剩余1场"] },
            ],
        },
        {

            title: "重犯",
            titleStyle: {textAlign: "left", color: "#a94442", "fontWeight": "bolder"},
            titleStyleMobile: { background: "#a94442", color:'#FFF', "fontWeight": "bolder"},
            contentContainerStyle: { textAlign: "left" },
            contents: [
                { type: "card-danger", name: "竹马啊（#PU9R0RV8Q）", reasons:["竞赛积分不合格", "被踢后不反省反而恶意辱骂", "QQ 1289856087", "2000.1.31, 江苏泰州泰兴市人"] },
                { type: "card-danger", name: "至尊宝（#PPLQJRLV0）", reasons:["恶意辱骂"] },
                { type: "card-danger", name: "噬心先生就是我，我就是噬血先生（#2YJJ9CQ80）", reasons:["恶意辱骂", "QQ 3192887660"] },
                { type: "card-danger", name: "我的枪没软过（#P8RLC8RUP）", reasons:["恶意辱骂"] },
                { type: "card-danger", name: "郑肖植（#RRLGCCGV）", reasons:["恶意辱骂"] },
                { type: "card-danger", name: "2734935362（#RJ9LRLY0）", reasons:["宣传其他部落挖墙脚", "不打部落竞赛"] },
                { type: "card-danger", name: "你爸爸（#PG8LJVU2C）", reasons:["故意违反规定，无视规定"] },
                { type: "card-danger", name: "QQ: 2058851895", reasons:["河北-秦皇岛 2001年12月27日出生", "QQ恶意辱骂", "不捐兵，自私自利"] },
                { type: "card-danger", name: "开心（#P90CQ0GC0）", reasons: ["1.部落战参加不打，禁赛惩罚", "2.攻击位数错误（14位攻击对方4位）", "3.被禁赛惩罚2次，踢出部落"] },
                { type: "card-danger", name: "釛灵（#PLRU922JG）", reasons: ["1.脏话辱骂、自私自利", "2.QQ 2714149893，生日 1993.9.1，重庆 涪陵"] },
                { type: "card-danger", name: "推你塔了,（#PJQQRRJRU）", reasons: ["1.辱骂部落，制造矛盾"] },
                { type: "card-danger", name: "黎夜（#PVQJJ2URC）", reasons: ["1.自私自利，无可救药", "2.QQ 1469427254，生日 1998.7.16"] },
                { type: "card-danger", name: "月一（#PVJVY8CC2）", reasons: ["1.传递谣言来谋取自己的私利，分裂部落"] },
                { type: "card-danger", name: "邪神山庄（#Y88CPVULR）", reasons: ["1.部落战参加不打，禁赛惩罚", "2.恶意辱骂部落，制造矛盾"] },
            ],
        }
    ]
};