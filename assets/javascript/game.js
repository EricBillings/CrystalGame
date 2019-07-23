let win = 0;
let loss = 0;
let randNum = Math.floor(Math.random() * 121) + 19;
let crystalNumOne = Math.floor(Math.random() * 12) + 1;
let crystalNumTwo = Math.floor(Math.random() * 12) + 1;
let crystalNumThree = Math.floor(Math.random() * 12) + 1;
let crystalNumFour = Math.floor(Math.random() * 12) + 1;
let userCount = 0;
alert("Magic Number: " + randNum);
$("#user").text("Score " + userCount);
$("#wins").text("Wins " + win);
$("#losses").text("Losses " + loss);





function compare(x, y) {
    if (x === y) {
        win++;
        alert("You Win!");
        randNum = Math.floor(Math.random() * 121) + 19;
        crystalNumOne = Math.floor(Math.random() * 12) + 1;
        crystalNumTwo = Math.floor(Math.random() * 12) + 1;
        crystalNumThree = Math.floor(Math.random() * 12) + 1;
        crystalNumFour = Math.floor(Math.random() * 12) + 1;
        userCount = 0;
        alert("New Magic Number: " + randNum);
        $("#user").text("Score " + userCount);
        $("#wins").text("Wins " + win);
        $("#losses").text("Losses " + loss);


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
        alert("New Magic Number: " + randNum);
        $("#user").text("Score " + userCount);
        $("#wins").text("Wins " + win);
        $("#losses").text("Losses " + loss);

    }
}


/*Click crystal buttons to increase userCount*/

$("#crystalOne").click(function () {
    userCount += crystalNumOne;
    $("#user").text("Score " + userCount);
    compare(userCount, randNum)
})
$("#crystalTwo").click(function () {
    userCount += crystalNumTwo;
    $("#user").text("Score " + userCount);
    compare(userCount, randNum)
})
$("#crystalThree").click(function () {
    userCount += crystalNumThree;
    $("#user").text("Score " + userCount);
    compare(userCount, randNum)
})
$("#crystalFour").click(function () {
    userCount += crystalNumFour;
    $("#user").text("Score " + userCount);
    compare(userCount, randNum)
})




