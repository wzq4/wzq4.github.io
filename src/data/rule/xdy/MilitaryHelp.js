export const MilitaryHelp = {
    id: '1',
    name: "捐兵",
    icon: "military-help",

    details:[
        {
            title: "一、捐兵兵种",
            contents: ["默认弓箭、法师、亡灵（禁止捐野蛮人、哥布林、炸弹、巨人、气球、天使、女武神、野猪、皮卡超人、戈仑石人，除非对方写明收该兵种，如果对方写随意之类表示对方不收禁捐兵种）；捐兵一级起捐，不写等级限制则视为对方接受一级",{type:"warning", text: "非部落战援军的请求，10分钟不满，可以直接捐默认，如果有人有意见会被踢（）"},{ type:"danger", text: "乱捐后果：被踢" }]
        },
        {
            title: "二、捐收比",
            contents: ["1:3，每捐1个兵可以收3个兵（你的捐收比要大于等于1:3）", "捐收比0:0，在数学上视为无穷解，不满足1:3的的规定，依旧会被踢", { type: "danger", text: "捐收比不合格后果：禁止参加部落战，每周不定期踢掉捐收比不合格的成员" }]
        }
    ]
};