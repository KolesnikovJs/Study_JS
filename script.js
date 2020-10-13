'use strict';
let money = prompt('Ваш месячный доход?');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('У тебя есть депозит в банке?');
let mission = 1000000000000000;
let period = 6;
let expenses1 = prompt('Введете обязательную статью расходов?', 'да');
let expenses2 = prompt('Введете обязательную статью расходов?', 'да');
let amount1 = prompt ('Во сколько это обойдется?','1200');
let amount2 = prompt ('Во сколько это обойдется?', '1200');
//let budgetMonth = (money - 10000 - 5000);

let showTypeof = function(data) {
    console.log(data, typeof(data));
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log([addExpenses]);


/*console.log(money);
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
*/
//console.log('Бюджет на месяц' + ':' + budgetMonth);
//console.log('Цель будет достигнута за' + ':' + (Math.ceil(mission / budgetMonth)) + ' ' + 'месяцев');
//console.log('Бюджет на день' + ':' + (Math.floor(budgetMonth / 30)));

/*let budgetDay = Math.floor(qwe / 30);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода!');
    } else if (budgetDay > 600) {
        console.log('У вас средний уровень дохода!');
    } else if (budgetDay > 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        console.log('Что-то пошло не так');
    }
*/

function getExpensesMonth(a, b, c) {
    return a + b + c;    
}
let costs = getExpensesMonth(5000, 4000, 3000);
console.log('расходы на месяц', costs);

function getAccumulatedMonth() {
    return money - costs;
}
let qwe = getAccumulatedMonth(money, costs);
console.log('накопления за месяц :', qwe);

let accumulatedMonth = function(data) {
    console.log(data);
};
accumulatedMonth(qwe);

function  getTargetMonth(a, b) {
    console.log(Math.floor(mission / qwe) + ' ' + 'месяцев');
}
getTargetMonth(mission, qwe);


let budgetDay = Math.floor(qwe / 30);
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















