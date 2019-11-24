'use strict';
//задача 1

function arrX(element, amount) {
  const arrX = [];
  for (let i = 0; i < amount; i++) {
    arrX.push(element);
  }
  return arrX;
}

//console.log(arrX(prompt('Введите элемент',), prompt('Введите количество элементов',)));

//задача 2
function arr2Sum() {
  const arr = [[1, 2, 3], [4, 5], [6]];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  alert(sum);
}
//arr2Sum();

//задача 3
function arr3Sum() {
  const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        sum += arr[i][j][k];
      }
    }
  }
  alert(sum);
}
//arr3Sum();


// задача 4

function isNumberInRange(a) {
  /*if (a < 10) {     сначала написал такую констркуцию
    return false;
  } else {
    return true;
  }*/
  return a >= 10;  // шторм предложил заменить на это, все работает так же
}

//console.log(isNumberInRange(prompt('Введите число')));


// задача 5


function isEven(n) {
  //if (n % 2) {    //опять начал делать через иф
  //return false;
  //} else {
  //return true;
  //}
  return !(n % 2);  // но шторм предолиж такое, работает так же, но не совсем понимаю как это работает(
}

//console.log(isEven(prompt('Введите число')));


// задача 6 (не понял задание, мне нужно просто взять 2 массива и во второй передавать с помошью функции которая выше?)
/*
const arrFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function evenArr() {
  const arrSecond = [];
  for (let i = 0; i <= arrFirst.length; i++) {
    let two = arrFirst[i];
    if (two % 2 === 0) {
      arrSecond.push(arrFirst[i]);
    }
  }
  console.log(arrSecond);
}
evenArr();
*/
const arrFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrSecond = [];
for (let i = 0; i <= arrFirst.length; i++) {
  if (isEven(i) % 2 === 0)  //типо использовал функцию, но что-то не то, последний элемент undefined
  {
    arrSecond.push(arrFirst[i]);
  }
}
console.log(arrSecond); // выводит [2, 4, 6, 8, 10, 12, 14, undefined]

//задача 7

/*
function getDivisors(n) {
  let divisor = [];
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      divisor.push(i);
    }
  }
  console.log(divisor); //почему-то только 0 элемент массива сторочный, все остальные числа
}

getDivisors(prompt('Введите число'));
*/
//задача 9
/*
function degree(n, d) {
  return Math.pow(n, d);
}

console.log(degree((prompt('введите число')), prompt('введите степень числа')));
*/

//задача 10
/*
function age(age) {
  if (typeof age !== undefined) {
    if (age > 16) {
      alert('Добро пожаловать')
    }
    if (age < 16) {
      alert('Вы еще молоды')
    }
  } else
    alert("Not undefined");
  console.log(age);

}
age(parseInt(prompt('Введите ваш возраст')));
*/

//задача 10, 11
//const age = prompt('Ввведите ваш возраст');
function getPermission(value) {
  if (value === null) return;
  const age = parseInt(value);
  if (isNaN(age) || age < 0) {
    alert('Возраст должен быть положительным числом');
    const newAge = prompt('Ввведите ваш возраст');
    getPermission(newAge);
  } else if (age > 16) {
    alert('Добро пожаловать');
  } else if (age < 16) {
    alert('Вы еще молоды');
  }
}

//getPermission(age);


//задача 13


function sqr(n) {
  if (n > 10) {
    return alert((Math.pow(n, 2)));
  } else if (n < 7) {
    return alert('Число меньше 7');
  } else if (n === 8 || n === 9) {
    return alert(n - 1);
  }
}
//sqr(parseFloat(prompt('Введите число')));

//задача 16
function arrSort() {
  const arrFirs = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < arrFirs.length; i++) {
    if (i % 2 === 0) {
      [arrFirs[i], arrFirs[i + 1]] = [arrFirs[i + 1], arrFirs[i]];
    }
  }
  return arrFirs;
}
//console.log(arrSort());




