var CoinTypes = {};

function CountCoins(){

    this.getCoinCount = function(value){

        var returnArray = [];

        if (value <= 0) {
            return returnArray;
        }

        returnArray.push(value + " penny");

        var nickelAndPennyCombos = addNickelAndPennyCombos(value, "");
        returnArray = returnArray.concat(nickelAndPennyCombos);

        var dimeAndPennyCombos =  addDimeAndPennyCombos(value, "");
        returnArray = returnArray.concat(dimeAndPennyCombos);

        var quarterAndPennyCombos =  addQuarterAndPennyCombos(value, "");
        returnArray = returnArray.concat(quarterAndPennyCombos);

        return returnArray;
    };

    var addQuarterAndPennyCombos = function(value, prefix) {

        var returnArray = [];

        var numberOfQuarterAndPennyCombos = Math.floor(value / 25);

        for (var i = 1; i <= numberOfQuarterAndPennyCombos; i++) {
            var totalValueOfQuarters = (i * 25);
            var m = prefix + i + " quarter";

            var remain = value - totalValueOfQuarters;

            if (remain > 0) {
                m = m + " " + remain + " penny"
            }

            returnArray.push(m);
        }

        for(var i = 1; i <= numberOfQuarterAndPennyCombos; i++){

            var valueOfQuarters = i * 25;

            var tempPrefix = prefix  + i + " quarter ";

            var remain = value - valueOfQuarters;

            var f = addDimeAndPennyCombos(remain, tempPrefix);
            var returnArray = returnArray.concat(f);
        }

        for(var i = 1; i <= numberOfQuarterAndPennyCombos; i++){

            var valueOfQuarters = i * 25;

            var tempPrefix = prefix  + i + " quarter ";

            var remain = value - valueOfQuarters;

            var f = addNickelAndPennyCombos(remain, tempPrefix);
            var returnArray = returnArray.concat(f);
        }

        return returnArray;
    };

    var addDimeAndPennyCombos = function(value, prefix) {

        var returnArray = [];

        var numberOfDimeAndPennyCombos = Math.floor(value / 10);

        for (var i = 1; i <= numberOfDimeAndPennyCombos; i++) {
            var totalValueOfDimes = (i * 10);
            var m = prefix + i + " dime";

            var remain = value - totalValueOfDimes;

            if (remain > 0) {
                m = m + " " + remain + " penny"
            }

            returnArray.push(m);
        }

        for(var i = 1; i <= numberOfDimeAndPennyCombos; i++){

            var valueOfDimes = i * 10;

            var tempPrefix = prefix  + i + " dime ";

            var remain = value - valueOfDimes;

            var f = addNickelAndPennyCombos(remain, tempPrefix);
            var returnArray = returnArray.concat(f);
        }

        return returnArray;
    };

    var addNickelAndPennyCombos = function(value, prefix) {

        var returnArray = [];

        var numberOfNickleAndPennyCombos = Math.floor(value / 5);

        for (var i = 1; i <= numberOfNickleAndPennyCombos; i++) {
            var totalValueOfNickles = (i * 5);
            var m = prefix + i + " nickel";

            var remain = value - totalValueOfNickles;

            if (remain > 0) {
                m = m + " " + remain + " penny"
            }

            returnArray.push(m);
        }

        return returnArray;
    };
}
