

let win = 0;
let loss = 0;
let randNum = Math.floor(Math.random() * 121) + 19;
console.log("Random Number = " + randNum);
let crystalNumOne = Math.floor(Math.random() * 12) + 1;
console.log("Crystal One  = " + crystalNumOne);
let crystalNumTwo = Math.floor(Math.random() * 12) + 1;
console.log("Crystal Two = " + crystalNumTwo);
let crystalNumThree = Math.floor(Math.random() * 12) + 1;
console.log("Crystal Three = " + crystalNumThree);
let crystalNumFour = Math.floor(Math.random() * 12) + 1;
console.log("Crystal Four = " + crystalNumFour);
let userCount = 0;
console.log("User Score = " + userCount);


$("#start").click(play);

$("#play-again").click(play);



function play() {
    console.log("play");
    
    $("#crystalOne").prop("disabled", false);
    $("#crystalTwo").prop("disabled", false);
    $("#crystalThree").prop("disabled", false);
    $("#crystalFour").prop("disabled", false);


    

    function compare(x, y) {
        if (x === y) {
            win++;
            console.log("WINS " + win);
            end()
            
        } else if
        (x < y) {
            console.log("OK STATE");
        } else if (x > y) {
            loss++;
            console.log("LOSS " + loss);
            end()
        }
    }
    function end() {
        $("#crystalOne").prop("disabled", true);
        $("#crystalTwo").prop("disabled", true);
        $("#crystalThree").prop("disabled", true);
        $("#crystalFour").prop("disabled", true);
        console.log("inside End");
        
        
        randNum = Math.floor(Math.random() * 121) + 19;
        crystalNumOne = Math.floor(Math.random() * 12) + 1;
        crystalNumTwo = Math.floor(Math.random() * 12) + 1;
        crystalNumThree = Math.floor(Math.random() * 12) + 1;
        crystalNumFour = Math.floor(Math.random() * 12) + 1;
        userCount = 0;
        
    }
    
    
    
    
    /*Click crystal buttons to increase userCount*/
    
    $("#crystalOne").click(function () {
        console.log('Click 1 = ' + crystalNumOne);
        userCount += crystalNumOne;
        console.log(userCount);
        compare(userCount, randNum)
    })
    $("#crystalTwo").click(function () {
        console.log('Click 2 = ' + crystalNumTwo);
        userCount += crystalNumTwo;
        console.log(userCount);
        compare(userCount, randNum)
    })
    $("#crystalThree").click(function () {
        console.log('Click 3 = ' + crystalNumThree);
        userCount += crystalNumThree;
        console.log(userCount);
        compare(userCount, randNum)
    })
    $("#crystalFour").click(function () {
        console.log('Click 4 = ' + crystalNumFour);
        userCount += crystalNumFour;
        console.log(userCount);
        compare(userCount, randNum)
    })

}

