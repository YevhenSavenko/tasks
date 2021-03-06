const ARRAY_TASKS = [
    'Запросите у пользователя число, возведите это число вo 2-ю степень и выведите на экран',
    'Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел',
    'Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата',
    'Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу',
    'Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами',
    'Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.',
    'Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня',
    'Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления)',
    'Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234)',
    'Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату',
    'Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!»', 
    'Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу',
    'Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.',
    'Запросите у пользователя радиус окружности и выведите площадь такой окружности',
    'Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.',
    'Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе',
    'Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку',
    'Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется',
    'Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления)',
    'Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch',
]


const practicButtons = 10;
let practicButtonItem = [];
let homeWorksButtonItem = [];

const div = document.createElement('div');
const practicalHeadding = document.createElement('h2');
const homeHeadding = document.createElement('h2');
const divButton = document.createElement('div');
const divButton2 = document.createElement('div');

document.body.prepend(div);
div.append(divButton);
practicalHeadding.innerHTML = 'Practic work №1';
homeHeadding.innerHTML = 'Home work №1';

divButton2.classList.add('buttons-wrapper');
div.classList.add('wrapper');
practicalHeadding.classList.add('headding');
homeHeadding.classList.add('headding');
divButton.classList.add('buttons-wrapper');

div.prepend(practicalHeadding);
div.append(homeHeadding);
div.append(divButton2);



for (let i = 0; i < practicButtons; i++){
    practicButtonItem[i] = document.createElement('button');
    practicButtonItem[i].innerHTML = `Task №${i+1}`;
    divButton.append(practicButtonItem[i]);
    practicButtonItem[i].classList.add('button');

    homeWorksButtonItem[i] = document.createElement('button');
    homeWorksButtonItem[i].innerHTML = `Task №${i+1}`;
    divButton2.append(homeWorksButtonItem[i]);
    homeWorksButtonItem[i].classList.add('button');
}

/***************************************************/
const afterWrapper = document.createElement('div');
afterWrapper.style.cssText = `
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
`

div.append(afterWrapper);

const allButton = document.querySelectorAll('.button').forEach((item, index) => {
    item.addEventListener('click', () => {
        afterWrapper.innerHTML = `Task №${index+1}: ${ARRAY_TASKS[index]}`;
    })

});

/************************************/
practicButtonItem[0].addEventListener('click', sub);
practicButtonItem[1].addEventListener('click', middleSumm);
practicButtonItem[2].addEventListener('click', squareArea);
practicButtonItem[3].addEventListener('click', convector);
practicButtonItem[4].addEventListener('click', calc);
practicButtonItem[5].addEventListener('click', equation);
practicButtonItem[6].addEventListener('click', clock);
practicButtonItem[7].addEventListener('click', middleNumber);
practicButtonItem[8].addEventListener('click', moveLastNumber);
practicButtonItem[9].addEventListener('click', money);

homeWorksButtonItem[0].addEventListener('click', helloName);
homeWorksButtonItem[1].addEventListener('click', birthday);
homeWorksButtonItem[2].addEventListener('click', perimeterSquare);
homeWorksButtonItem[3].addEventListener('click', circleArea);
homeWorksButtonItem[4].addEventListener('click', calcWidth);
homeWorksButtonItem[5].addEventListener('click', convector);
homeWorksButtonItem[6].addEventListener('click', flashDrive);
homeWorksButtonItem[7].addEventListener('click', chocolate);
homeWorksButtonItem[8].addEventListener('click', reverse);
homeWorksButtonItem[9].addEventListener('click', evenOdd);

function sub(){
    const number = +prompt('Enter number, please: ');

    alert(number + '^2 = ' + number*number);
}

function middleSumm() {
    const numberA = +prompt('Enter number a, please: ');
    const numberB = +prompt('Enter number b, please: ');

    alert((numberA + numberB)/2);
}

function squareArea(){
    const partOfSquare = +prompt('Enter side of a square, please: ');

    alert('S = ' + partOfSquare + ' * ' + partOfSquare + ' = ' + partOfSquare * partOfSquare);
}

