'use strict';

//  Задаем вопросы пользователю и помещаем их в переменные  
let money = prompt('Ваш бюджет на месяц?', ""),
    time = prompt('Введите дату в формате YYYY-MM-DD', "");
// Создаем объект которые содержит все данные нашей программы
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    opnionalExpenses: {},
    income: [],
    savings: false
};
// Вопросы которые мы задаем дополнительно 
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");
// И перемещаем их в объект 
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
// выводим модальное окно с иформацие budget
alert(appData.budget / 30);  











