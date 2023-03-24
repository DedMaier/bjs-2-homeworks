"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  console.log(arr);
  return arr; // array
}

/* === Задача 2 =====*/

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;
  let bodyCredit;
  let amountCreditMonths;
  let payment;

  if ( Number.isNaN(+percent) ) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if ( Number.isNaN(+contribution) ) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  else if ( Number.isNaN(+amount) ) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  else {
    percent = +percent / 12 / 100;
    contribution = +contribution;
    amount = +amount;

    bodyCredit = amount - contribution;

    amountCreditMonths = Math.floor( (countMonths.getTime() - Date.now()) / 1000/60/60/24/30 );

    payment = bodyCredit * (percent + (percent / (((1 + percent) ** amountCreditMonths) - 1)));

    totalAmount = +(payment * amountCreditMonths).toFixed(2);
  };
  
  console.log(totalAmount);

  return totalAmount;
}

debugger;
