new Vue({
    el:"#app",
    data: {
        nyuryokugaku:0,
        zandaka:0,
        logs:[]
    },
    methods: {
        nyukin: function () {
// inputで入力される値はString型なので、Number() でNumber型に変換しないといけない。
            this.zandaka += Number(this.nyuryokugaku);
            const now = new Date()
            this.logs.push({
                date: now,
                type: "入金",
                money: this.nyuryokugaku
            })
        },
        shukkin: function () {
            this.zandaka -= Number(this.nyuryokugaku);
            const now = new Date()
            this.logs.push({
                date: now,
                type: "出金",
                money: this.nyuryokugaku
            })
        }
    }, 
    computed:{
        difference: function () {
            let number_difference=0
            number_difference=this.zandaka-Number(this.nyuryokugaku)
            return number_difference;
        }
    }
});
