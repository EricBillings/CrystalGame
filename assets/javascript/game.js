let win = 0;
let loss = 0;
let randNum = Math.floor(Math.random() * 121) + 19;
let crystalNumOne = Math.floor(Math.random() * 12) + 1;
let crystalNumTwo = Math.floor(Math.random() * 12) + 1;
let crystalNumThree = Math.floor(Math.random() * 12) + 1;
let crystalNumFour = Math.floor(Math.random() * 12) + 1;
let userCount = 0;
$("#magic").text("Magic Number: " + randNum);
console.log("Crystal One  = " + crystalNumOne);
console.log("Crystal Two = " + crystalNumTwo);
console.log("Crystal Three = " + crystalNumThree);
console.log("Crystal Four = " + crystalNumFour);
$("#user").text("User Score = " + userCount);
$("#wins").text("Wins: " + win);
$("#losses").text("Losses: " + loss);





function compare(x, y) {
    if (x === y) {
        win++;
        console.log("WINS " + win);
        alert("You Win!");
        randNum = Math.floor(Math.random() * 121) + 19;
        crystalNumOne = Math.floor(Math.random() * 12) + 1;
        crystalNumTwo = Math.floor(Math.random() * 12) + 1;
        crystalNumThree = Math.floor(Math.random() * 12) + 1;
        crystalNumFour = Math.floor(Math.random() * 12) + 1;
        userCount = 0;
        $("#magic").text("Magic Number: " + randNum);
        console.log("Crystal One  = " + crystalNumOne);
        console.log("Crystal Two = " + crystalNumTwo);
        console.log("Crystal Three = " + crystalNumThree);
        console.log("Crystal Four = " + crystalNumFour);
        $("#user").text("User Score = " + userCount);
        $("#wins").text("Wins: " + win);
        $("#losses").text("Losses: " + loss);


    } else if
        (x < y) {
        console.log("OK STATE");

    } else if (x > y) {
        loss++;
        console.log("LOSS " + loss);
        alert("You Went to High!")
        randNum = Math.floor(Math.random() * 121) + 19;
        crystalNumOne = Math.floor(Math.random() * 12) + 1;
        crystalNumTwo = Math.floor(Math.random() * 12) + 1;
        crystalNumThree = Math.floor(Math.random() * 12) + 1;
        crystalNumFour = Math.floor(Math.random() * 12) + 1;
        userCount = 0;
        $("#magic").text("Magic Number: " + randNum);
        console.log("Crystal One  = " + crystalNumOne);
        console.log("Crystal Two = " + crystalNumTwo);
        console.log("Crystal Three = " + crystalNumThree);
        console.log("Crystal Four = " + crystalNumFour);
        $("#user").text("User Score = " + userCount);
        $("#wins").text("Wins: " + win);
        $("#losses").text("Losses: " + loss);

    }
}


/*Click crystal buttons to increase userCount*/

$("#crystalOne").click(function () {
    console.log('Click 1 = ' + crystalNumOne);
    userCount += crystalNumOne;
    $("#user").text("User Score = " + userCount);

    compare(userCount, randNum)
})
$("#crystalTwo").click(function () {
    console.log('Click 2 = ' + crystalNumTwo);
    userCount += crystalNumTwo;
    $("#user").text("User Score = " + userCount);

    compare(userCount, randNum)
})
$("#crystalThree").click(function () {
    console.log('Click 3 = ' + crystalNumThree);
    userCount += crystalNumThree;
    $("#user").text("User Score = " + userCount);

    compare(userCount, randNum)
})
$("#crystalFour").click(function () {
    console.log('Click 4 = ' + crystalNumFour);
    userCount += crystalNumFour;
    $("#user").text("User Score = " + userCount);

    compare(userCount, randNum)
})




