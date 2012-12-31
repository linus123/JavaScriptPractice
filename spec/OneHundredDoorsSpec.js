describe("100 Doors", function(){

    var doors;

    var closed = false;
    var opened = true;

    beforeEach(function(){
        doors = new OneHundredDoors();
    });

    it("should be creatable", function () {
        expect(doors).toBeDefined();
    });

    it("should have all doors closed on start", function () {
        for(var x = 0; x < 100; x++) {
            expect(doors.isOpen(x)).toEqual(false);
        }
    });

    it("should open all doors on first step", function () {
        doors.step();

        for(var x = 0; x < 100; x++) {
            expect(doors.isOpen(x)).toEqual(true);
        }
    });

    it("should toggle every other door on two steps", function () {
        doors.step();
        doors.step();

        for(var i = 0; i < 100; i++) {
            expectOddIndexToBe(closed, i);
        }
    });

    var expectOddIndexToBe = function(b, x) {
        if ((x + 1) % 2 === 0) {
            expect(doors.isOpen(x)).toEqual(b);
        }
        else {
            expect(doors.isOpen(x)).toEqual(!b);
        }
    };

    it("should toggle every third door on three steps", function () {
        doors.step();
        doors.step();
        doors.step();

        for(var i = 0; i < 100; i++) {

            var place = (i + 1);

            if (place % 3 === 0) {
                expectOddIndexToBe(opened, i);
            }
            else {
                expectOddIndexToBe(closed, i);
            }
        }
    });
});

describe("Numbers function", function(){
    var getBool = function(stepNum, index){

        var returnValue = false;

        var place = (index + 1);

        for(var stepCount = 0; stepCount <= stepNum; stepCount++){
            if ((stepNum >= stepCount) && (place % (stepCount + 1)) === 0) {
                returnValue = !returnValue;
            }
        }

        return returnValue;
    };

    it("step 0", function () {
        var stepNum = 0;

        expect(getBool(stepNum, 0)).toEqual(true);
        expect(getBool(stepNum, 1)).toEqual(true);
        expect(getBool(stepNum, 2)).toEqual(true);
        expect(getBool(stepNum, 3)).toEqual(true);
        expect(getBool(stepNum, 4)).toEqual(true);
        expect(getBool(stepNum, 5)).toEqual(true);
        expect(getBool(stepNum, 6)).toEqual(true);
        expect(getBool(stepNum, 7)).toEqual(true);
        expect(getBool(stepNum, 8)).toEqual(true);
        expect(getBool(stepNum, 9)).toEqual(true);
    });

    it("step 1", function () {
        var stepNum = 1;

        expect(getBool(stepNum, 0)).toEqual(true);
        expect(getBool(stepNum, 1)).toEqual(false);
        expect(getBool(stepNum, 2)).toEqual(true);
        expect(getBool(stepNum, 3)).toEqual(false);
        expect(getBool(stepNum, 4)).toEqual(true);
        expect(getBool(stepNum, 5)).toEqual(false);
        expect(getBool(stepNum, 6)).toEqual(true);
        expect(getBool(stepNum, 7)).toEqual(false);
        expect(getBool(stepNum, 8)).toEqual(true);
        expect(getBool(stepNum, 9)).toEqual(false);
    });

    it("step 2", function () {
        var stepNum = 2;

        expect(getBool(stepNum, 0)).toEqual(true);
        expect(getBool(stepNum, 1)).toEqual(false);
        expect(getBool(stepNum, 2)).toEqual(false);
        expect(getBool(stepNum, 3)).toEqual(false);
        expect(getBool(stepNum, 4)).toEqual(true);
        expect(getBool(stepNum, 5)).toEqual(true);
        expect(getBool(stepNum, 6)).toEqual(true);
        expect(getBool(stepNum, 7)).toEqual(false);
        expect(getBool(stepNum, 8)).toEqual(false);
        expect(getBool(stepNum, 9)).toEqual(false);
    });
});