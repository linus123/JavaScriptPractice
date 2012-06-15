describe("Grid", function() {

    var grid;

    beforeEach(function() {
        grid = new GameOfLife.Grid(2, 2);
    });

    it("should create a two dimensional array of the given size", function() {
        expect(grid.getWidth()).toEqual(2);
        expect(grid.getHeight()).toEqual(2);
    });

    it("should all to set the cell as live", function () {
        grid.setCellLive(0, 0);
        expect(grid.isCellLive(0, 0)).toEqual(true);
    });

    it("should allow for cells to be set dead", function () {
        grid.setCellLive(0, 0);
        grid.setCellDead(0, 0);
        expect(grid.isCellLive(0, 0)).toEqual(false);
    });

    it("should allow an iteration through all cells", function () {
        var cellCount = 0;

        grid.forAllCells(function(x, y){
            cellCount++;
        });

        expect(cellCount).toEqual(4);
    });

    it("should allow to set next cell state to live", function () {
        grid.setNextCellStateLive(0, 0);
        expect(grid.isNextCellStateLive(0, 0)).toEqual(true);
    });


    it("should allow to set next cell state dead", function () {
        grid.setNextCellStateLive(1, 1);
        grid.setNextCellStateDead(1, 1);
        expect(grid.isNextCellStateLive(1, 1)).toEqual(false);
    });

    it("should allow the next state to copy to the current state", function () {
        grid.setNextCellStateLive(1, 1);
        grid.setNextCellStateLive(0, 1);

        grid.setCurrentStateToNextState();

        expect(grid.isCellLive(1, 1)).toEqual(true);
        expect(grid.isCellLive(0, 1)).toEqual(true);
        expect(grid.isCellLive(1, 0)).toEqual(false);
    });

    it("should allow current state to copy to the next state", function () {
        grid.setCellLive(1, 1);
        grid.setCellLive(0, 1);

        grid.setNextStateToCurrentState();

        expect(grid.isNextCellStateLive(1, 1)).toEqual(true);
        expect(grid.isNextCellStateLive(0, 1)).toEqual(true);
        expect(grid.isNextCellStateLive(1, 0)).toEqual(false);
    });

    it("should allow operations on a row", function () {
        var count = 0;

        grid.forRow(0, function(x, y){
            count++;
        });

        expect(count).toEqual(2);
    });

    it("should skip operations on a row that is out of bounds", function () {
        var count = 0;

        grid.forRow(-1, function(x, y){
            count++;
        });

        expect(count).toEqual(0);
    });

    it("should allow operations on a column", function () {
        var count = 0;

        grid.forColumn(0, function(x, y){
            count++;
        });

        expect(count).toEqual(2);
    });

    it("should skip operations on a column that is out of bounds", function () {
        var count = 0;

        grid.forColumn(-1, function(x, y){
            count++;
        });

        expect(count).toEqual(0);
    });

    it("should allow operations on surrounding cells", function () {
        grid = new GameOfLife.Grid(3, 3);
        var count = 0;

        grid.forSurroundingCells(0, 0, function(){
            count++;
        });

        expect(count).toEqual(3);
    });

    it("should allow operations on surrounding cells 2", function () {
        grid = new GameOfLife.Grid(3, 3);
        var count = 0;

        grid.forSurroundingCells(2, 1, function(){
            count++;
        });

        expect(count).toEqual(5);
    });

});

describe("Evolve for single cells in center of grid", function() {

    var grid;

    beforeEach(function() {
        grid = new GameOfLife.Grid(3, 3);
        grid.setCellLive(1, 1);
    });

    it("should kill cell with no neighbors", function () {
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(false);
    });

    it("should kill cell with one top neighbor", function () {
        grid.setCellLive(0, 0);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(false);
    });

    it("should kill cell with one bottom neighbor", function () {
        grid.setCellLive(0, 2);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(false);
    });

    it("cell should live with two top neighbors", function () {
        grid.setCellLive(0, 0);
        grid.setCellLive(1, 0);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(true);
    });

    it("cell should live with two bottom neighbors", function () {
        grid.setCellLive(0, 2);
        grid.setCellLive(1, 2);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(true);
    });

    it("cell should live with two left neighbors", function () {
        grid.setCellLive(0, 0);
        grid.setCellLive(0, 1);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(true);
    });

    it("cell should live with two right neighbors", function () {
        grid.setCellLive(2, 0);
        grid.setCellLive(2, 1);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(true);
    });

    it("cell should come alive with exactly 3 live neighbors", function () {
        grid.setCellDead(1, 1);
        grid.setCellLive(0, 0);
        grid.setCellLive(0, 2);
        grid.setCellLive(2, 0);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(true);
    });


    it("cell should die with 4 live neighbors", function () {
        grid.setCellLive(2, 0);
        grid.setCellLive(2, 1);
        grid.setCellLive(2, 2);
        grid.setCellLive(1, 2);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(false);
    });

    it("cell should die with more that 4 live neighbors", function () {
        grid.setCellLive(2, 0);
        grid.setCellLive(2, 1);
        grid.setCellLive(2, 2);
        grid.setCellLive(1, 2);
        grid.setCellLive(0, 2);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(false);
    });
});

describe("Evolve for single cells in left edge of grid", function() {

    var grid;

    beforeEach(function() {
        grid = new GameOfLife.Grid(3, 3);
    });

    it("should kill cell with no neighbors top left", function () {
        grid.setCellLive(1, 1);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(1, 1)).toEqual(false);
    });

    it("should kill cell with no neighbors bottom right", function () {
        grid.setCellLive(2, 2);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(2, 2)).toEqual(false);
    });

    it("should set cell on grid edge live when surrounded by 3 live cells", function () {
        grid.setCellLive(2, 0);
        grid.setCellLive(1, 1);
        grid.setCellLive(2, 2);
        GameOfLife.evolve(grid);
        expect(grid.isCellLive(2, 1)).toEqual(true);
    });
});
