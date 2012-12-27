describe("100 Doors", function(){

    var doors;

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

        for(var x = 0; x < 100; x++) {
            if ((x + 1) % 2 === 0) {
                expect(doors.isOpen(x)).toEqual(false);
            }
            else {
                expect(doors.isOpen(x)).toEqual(true);
            }
        }
    });

    it("should toggle every third door on three steps", function () {
        doors.step();
        doors.step();
        doors.step();

        for(var x = 0; x < 100; x++) {

            var place = (x + 1);

            if ((place % 2 === 0) && (place % 3 === 0)) {
                expect(doors.isOpen(x)).toEqual(true);
            }
            else if (place % 2 === 0) {
                expect(doors.isOpen(x)).toEqual(false);
            }
            else if ((place % 2 !== 0) && (place % 3 === 0)) {
                expect(doors.isOpen(x)).toEqual(false);
            }
            else if ((place % 2 !== 0)) {
                expect(doors.isOpen(x)).toEqual(true);
            }
        }
    });
});
