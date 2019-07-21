let randNum = Math.floor(Math.random() * 121) + 19;
console.log(randNum);
let crystalNumOne = Math.floor(Math.random() * 12) + 1;
console.log(crystalNumOne);
let crystalNumTwo = Math.floor(Math.random() * 12) + 1;
console.log(crystalNumTwo);
let crystalNumThree = Math.floor(Math.random() * 12) + 1;
console.log(crystalNumThree);
let crystalNumFour = Math.floor(Math.random() * 12) + 1;
console.log(crystalNumFour);
let userCount = 0;


function compare(x, y) {
    if (x === y) {
        console.log("WIN");
    } else if
        (x < y) {
        console.log("OK STATE");
    } else {
        console.log("LOSS");
    }
}


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


