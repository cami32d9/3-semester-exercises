let fullName = "Camilla Gejl Olsen";
const fullNameLenght = fullName.length;
const firstSplit = fullName.indexOf(" ");
const secondSplit = fullName.indexOf(" ", firstSplit + 1);

console.log(firstSplit);
console.log(secondSplit);

const firstName = fullName.substring(0, firstSplit);
const middleName = fullName.substring(firstSplit + 1, secondSplit);
const lastName = fullName.substring(secondSplit + 1, fullNameLenght);

console.log("First name: " + firstName);
console.log("Middle name: " + middleName);
console.log("Last name: " + lastName);
