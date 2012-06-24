var GameOfLife = (
    function () {
        var gameOfLife = {};

        var Cell = function() {
            this.currentState = false;
            this.nextState = false;
        };

        gameOfLife.Grid = function(width, height){

            var cellArray = [];

            for(var x = 0; x < width; x++){
                cellArray[x] = [];
            }

            this.forAllCells = function (actionFunc) {
                for(var x = 0; x < width; x++){
                    for(var y = 0; y < height; y++){
                        actionFunc(x, y);
                    }
                }
            };

            this.forAllCells(function(x, y) {
                cellArray[x][y] = new Cell();
            });

            this.getWidth = function(){
                return width;
            };
            this.getHeight = function(){
                return height;
            };

            this.setCellLive = function (x, y) {
                cellArray[x][y].currentState = true;
            };

            this.setCellDead = function (x, y) {
                cellArray[x][y].currentState = false;
            };

            this.setNextCellStateLive = function (x, y) {
                cellArray[x][y].nextState = true;
            };

            this.setNextCellStateDead = function (x, y) {
                cellArray[x][y].nextState = false;
            };

            this.isNextCellStateLive = function (x, y) {
                return cellArray[x][y].nextState;
            };

            this.setNextStateToCurrentState = function () {
                this.forAllCells(function(x, y){
                    cellArray[x][y].nextState = cellArray[x][y].currentState;
                });
            };

            this.setCurrentStateToNextState = function () {
                this.forAllCells(function(x, y){
                    cellArray[x][y].currentState = cellArray[x][y].nextState;
                });
            };

            this.isCellLive = function (x, y) {
                return cellArray[x][y].currentState;
            };

            var executeIfCellIsOnGrid = function(x, y, actionFunc) {
                if ((x >= 0) && (x < width) && (y >= 0) && (y < height)) {
                    actionFunc();
                }
            };

            this.forRow = function (y, actionFunc) {
                for(var x = 0; x < this.getWidth(); x++){
                    executeIfCellIsOnGrid(x, y, function() {
                        actionFunc(x, y);
                    });
                }
            };

            this.forColumn = function (x, actionFunc) {
                for(var y = 0; y < this.getHeight(); y++){
                    executeIfCellIsOnGrid(x, y, function() {
                        actionFunc(x, y);
                    });
                }
            };

            this.forSurroundingCells = function (x, y, actionFunc) {
                var startX = x - 1;
                var endX = x + 1;

                var startY = y - 1;
                var endY = y + 1;

                if (startX < 0){
                    startX = 0;
                }

                if (startY < 0){
                    startY = 0;
                }

                if (endX >= width){
                    endX = width - 1;
                }

                if (endY >= height) {
                    endY = height - 1;
                }

                for(var i = startX; i <= endX; i++){
                    for(var j = startY; j <= endY; j++){
                        if (!((i == x) && (j == y))) {
                            actionFunc(i, j);
                        }
                    }
                }
            };

            this.logArray = function () {

                console.log("++++++++++++++++++++++++++++++++++");

                for(var y = 0; y < height; y++){

                    var currentRow = "";

                    for(var x = 0; x < width; x++){
                        if (this.isCellLive(x, y) === true) {
                            currentRow += "* "
                        }
                        else {
                            currentRow += "- "
                        }
                    }

                    console.log(currentRow);
                }
            };
        };

        gameOfLife.evolve = function(grid){

            grid.setNextStateToCurrentState();

            grid.forAllCells(function(x, y) {
                var liveCellCount = 0;

                grid.forSurroundingCells(x, y, function(x, y){
                    if (grid.isCellLive(x, y) === true){
                        liveCellCount++;
                    }
                });

                if ((liveCellCount < 2) || (liveCellCount > 3)){
                    grid.setNextCellStateDead(x, y);
                }

                if (liveCellCount === 3){
                    grid.setNextCellStateLive(x, y);
                }
            });

            grid.setCurrentStateToNextState();
        };

        return gameOfLife;
    })();
