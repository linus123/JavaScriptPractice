describe("CountCoins", function(){
    var cc;

    beforeEach(function(){
        cc = new CountCoins();
    });

    it("should be creatable", function () {
        expect(cc).toBeDefined();
    });

    it("should return 0 when given 0", function () {
        var result = cc.getCoinCount(0);
        expect(result.length).toEqual(0);
    });

    it("should return 1 when given 1", function () {
        assertCoinCountForAmount(1, 1);
    });

    it("should return 1 when given 4 or less", function () {
        assertCoinCountForAmount(4, 1);
    });

    it("should return 2 when given a value between 5 and 9", function () {
        assertCoinCountForAmount(5, 2);
        assertCoinCountForAmount(9, 2);
    });

    it("should return 4 when given 10", function () {
        assertCoinCountForAmount(10, 4);
    });

    it("should return 4 when given 11", function () {
        assertCoinCountForAmount(11, 4);
    });

    it("should return 6 when given 15", function () {
        assertCoinCountForAmount(15, 6);
    });

    it("should return 6 when given 16", function () {
        assertCoinCountForAmount(16, 6);
    });

    it("should return 9 when given 20", function () {
        assertCoinCountForAmount(20, 9);
    });

    it("should return 13 when given 25", function () {
        assertCoinCountForAmount(25, 13);
    });

    it("should return 13 when given 26", function () {
        assertCoinCountForAmount(26, 13);
    });

    it("should return 13 when given 50", function () {
        assertCoinCountForAmount(50, 13);
    });

    var assertCoinCountForAmount = function(coinCount, comboCount) {
        var result = cc.getCoinCount(coinCount);
        expect(result.length).toEqual(comboCount);

        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
        }

        console.log("***");
    }
});