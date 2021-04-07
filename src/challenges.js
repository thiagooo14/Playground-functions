// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(50, 10));

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(arr) {
  let len = arr.length;
  let space = ' ';
  let str = arr[len - 1] + space + arr[0];
  return str;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  return winPoints + ties;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arr) {
  // organiza o array em ordem crescente
  let sort = arr.sort();
  let count = 1;
  for (let i in sort) {
    if (sort[i] === sort[i - 1]) {
      count += 1;
    } else {
      count = 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 2, 9, 9, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
