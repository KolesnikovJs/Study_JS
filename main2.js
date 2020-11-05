'use strict'

const start = document.querySelector('#start');
const btnPlus = document.querySelectorAll('button');
const incomePlus = btnPlus[0];
const expensesPlus = btnPlus[1];
const salaryAmount = document.querySelector('.salary-amount');
const income = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0];
const ExpensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0];
const one2 = document.getElementsByClassName('result-total additional_income-value');
const additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0];
const one4 = document.getElementsByClassName('result-total income_period-value');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const one5 = document.getElementsByClassName('result-total target_month-value');
let expensesItems = document.querySelectorAll('.expenses-items');
const two1 = document.querySelector('.expenses-title');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const TargetMonthValue = document.querySelector('.result-total target_month-value');



console.log(start);
console.log(btnPlus);
console.log(btnPlus[1]);
console.log(income[0]);
console.log(income[1]);
console.log(budgetMonthValue);
console.log(budgetDayValue);
console.log(one2[0]);
console.log(additionalExpensesValue);
console.log(one4[0]);
console.log(one5[0]);
console.log(two1);






let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    start: function() {
        if(salaryAmount.value === '') {
            alert('Ошибка: Поле "месячный доход" должно быть заполненно!');
            return; 
        }
        appData.budget = salaryAmount.value
        appData.getExpenses();
        

        appData.getExpensesMonth();
        appData.getBudget();
        appData.showresult();
        appData.getAddIncome();
        appData.getAddExpenses();
    },
    showresult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        ExpensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        TargetMonthValue.value = Math.ceil(appData.getTargetMonth());
    },

    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        
        if (expensesItems.lenght === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
            
        });
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },

    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислете возможные расходы через запятую?');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
    },
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIncome: function() {
        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            appData.persentDeposit = prompt('Какой годовой процент?', '10');
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);




//if (appData.getTargetMonth() > 0) {
//    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + 'месяца');
//} else {
//    console.log('Цель не будет достигнута');
//}


for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
    
}





