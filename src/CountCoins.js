var CoinTypes = {};

CoinTypes.Penny = 1;
CoinTypes.Nickle = 5;
CoinTypes.Dime = 10;

function CountCoins(){

    this.getCoinCombos = function(value){
        var combos = [];

        var comboIndex = 0;

        if (value === 0){
            return combos;
        }

        combos[comboIndex] = [{
            CoinType: CoinTypes.Penny,
            Count: value
        }];

        comboIndex++;

        for(var n = 0; n < Math.floor(value / 5); n++){

            combos[comboIndex] = [];

            var numberOfNickles = n + 1;

            combos[comboIndex][0] = {
                CoinType: CoinTypes.Nickle,
                Count: numberOfNickles
            };

            var numberOfPennies = (value - (numberOfNickles * 5));

            if (numberOfPennies > 0){
                combos[comboIndex][1] = {
                    CoinType: CoinTypes.Penny,
                    Count: numberOfPennies
                };
            }

            comboIndex++;
        }

        return combos;
    };
}
