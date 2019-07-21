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

$("#crystalOne").click(function() {
    console.log('Click 1 = ' + crystalNumOne);
})
$("#crystalTwo").click(function() {
    console.log('Click 2 = ' + crystalNumTwo);
})
$("#crystalThree").click(function() {
    console.log('Click 3 = ' + crystalNumThree);
})
$("#crystalFour").click(function() {
    console.log('Click 4 = ' + crystalNumFour);
})