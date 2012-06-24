var GameOfLifeUi = (function($, GameOfLife){
    var gameOfLifeUi = {};

    var mainGrid;

    gameOfLifeUi.init = function(){

        var bindCells = function(){
            $(".cellClass").click(function(){
                var splitId = this.id.split("_");

                var x = parseInt(splitId[1]);
                var y = parseInt(splitId[2]);

                if (mainGrid.isCellLive(x, y)) {
                    mainGrid.setCellDead(x, y);
                    $(this).text("--");
                }
                else {
                    mainGrid.setCellLive(x, y);
                    $(this).text("**");
                }


            });
        };

        var unbindCells = function() {
            $(".cellClass").unbind();
        };

        var renderGrid = function() {
            var gridHtml = "";
            var id;
            gridHtml += "<table>";
            for (var y = 0; y < mainGrid.getHeight(); y++) {
                gridHtml += "<tr>";
                for (var x = 0; x < mainGrid.getWidth(); x++) {
                    id = "cell_" + x + "_" + y;
                    gridHtml += "<td id='" + id + "' class='cellClass'>";

                    if (mainGrid.isCellLive(x, y)){
                        gridHtml += "**"
                    }
                    else {
                        gridHtml += "--"
                    }
                    gridHtml += "</td>"
                }
                gridHtml += "</tr>";
            }
            gridHtml += "</table>";

            unbindCells();

            var gridDiv = $("#gridDiv");
            gridDiv.empty();
            gridDiv.append(gridHtml);
            bindCells();
        };

        $("#resetButton").click(function() {
            var width = parseInt($("#widthTextBox").val());
            var height = parseInt($("#heightTextBox").val());

            mainGrid = new GameOfLife.Grid(width, height);
            renderGrid();
        });

        $("#evolveButton").click(function() {
            GameOfLife.evolve(mainGrid);
            renderGrid();
        });


    };

    return gameOfLifeUi;
})($, GameOfLife);