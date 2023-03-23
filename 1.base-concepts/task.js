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

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  date = +date;
  if (typeof percent === `string`) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (typeof contribution === `string`) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  } else if (typeof amount === `string`) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  } else if (typeof date === `string`) {
    totalAmount = `Параметр "Сроки ипотеки" содержит неправильное значение ${date}`;
  }
  let lianAmount = amount - contribution;
  let timeNow = new Date();
  let loanTerm = date - timeNow;
  loanTerm = loanTerm / 1000 / 60 / 60 / 24 / 30;
  let monthlyPartPercent = percent / 100 / 12;
  let monthFee =
    lianAmount *
    (monthlyPartPercent +
      monthlyPartPercent / ((1 + monthlyPartPercent) ** loanTerm - 1));
  totalAmount = +(monthFee * loanTerm).toFixed(2);
  console.log(totalAmount);

  return totalAmount;
}
