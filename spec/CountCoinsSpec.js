describe("CountCoins", function(){
    var cc;

    beforeEach(function(){
        cc = new CountCoins();
    });

    it("should be creatable", function () {
        expect(cc).toBeDefined();
    });

    it("should return empty array when given 0", function () {
        var result = cc.getCoinCombos(0);
        expect (result   .length).toEqual(0);
    });

    it("should return single penny when given one cent", function () {
        var result = cc.getCoinCombos(1);
        assertCoinValues([{CoinType: CoinTypes.Penny, Count: 1}], result[0]);
    });

    it("should return two pennies when given two cents", function () {
        var result = cc.getCoinCombos(2);
        assertCoinValues([{CoinType: CoinTypes.Penny, Count: 2}], result[0]);
    });

    it("should return four pennies when given four cents", function () {
        var result = cc.getCoinCombos(4);
        assertCoinValues([{CoinType: CoinTypes.Penny, Count: 4}], result[0]);
    });

    describe("when given 5 cents", function () {
        var result;

        beforeEach(function(){
            result = cc.getCoinCombos(5);
        });

        it("should set the correct number of sets", function () {
            expect(result.length).toEqual(2);
        });

        it("should return 5 pennies", function () {
            assertCoinValues([{CoinType: CoinTypes.Penny, Count: 5}], result[0]);
        });

        it("should return 1 nickle", function () {
            assertCoinValues([{CoinType: CoinTypes.Nickle, Count: 1}], result[1]);
        });
    });

    describe("when given 6 cents", function () {
        var result;

        beforeEach(function(){
            result = cc.getCoinCombos(6);
        });

        it("should set the correct number of sets", function () {
            expect(result.length).toEqual(2);
        });

        it("should return 5 pennies", function () {
            assertCoinValues([{CoinType: CoinTypes.Penny, Count: 6}], result[0]);
        });

        it("should return one nickle and 1 penny", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Nickle, Count: 1},
                {CoinType: CoinTypes.Penny, Count: 1}
            ];
            assertCoinValues(expectedCoins, result[1]);
        });
    });

    describe("when given 10 cents", function () {
        var result;

        beforeEach(function(){
            result = cc.getCoinCombos(10);
        });

        it("should set the correct number of sets", function () {
            expect(result.length).toEqual(4);
        });

        it("should return 10 pennies", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Penny, Count: 10}
            ];
            assertCoinValues(expectedCoins, result[0]);
        });

        it("should return 1 nickle and 5 pennies", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Nickle, Count: 1},
                {CoinType: CoinTypes.Penny, Count: 5}
            ];
            assertCoinValues(expectedCoins, result[1]);
        });

        it("should return 2 nickles", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Nickle, Count: 2}
            ];
            assertCoinValues(expectedCoins, result[2]);
        });

        it("should return 1 dime", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Dime, Count: 1}
            ];
            assertCoinValues(expectedCoins, result[2]);
        });
    });

    describe("when given 13 cents", function () {
        var result;

        beforeEach(function(){
            result = cc.getCoinCombos(13);
        });

        it("should set the correct number of sets", function () {
            expect(result.length).toEqual(4);
        });

        it("should return 13 pennies", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Penny, Count: 13}
            ];
            assertCoinValues(expectedCoins, result[0]);
        });

        it("should return 1 nickle and 8 pennies", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Nickle, Count: 1},
                {CoinType: CoinTypes.Penny, Count: 8}
            ];
            assertCoinValues(expectedCoins, result[1]);
        });

        it("should return 2 nickles and 3 pennies", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Nickle, Count: 2},
                {CoinType: CoinTypes.Penny, Count: 3}
            ];
            assertCoinValues(expectedCoins, result[2]);
        });

        it("should return 1 dime and 3 pennies", function () {
            var expectedCoins = [
                {CoinType: CoinTypes.Dime, Count: 1},
                {CoinType: CoinTypes.Penny, Count: 3}
            ];
            assertCoinValues(expectedCoins, result[2]);
        });
    });

    var assertCoinValues = function(resultArray, expectedArray){
        expect(expectedArray.length).toEqual(resultArray.length);

        for(var i = 0; i < resultArray.length; i++){
            assertCoinValue(resultArray[i].CoinType, resultArray[i].Count, expectedArray[i])
        }
    };

    var assertCoinValue = function(coinType, count, coin){
        expect(coin.CoinType).toEqual(coinType);
        expect(coin.Count).toEqual(count);
    };
});