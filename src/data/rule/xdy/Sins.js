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
                { type: "card-warning", name: "MRSS,**（#98OLQ9VRC）", reasons:["攻击位数错误，禁赛2场", "剩余2场"] },
                { type: "card-warning", name: "方式方法（#L9JCOO99）", reasons:["供给位数错误，禁赛2场", "剩余2场"] },
                { type: "card-warning", name: "凌筱烨（#8Y9GYQC2L）", reasons:["部落战参加没有打全2场，禁赛8场", "剩余7场"] },
                // { type: "card-warning", name: "《希望有你陪伴》—《战神-灵》（#Y8VJQ8YRC）", reasons:["部落战没有打全2场，禁赛8场", "剩余6场"] },
                // { type: "card-warning", name: "。。（#PY9OQUOVU）", reasons:["部落战没有打全2场，禁赛8场", "剩余2场"] },
                // // { type: "card-warning", name: "碎觉觉（#PC89P2UL2）", reasons:["部落战参加不打，禁赛8场", "剩余6场"] },
                // // { type: "card-warning", name: "过一星（#PRVCR8CY8）", reasons:["部落战参加不打，禁赛8场", "剩余6场"] },
                // { type: "card-warning", name: "色的小姨（#P8GG0GQ2V）", reasons:["部落战没有打全2场，禁赛8场", "剩余1场"] },
                // // { type: "card-warning", name: "xax1314（#PR2LGJOGR）", reasons:["部落战参加不打，禁赛8场", "剩余6场"] },
                // // { type: "card-warning", name: "单身会上瘾（#PVLY99VCO）", reasons:["部落战没有打全2场，禁赛8场", "剩余6场"] },
                // { type: "card-warning", name: "疾影灬鸿蒙（#9YVC09GLQ）", reasons:["部落战参加不打，禁赛8场", "剩余1场"] },
                // // { type: "card-warning", name: "专属（#9PPQVQ2CQ）", reasons:["部落战参加不打，禁赛8场", "剩余5场"] },
                // { type: "card-warning", name: "烈焰风暴防区（#8VJLVPYL9）", reasons:["部落战没有打全2场，禁赛8场", "剩余1场"] },
                // { type: "card-warning", name: "中国合作伙伴（#PJOUQLJ8L）", reasons:["部落战没有打全2场，禁赛8场", "剩余5场"] },
                // { type: "card-warning", name: "死亡/魔都（#Y29U2R9CG）", reasons:["部落战参加不打，禁赛8场", "剩余4场"] },
                // { type: "card-warning", name: "咕噜部落（#2CGYCRG8J）", reasons:["部落战参加没有打全2场，禁赛8场", "剩余0场"] },
                // { type: "card-warning", name: "itcf（#9CV29LOOY）", reasons:["部落战参加没有打全2场，禁赛8场", "剩余8场"] },
                // { type: "card-warning", name: "贪恋❤你温柔（#PGPPRRPUV）", reasons:["部落战参加没有打全2场，禁赛8场", "剩余8场"] },
                // { type: "card-warning", name: "顾陈是个坑（#PGYPV9VVC9）", reasons:["部落战参加没有打全2场，禁赛8场", "剩余0场"] },
                // { type: "card-warning", name: "无敌的我（#YPRYPRUVG）", reasons:["部落战参加不打，禁赛8场", "剩余8场"] },
            ],
        },
        {

            title: "重犯",
            titleStyle: {textAlign: "left", color: "#a94442", "fontWeight": "bolder"},
            titleStyleMobile: { background: "#a94442", color:'#FFF', "fontWeight": "bolder"},
            contentContainerStyle: { textAlign: "left" },
            contents: [
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