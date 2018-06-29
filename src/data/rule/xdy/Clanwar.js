export const Clanwar = {
    id: '2',
    name: "部落战",
    icon: "clanwar",

    title:{ type: 'danger', text: "部落战强制参加，挂红牌直接踢出部落" },
    details:[
        {
            title:"部落战防守援军——上位捐兵法（在部落战准备期间进入部落战界面可以给自己的上位捐兵）",
            contents:[
                { type:"warning", text:"部落战每个人只给自己的上一位捐兵（注：第一名给倒数第一个捐），其他人不用你管" },
                "10空间——2法师+2弓箭",
                "15空间——3法师+3弓箭",
                "20空间——1龙（如果你没有龙，则捐4法师+4弓箭）",
                "25空间——1龙+1法师+1弓箭（如果你没有龙，则捐6法师+1弓箭）",
                "30空间——1龙+2法师+2弓箭（如果你没有龙，则捐7法师+1弓箭）",
                "35空间——1龙+3法师+3弓箭（如果你没有龙，则捐8法师）",
                { type:"warning", "text": "部落战准备剩余10小时开始检查，没有按照要求捐的视为不合格进行禁止参加部落战惩罚（禁赛场数参考“部落战规定违法惩罚”）" }
            ]
        },
        {
            title: "部落战打法",
            contents:[
                "1）先引出援军再攻击，龙流、龙气、球狗流可无视此规定",
                "2）部落攻击时，如果你排名为n（部落战位置在进入部落战界面后可以才能看到，和平时的排名不一样），那么本次你只能攻击对方的(n-4)~(3n+5)之间的敌方部落，比如你排面为5，那么本次部落站你只能在1~20之间选取目标进行攻击。（本条规定在部落战开战2小时后失效）禁止攻击已经三星的目标。（本条规定在部落站最后20小时有变化）",
                "3）部落禁止偷本（偷本指只攻击对方大本营，混1~2星拿奖励），请出动最强兵种。",
                "4）部落战开战2小时后可攻击任何目标；部落站最后20小时，如果你无法取得更多星，可以攻击已经三星目标"
            ]
        },
        {
            title: "部落战输掉惩罚（游戏规定）",
            contents:[{type: "danger", text: "所有奖励大幅度减少，约等于系统提示奖励的20%"}]
        },
        {
            title: "部落战规定违法惩罚",
            contents: [
                { type:"danger", text:"不加QQ群的不会禁赛，直接踢（这样你拿不到任何部落战奖励）"},
                "1）不上位捐兵，初次禁赛5场，再犯禁赛场数为上次的2倍",
                "1）不引援军，初次禁赛1场，再犯禁赛场数为上次的2倍",
                "2）攻击位数错，初次禁赛2场，再犯禁赛场数为上次的2倍",
                "3）可以取得更多星却攻击已经取得3星目标，初次禁赛3场，再犯禁赛场数为上次的2倍",
                "4）部落站参加不打，初次禁赛8场，再犯禁赛场数为上次的2倍",
                "5）偷本踢掉",
                { type:"danger", text:"所有惩罚记录参看罪人榜"}
            ]
        }
    ]
};