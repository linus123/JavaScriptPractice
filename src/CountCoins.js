var CoinTypes = {};

CoinTypes.Penny = 1;
CoinTypes.Nickle = 5;

function CountCoins(){
    this.getCoinCombos = function(value){
        var combos = new Array();

        combos[0] = [{
            CoinType: CoinTypes.Penny,
            Count: value
        }];

        if (value === 5){
            combos[1] = [{
                CoinType: CoinTypes.Nickle,
                Count: 1
            }];
        }

        return combos;
    };
}
