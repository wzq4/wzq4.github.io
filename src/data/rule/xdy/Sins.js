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
            contents: [],
        },
        {

            title: "重犯",
            titleStyle: {textAlign: "left", color: "#a94442", "fontWeight": "bolder"},
            titleStyleMobile: { background: "#a94442", color:'#FFF', "fontWeight": "bolder"},
            contentContainerStyle: { textAlign: "center" },
            contents: [
                { type: "card", name: "开心（#P90CQ0GC0）", reasons: ["1.部落战参加不打，禁赛惩罚", "2.攻击位数错误（14位攻击对方4位）", "3.被禁赛惩罚2次，踢出部落"] },
                { type: "card", name: "釛灵（#PLRU922JG）", reasons: ["1.脏话辱骂、自私自利", "2.QQ 2714149893，生日 1993.9.1，重庆 涪陵"] },
                { type: "card", name: "推你塔了,（#PJQQRRJRU）", reasons: ["1.辱骂部落，制造矛盾"] },
                { type: "card", name: "黎夜（#PVQJJ2URC）", reasons: ["1.自私自利，无可救药", "2.QQ 1469427254，生日 1998.7.16"] },
                { type: "card", name: "月一（#PVJVY8CC2）", reasons: ["1.传递谣言来谋取自己的私利，分裂部落"] },
                { type: "card", name: "邪神山庄（#Y88CPVULR）", reasons: ["1.部落战参加不打，禁赛惩罚", "2.恶意辱骂部落，制造矛盾"] },
            ],
        }
    ]
};