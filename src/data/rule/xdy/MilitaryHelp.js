export const MilitaryHelp = {
    id: '1',
    name: "捐兵",
    icon: "military-help",

    details:[
        /*
        {
            title: "一、捐兵兵种",
            contents: [
                "默认弓箭、法师、亡灵（禁止捐野蛮人、哥布林、炸弹、巨人、气球、天使，除非对方写明收该兵种，如果对方写随意之类表示对方不收禁捐兵种）；捐兵一级起捐，不写等级限制则视为对方接受一级",
                {type:"warning", text: "非部落战援军的请求，10分钟不满，可以直接捐默认，如果有人有意见会被踢"},
                {type:"danger", text: "禁止说高级、低级，必须采用量化标准——直接讲出几级。如果有人无视本规定，就无视他的要求直接捐任意等级级弓箭（哪怕他用于打部落战）" },
                {type:"danger", text: "乱捐后果：被踢" }
                ]
        },*/
        {
            title: "捐收比",
            contents: [
                "1:4，每捐1个兵可以收4个兵（你的捐收比要大于等于1:4）",
                "捐收比0:0，在数学上视为无穷解，不满足1:4的的规定，依旧会被踢",
                { type: "danger", text: "捐收比不合格后果：禁止参加部落战，每周不定期踢掉捐收比不合格的成员" }
                ]
        },
        {
            title: "填写援军请求建议",
            contents:[
                {type:"access", text: "禁止说高级、低级，必须采用量化标准——直接讲出几级起捐。每个人对高级、低级定义不一样，量化避免误会" }
            ]
        }
    ]
};