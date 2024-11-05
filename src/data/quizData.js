export const quizData = {
    title: "你適合哪種念能力?",
    description: "透過這個測驗來發現最適合你的獵人念能力！",
    questions: [
        {
            id: 1,
            text: "面對困難時，你通常會怎麼做？",
            image: "/images/questions/challenge.png",
            options: [
                {
                    text: "直接用力量解決問題",
                    image: "/images/options/strength.png",
                    score: { enhancement: 2, emission: 1, manipulation: 0 }
                },
                {
                    text: "觀察分析後再行動",
                    image: "/images/options/analyze.png",
                    score: { specialization: 2, conjuration: 1, transmutation: 1 }
                },
                {
                    text: "尋找創新的解決方法",
                    image: "/images/options/creative.png",
                    score: { transmutation: 2, specialization: 1, manipulation: 1 }
                }
            ]
        },
        {
            id: 2,
            text: "你比較喜歡哪種戰鬥方式？",
            image: "/images/questions/battle.png",
            options: [
                {
                    text: "近距離格鬥",
                    image: "/images/options/close-combat.png",
                    score: { enhancement: 2, transmutation: 1, emission: 0 }
                },
                {
                    text: "遠距離攻擊",
                    image: "/images/options/ranged.png",
                    score: { emission: 2, manipulation: 1, specialization: 1 }
                },
                {
                    text: "策略性戰鬥",
                    image: "/images/options/strategy.png",
                    score: { manipulation: 2, specialization: 2, conjuration: 1 }
                }
            ]
        },
        {
            id: 3,
            text: "在團隊中，你通常扮演什麼角色？",
            image: "/images/questions/team.png",
            options: [
                {
                    text: "前線戰士",
                    image: "/images/options/warrior.png",
                    score: { enhancement: 2, emission: 1, transmutation: 1 }
                },
                {
                    text: "後勤支援",
                    image: "/images/options/support.png",
                    score: { conjuration: 2, manipulation: 1, specialization: 1 }
                },
                {
                    text: "戰術指揮",
                    image: "/images/options/tactician.png",
                    score: { specialization: 2, manipulation: 2, conjuration: 1 }
                }
            ]
        }
    ],
    results: {
        enhancement: {
            name: "強化系",
            description: "你是個直接果斷的人，擅長將自身的能力發揮到極致。強化系能讓你在近身戰鬥中發揮出驚人的破壞力。代表人物：小傑、尤瓦波爾",
            image: "/images/results/enhancement.png"
        },
        emission: {
            name: "放出系",
            description: "你喜歡保持距離並發動強力攻擊，放出系能讓你將念能力投射到遠處。代表人物：雷歐力、拉茲",
            image: "/images/results/emission.png"
        },
        manipulation: {
            name: "操作系",
            description: "你善於控制局勢，喜歡掌握全局。操作系能讓你控制物體或他人，創造有利態勢。代表人物：伊爾迷、沙利叟",
            image: "/images/results/manipulation.png"
        },
        conjuration: {
            name: "具現化系",
            description: "你富有想像力，能夠將想法實體化。具現化系能讓你創造出各種物品，靈活應對不同情況。代表人物：酷拉皮卡、柯特",
            image: "/images/results/conjuration.png"
        },
        transmutation: {
            name: "變化系",
            description: "你思維靈活，善於改變和適應。變化系能讓你改變物質的性質，創造出意想不到的效果。代表人物：西索、基爾魯亞",
            image: "/images/results/transmutation.png"
        },
        specialization: {
            name: "特質系",
            description: "你具有獨特的個性和特殊的天賦。特質系能讓你發展出獨一無二的能力。代表人物：庫洛洛、奇多",
            image: "/images/results/specialization.png"
        }
    }
}; 