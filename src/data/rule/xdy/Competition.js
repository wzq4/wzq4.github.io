export const Competition = {
    id: "3",
    name: "部落竞赛",
    icon: "competition",
    details:[
        {
            title: "竞赛细则",
            contents: [
                "竞赛每人最低500积分（达不到踢，新来的那就只能怪你运气不好了）",
                { type: "danger", text: "剩余5天时每人竞赛积分必须 >= 100，不到踢" },
                { type: "danger", text: "剩余4天时每人竞赛积分必须 >= 200，不到踢" },
                { type: "danger", text: "剩余3天时每人竞赛积分必须 >= 300，不到踢" },
                { type: "danger", text: "剩余1天时每人竞赛积分必须 >= 400，不到踢" },
                { type: "danger", text: "剩余10小时开始清理积分不到500的成员" }
            ]
        }
    ]
};