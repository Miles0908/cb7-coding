//Esercizio 1
function compareNumeric(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

let listChars = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(listChars);

listChars.sort(compareNumeric);

console.log(listChars);

//Fine esercizio 1

//Esercizio 2
function searchMinMax(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

let listChars2 = [1999, 6433, 12, 99, 19993, 10, 969696];

console.log(listChars2);

listChars2.sort(searchMinMax);

console.log(listChars2[0]);
console.log(listChars2[6]);
//Fine esercizio 2
