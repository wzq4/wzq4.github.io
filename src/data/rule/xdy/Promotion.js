export const Promotion = {
    id: '5',
    name: "升职",
    icon: "promotion",
    title:{
        type: "access",
        text: "每次部落战结束进行一次部落战评选"
    },
    details:[
        {
            title: "长老",
            contents: [
                "1.加入QQ群",
                "2.捐兵量达到100（赛季结束后捐兵记录清0后不会因为你在之后的赛季捐兵量不够100降职）",
                { type: "danger", text: "2.本人不在违规名单内"}
            ]
        },
        {
            title: "副首领",
            contents: [
                "1.加入QQ群",
                { type: "access", text:"2.每赛季捐兵量达到1000（和长老不同，每个赛季都需要捐兵量 >= 1000）"},
                "3.在群内向首领提出申请，之后首领会上传副首领升职试卷（同时会告诉你截至日期， 一般给7天时间），你进行下载答题 。如果本次失败，下个赛季捐兵清0后再申请",
                { type: "warning", text: "考试内容仅限部落规定"},
                { type: "access", text:"副首领如果进入违规名单(轻犯)，不会取消职位。"},
            ]
        }
    ]
};