function convector(){
    const number = +prompt('Enter kilometers please: ');
    alert(number + 'km = ' + (number*0.621371) + 'ml');
}

function calc(){
    const numberA = +prompt('Enter number a, please: ');
    const numberB = +prompt('Enter number b, please: ');

    alert(`
            ${numberA} + ${numberB} = ${numberA+numberB},
            ${numberA} - ${numberB} = ${numberA-numberB},
            ${numberA} * ${numberB} = ${numberA*numberB}
        `)
}

function equation(){
    const numberA = +prompt('Enter number a, please: ');
    const numberB = +prompt('Enter number b, please: ');

    alert(`
            x = ${-numberB} / ${numberA}
            x = ${-numberB / numberA}
        `);
}

function clock(){
    const hours = +prompt('Enter hours is it: ');
    const maxHours = 23;
    const maxMinutes = 60;

    if(hours < maxHours){
        const minutes = +prompt('Enter minutes is it: ');
        if (minutes < maxMinutes){
            let summHours = maxHours - hours;
            let summMinutes = maxMinutes - minutes;
            if(summMinutes === 60){
                summHours++;
                summMinutes = 0;
            }
            alert(`Remained until the next day: ${summHours < 10 ? '0' + summHours : summHours} hours and ${summMinutes < 10 ? '0' + summMinutes : summMinutes} minutes.`)
        } else {
            alert('Invalid a minutes');
        }
    }else {
        alert('Invalid a hours');
    }

}

function middleNumber(){
    let numberA = +prompt('Enter 3-digit number, please: ');
    numberA = parseInt((numberA/10)%10);

    alert('The middle number of 3-digit number is: ' + numberA)
}

function moveLastNumber(){
    let numberA = +prompt('Enter 5-digit number, please: ');
    let lastNumber = numberA % 10;
    numberA = parseInt(numberA/10);

    alert('Result: ' + lastNumber + '' + numberA);
}

function money(){
    let sales = +prompt('Enter all sales this seller, please: ');
    sales = sales / 10;
    moneyInMonth = 250

    alert(`${moneyInMonth}$ + ${sales}$ = ${sales + moneyInMonth}$`);
}


/********************************************/

function helloName(){
    const name = prompt('What`s your name? ');
    alert('Hello, ' + name + '!');
}

function birthday(){
    const nowYear = 2020;
    const birthDay = +prompt('When were you born?');
    
    alert('You have: ' + (nowYear - birthDay) + ' years');
}

function perimeterSquare(){
    const sideOfSquare = +prompt('Enter side of a square: ');

    alert('P = ' + (4*sideOfSquare));
}

function circleArea(){
    const radius = +prompt('Enter radius of a circle: ');
    const P = 3.1415926535;

    alert('S = ' + (P*(radius*radius)));
}

function calcWidth(){
    const width = +prompt('Enter distance between the two city (km): ');
    const time = +prompt('How many hours do you want to get there (h): ');

    const speed = width/time;

    alert('Your speed should be ' + speed + 'km/h');
}

function convector(){
    const dollar = +prompt('Enter money ($)');
    const euro = 0.83;

    alert(dollar + '$ = ' + (dollar*euro) + '€');
}

function flashDrive(){
    const flash = +prompt('Enter еhe number of gigabytes: (Gb)');
    const files = 820;

    alert(parseInt((flash*1000)/820) + ' files');
}

function chocolate(){
    const wallet = +prompt('Enter the amount of money in the wallet.');
    const chocolate = +prompt ('How much 1 chocolate counts?');

    const count = parseInt(wallet / chocolate);
    const remainder = wallet % chocolate;

    alert(`You can buy ${count} chocolates, and your remainder: ${remainder}$`)
}

function reverse(){
    const number = +prompt('Enter 3-digit number, please: ');

    const numA = number%10;
    const numB = parseInt(number/10)%10;
    const numC = parseInt(number/100)%10;

    alert(number + ' <=> ' + numA + numB + numC);
}

function evenOdd(){
    const number = +prompt('Enter number, please: ');
    const audit = number % 2;

    alert(`Is the ${number} even? ` + !audit);
}