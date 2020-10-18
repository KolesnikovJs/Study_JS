'use strict';

let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
}


let money 
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('У тебя есть депозит в банке?');
let mission = 1000000000000000;
let period = 6;

let start = function() {
    money = prompt('Ваш месячный доход?');

    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
};

start();

let showTypeof = function(data) {
    console.log(typeof data);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log(income.length);

//let expenses1 = prompt('Введете обязательную статью расходов?');
//let expense1Amount = prompt('Во сколько это обойдется?','1200');
//let expenses2 = prompt('Введете обязательную статью расходов?');
//let expenses2Amount = prompt('Во сколько это обойдется?', '1200');

let expenses1, expenses2;


console.log(addExpenses.toLowerCase().split(','));


let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введете обязательную статью расходов?', "Садик Государственынй");
        } else if (i === 1) {
            expenses2 = prompt('Введете обязательную статью расходов?', "Садик Частный");
        }

        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(sum);
    return sum;
};

let expenseAmount = getExpensesMonth();

console.log('Расходы за месяц', + expenseAmount);

let getAccumulatedMonth = function(){
    return money - expenseAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth
};



let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);

let getStatusIncome = function() {
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода!');
        } else if (budgetDay > 600) {
            return ('У вас средний уровень дохода!');
        } else if (budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (budgetDay < 0) {
            return ('Что-то пошло не так');
        }
};

console.log(getStatusIncome());















