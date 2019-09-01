let name = "caMilLa";
const nameLenght = name.length;
console.log(name);

let firstLetter = name.substring(0, 1);
let lastLetters = name.substring(1, nameLenght);

console.log("First letter: " + firstLetter);
console.log("Last letters: " + lastLetters);

const capitalizedName = firstLetter.toUpperCase() + lastLetters.toLowerCase();

console.log("Correctly capitalized name: " + capitalizedName);
