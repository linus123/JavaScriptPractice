function OneHundredDoors() {

    var isDoorOpenValues = new Array(100);
    var stepCount = 0;

    for(var i = 0; i < 100; i++){
        isDoorOpenValues[i] = false;
    }

    this.isOpen = function(index){
        return isDoorOpenValues[index];
    };

    this.step = function(){
        for(var i = stepCount; i < 100; i += (stepCount + 1)){
            isDoorOpenValues[i] = !isDoorOpenValues[i];
        }

        stepCount++;
    };
}