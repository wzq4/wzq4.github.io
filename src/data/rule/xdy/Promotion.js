export const Promotion = {
    id: '4',
    name: "升职",
    icon: "promotion",
    title:{
        type: "access",
        text: "每次部落战结束进行一次部落战评选"
    },
    details:[
        {
            title: "长老",
            contents: ["1.每赛季捐兵量达到500，部落战每次至少拿下3星", "2.部落竞赛分数>=1000", { type: "danger", text: "成为长老后，达不到要求会被降职为成员"}]
        },
        {
            title: "副首领",
            contents: ["1.加入QQ群", "2.每赛季捐兵量达到1000，部落战每次至少拿下3星", "3.部落竞赛分数>=3000", "4.经常讲解部落战打法，带领新人熟悉部落规定，引导加入QQ群", "5.按照部落战援军",  { type: "danger", text: "成为副首领后，达不到要求会被降职为长老"}]
        }
    ]
};