"use strict";

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);

let newarr = letters;
newarr[4] = "*";
console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];

const string = "123456789";
const stringSplit = string.split();
const stringArray = Array.from(string);

console.log("Split " + stringSplit);
console.log("Array " + stringArray);
