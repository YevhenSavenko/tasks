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
practicalHeadding.innerHTML = 'Practic work №2';
homeHeadding.innerHTML = 'Home work №2';

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


/************************************/
practicButtonItem[0].addEventListener('click', checkValue);
practicButtonItem[1].addEventListener('click', trueYears);
practicButtonItem[2].addEventListener('click', moduleNumber);
practicButtonItem[3].addEventListener('click', time);
practicButtonItem[4].addEventListener('click', locationPoint);
practicButtonItem[5].addEventListener('click', monthName);
practicButtonItem[6].addEventListener('click', calc);
practicButtonItem[7].addEventListener('click', checkValue);
practicButtonItem[8].addEventListener('click', division);
practicButtonItem[9].addEventListener('click', hi);

homeWorksButtonItem[0].addEventListener('click', person);
homeWorksButtonItem[1].addEventListener('click', specSymbol);
homeWorksButtonItem[2].addEventListener('click', identicalNumbers);
homeWorksButtonItem[3].addEventListener('click', checkYear);
homeWorksButtonItem[4].addEventListener('click', palindrome);
homeWorksButtonItem[5].addEventListener('click', convectorUSD);
homeWorksButtonItem[6].addEventListener('click', discount);
homeWorksButtonItem[7].addEventListener('click', circleInSquare);
homeWorksButtonItem[8].addEventListener('click', test);
homeWorksButtonItem[9].addEventListener('click', date);


function checkValue(){
    const number = +prompt('Enter number, please: ');

    if(number > 0){
        alert(number + ' > 0');
    } else if (number < 0){
        alert(number + ' < 0');
    } else {
        alert(number + ' = 0');
    }
}

function trueYears(){
    const number = +prompt('Enter years, please: ');

    if(number > 0 && number <= 120){
        alert('Correct number');
    } else {
        alert('Incorrect number');
    }
}

function moduleNumber(){
    let number = +prompt('Enter number, please: ');

    if(number < 0){
        number = -number;
    }

    alert(`|x| = ${number}`);
}


function time(){
    let hours = +prompt('Enter please hours');

    if(hours >= 0 && hours < 24){
        let minutes = +prompt('Enter please minuts');
        if (minutes >= 0 && minutes < 60){
            let seconds = +prompt('seconds');
            if (seconds >= 0 && seconds < 60){
                if(hours < 10){
                    hours = '0' + hours;
                }
                if(minutes < 10){
                    minutes = '0' + minutes;
                }
                if(seconds < 10){
                    seconds = '0' + seconds;
                }
                alert(`Your time is valid! ${hours}:${minutes}:${seconds}`)
            } else{
                alert(`Your time is invalid!`);
            }
        } else{
            alert(`Your time is invalid!`);
        }
    } else{
        alert(`Your time is invalid!`);
    }
}

function locationPoint(){
    let numberX = +prompt('Enter number 1, please');
    let numberY = +prompt('Enter number 2, please');

    if(numberX == 0 && numberY == 0){
        alert('X = 0; Y = 0');
    }else if(numberX > 0 && numberY > 0){
        alert('Its I-st quarter');
    } else if (numberX < 0 && numberY > 0){
        alert('Its II-nd quarter');
    } else if (numberX < 0 && numberY < 0){
        alert('Its III-rd quarter');
    } else if (numberX > 0 && numberY < 0){
        alert('Its IV-th quarter');
    } else if (numberX === 0){
        alert('Point on X-abscess');
    } else if (numberY === 0){
        alert('Point on Y-abscess');
    } else {
        alert('Incorrect numbers!');
    }
}


function monthName(){
    const number = +prompt('Enter number of month, please (1-12)');

    switch (number) {
        case 1:
            alert('It`s January');
            break;
        case 2:
            alert('It`s February');
            break;
        case 3:
            alert('It`s March');
            break;
        case 4:
            alert('It`s April');
            break;
        case 5:
            alert('It`s May');
            break;
        case 6:
            alert('It`s June');
            break;
        case 7:
            alert('It`s July');
            break;
        case 8:
            alert('It`s August');
            break;
        case 9:
            alert('It`s September');
            break;
        case 10:
            alert('It`s October');
            break;
        case 11:
            alert('It`s November');
            break;
        case 12:
            alert('It`s December');
            break;
        default:
            alert('Incorrect number');
            break;
    }
}

function calc(){
    const numberA = +prompt('Enter number a: ');
    const numberB = +prompt('Enter number b: ');
    const action = prompt('Enter action (" + ", " - ", " * ", " / "): ');
    let res = 0;

    switch (action) {
        case '+':
            res = numberA + numberB
            alert(`${numberA} + ${numberB} = ${res}`);
            break;
        case '-':
            res = numberA - numberB
            alert(`${numberA} - ${numberB} = ${res}`);
            break;
        case '*':
            res = numberA * numberB
            alert(`${numberA} * ${numberB} = ${res}`);
            break;
        case '/':
            res = numberA / numberB
            alert(`${numberA} / ${numberB} = ${res}`);
            break;
        default:
            alert('Incorrect symbol');
            break;
    }
}

function checkValue(){
    let numberX = +prompt('Enter number 1, please');
    let numberY = +prompt('Enter number 2, please');

    alert(numberX > numberY ? numberX + ' > ' + numberY : numberY + ' > ' + numberX)
}


function division(){
    let numberX = +prompt('Enter number, please');

    alert(numberX % 5 === 0 ? 'Yes' : 'No');
}


function hi(){
    let word = prompt('Who are you? (Earthling or no)');

    alert(word === 'Earthling' || word === 'earthling' ? 'Hello, earthling!!!' : 'Hello, alien!!!')
}

