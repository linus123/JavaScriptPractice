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
        assertCoinValues([{CoinType: CoinTypes.Penny, Count: 1}], result[0]);
    });

    it("should return two pennies when given two cents", function () {
        var result = cc.getCoinCombos(2);
        expect(result[0].length).toEqual(1);
        assertCoinValues([{CoinType: CoinTypes.Penny, Count: 2}], result[0]);
    });

    it("should return four pennies when given four cents", function () {
        var result = cc.getCoinCombos(4);
        expect(result[0].length).toEqual(1);
        assertCoinValues([{CoinType: CoinTypes.Penny, Count: 4}], result[0]);
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
            assertCoinValues([{CoinType: CoinTypes.Penny, Count: 5}], result[0]);
        });

        it("should return 5 pennies", function () {
            expect(result[1].length).toEqual(1);
            assertCoinValues([{CoinType: CoinTypes.Nickle, Count: 1}], result[1]);
        });

    });

    var assertCoinValues = function(resultArray, expectedArray){
        for(var i = 0; i < resultArray.length; i++){
            assertCoinValue(resultArray[i].CoinType, resultArray[i].Count, expectedArray[i])
        }
    };

    var assertCoinValue = function(coinType, count, coin){
        expect(coin.CoinType).toEqual(coinType);
        expect(coin.Count).toEqual(count);
    };
});