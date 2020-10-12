'use strict';
let money = prompt('Ваш месячный доход?');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'пример: "Квартплата, проездной, кредит');
let deposit = confirm('У тебя есть депозит в банке?');
let mission = 1000000000000000;
let period = 6;
let expenses1 = prompt('Введете обязательную статью расходов?');
let expenses2 = prompt('Введете обязательную статью расходов?');
let amount1 = prompt ('Во сколько это обойдется?');
let amount2 = prompt ('Во сколько это обойдется?');
let budgetMonth = (money - 10000 - 5000);

console.log(money);
console.log(deposit);
console.log(typeof income);
console.log(addExpenses);
console.log('Период равен' + ' ' + period + ' ' + 'месяцев');
console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(','));
console.log(money / 30);

console.log(expenses1);
console.log(expenses2);
console.log(amount1);
console.log(amount2);

console.log('Бюджет на месяц' + ':' + budgetMonth);
console.log('Цель будет достигнута за' + ':' + (Math.ceil(mission / budgetMonth)) + ' ' + 'месяцев');
console.log('Бюджет на день' + ':' + (Math.floor(budgetMonth / 30)));

let budgetDay = Math.floor(budgetMonth / 30);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода!');
    } else if (budgetDay > 600) {
        console.log('У вас средний уровень дохода!');
    } else if (budgetDay > 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        console.log('Что-то пошло не так');
    }