function person(){
    let age = +prompt('Enter please your age');
    if(age <= 2){
        alert('You are baby!')
    } else if (age > 2 && age <= 5){
        alert('You are toddler!')
    } else if (age > 5 && age <= 16){
        alert('You are child!')
    } else if (age > 16 && age <= 21){
        alert('You are teenager!')
    } else if (age > 21 && age <= 55){
        alert('You are adult!')
    } else if (age > 55){
        alert('You are elder!')
    }
}

function specSymbol(){
    let numberX = +prompt('Enter number, please (0-9)');
    
    switch (numberX) {
        case 1:
            alert('It`s "!"');
            break;
        case 2:
            alert('It`s "@"');
            break;
        case 3:
            alert('It`s "#"');
            break;
        case 4:
            alert('It`s "$"');
            break;
        case 5:
            alert('It`s "%"');
            break;
        case 6:
            alert('It`s "^"');
            break;
        case 7:
            alert('It`s "&"');
            break;
        case 8:
            alert('It`s "*"');
            break;
        case 9:
            alert('It`s "("');
            break;
        case 0:
            alert('It`s ")"');
            break;
        default:
            alert('Incorrect number');
            break;
    }
}

function identicalNumbers(){
    let number = +prompt('Enter please 3-digilal numbers');

    let numberA = number%10;
    let numberB = parseInt(number/10)%10;
    let numberC = parseInt(number/100)%10;

    if(numberA === numberB || numberA === numberC || numberB === numberC){
        alert('Yes');
    } else {
        alert('No');
    }
}

function checkYear(){
    let year = +prompt('Enter year, please: ');

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        alert('Yes it`s year bissextile');
    }else{
        alert('No, year isn`t bissextile');
    }
}

function palindrome(){
    let number = prompt('Enter please number: ');
    let length = number.length;


    if(number[0] == number[length-1] && number[1] == number[length-2]){
        alert('Yes this number is palindrome!');
    }else{
        alert('No this number isn`t palindrome!');
    }
}

function convectorUSD(){
    const dollars = +prompt('Enter please summ in USD: ');
    let currency = prompt('Enter please currency (EUR, UAN, AZN): ');
    const euro = 0.82;
    const uan = 28.09;
    const azn = 1.7;
    
    currency.toLocaleLowerCase;
    let res = 0;

    switch (currency) {
        case 'eur':
            res = dollars * euro;
            alert(`${dollars}$ = ${res}€`);
            break;
        case 'uan':
            res = dollars * uan;
            alert(`${dollars}$ = ${res}₴`);
            break;
        case 'azn':
            res = dollars * azn;
            alert(`${dollars}$ = ${res}₼`);
            break;
        default:
            alert('Incorrect symbol');
            break;
    }
}

function discount(){
    const purchaseAmount = +prompt('What is the purchase amount?');
    let discount = 0;

    if(purchaseAmount >= 200 && purchaseAmount < 300){
        discount = 3;
    } else if(purchaseAmount >= 300 && purchaseAmount < 500){
        discount = 5;
    } else if(purchaseAmount >= 500){
        discount = 7;
    } else{
        alert('Incorrect summ!!!');
        return 0;
    }

    discount = (purchaseAmount * discount) / 100;
    alert(`${purchaseAmount} - ${discount} = ${purchaseAmount-discount}`)
}

function circleInSquare(){
    let square = +prompt('Enter perimeter square: ');
    square /= 4;
    let circle = +prompt('Enter perimeter circle: ');
    circle = ((circle / (2*3.14))) * 2;

    if(square > circle){
        alert('Yes');
    } else {
        alert('No');
    }
}

function test(){
    let question1 = prompt('5 + 3 = ? \n\na - 12;\nb - 8;\nc - 4;');
    let question2 = prompt('5 - 3 = ? \n\na - 2;\nb - 18;\nc - 5;');
    let question3 = prompt('5 * 3 = ? \n\na - 16;\nb - 1;\nc - 15;');
    let res = 0

    if(question1 === 'b'){
        res += 2;
    }

    if(question2 === 'a'){
        res += 2;
    }

    if(question3 === 'c'){
        res += 2;
    }

    alert('You have ' + res + ' coins');
}


function date(){
    let day = +prompt('Enter day, please: ');
    let month = +prompt('Enter month, please: ');
    let year = +prompt('Enter year, please: ');

    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        if (day <= 0 || day > 31){
            alert('Incorrect day for this month!!!');
            return 0;
        }
    } else if(month === 4 || month === 6 || month === 9 || month === 11){
        if (day <= 0 || day > 30){
            alert('Incorrect day for this month!!!');
            return 0;
        }
    } else if(month === 2){
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
            if(day <= 0 || day > 29){
                alert('Incorrect day for this month!!!');
                return 0;
            }
        } else if(day <= 0 || day > 28 ){
            alert('Incorrect day for this month!!!');
            return 0;
        }
    } else {
        alert('Incorrect month!!!');
        return 0;
    }

    day = day + 1;

    if((day > 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10)) 
    || ((day > 30) && (month === 4 || month === 6 || month === 9 || month === 11)) 
    || ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && (day > 29) && (month === 2))
    || !((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && (day > 28)) &&(month === 2 && day > 28)){
        day = 1;
        month++;
    } else if(month === 12 && day > 31){
        day = 1;
        month = 1;
        year++;
    }

    day < 10 ? day = '0' + day : day;
    month < 10 ? month = '0' + month : month;
    year < 10 ? year = '000' + year : year < 100 ? year = '00' + year : year < 1000 ? year = '0' + year : year;
    

    alert(day + '.' + month + '.' + year);
}