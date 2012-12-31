describe("CountCoins", function(){
    var cc;

    beforeEach(function(){
        cc = new CountCoins();
    });

    it("should be creatable", function () {
        expect(cc).toBeDefined();
    });

    it("should return single penny when given one cent", function () {
        var result = cc.getCoinCombos(1);
        expect(result[0].length).toEqual(1);
        expect(result[0][0].CoinType).toEqual(CoinTypes.Penny);
        expect(result[0][0].Count).toEqual(1);
    });

    it("should return two pennies when given two cents", function () {
        var result = cc.getCoinCombos(2);
        expect(result[0].length).toEqual(1);
        expect(result[0][0].CoinType).toEqual(CoinTypes.Penny);
        expect(result[0][0].Count).toEqual(2);
    });

    it("should return four pennies when given four cents", function () {
        var result = cc.getCoinCombos(4);
        expect(result[0].length).toEqual(1);
        expect(result[0][0].CoinType).toEqual(CoinTypes.Penny);
        expect(result[0][0].Count).toEqual(4);
    });

    describe("should return five pennies and a nickle when given five cents", function () {
        var result;

        beforeEach(function(){
            result = cc.getCoinCombos(5);
        });

        it("should set the correct number of sets", function () {
            expect(result.length).toEqual(2);
        });

        it("should return 5 pennies", function () {
            expect(result[0].length).toEqual(1);
            expect(result[0][0].CoinType).toEqual(CoinTypes.Penny);
            expect(result[0][0].Count).toEqual(5);
        });

        it("should return 5 pennies", function () {
            expect(result[1].length).toEqual(1);
            expect(result[1][0].CoinType).toEqual(CoinTypes.Nickle);
            expect(result[1][0].Count).toEqual(1);
        });

    });

    var assertCoinValue = function(coinType, value, coin){
        expect(coin.CoinType).toEqual(CoinTypes.Nickle);
        expect(coin.Count).toEqual(1);
    };
});