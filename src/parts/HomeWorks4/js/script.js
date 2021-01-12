const practicButtons = 10;
let practicButtonItem = [];
let homeWorksButtonItem = [];
let span = [];

const div = document.createElement('div');
const practicalHeadding = document.createElement('h2');
const homeHeadding = document.createElement('h2');
const practRec = document.createElement('h2');
const divButton = document.createElement('div');
const divButton2 = document.createElement('div');
const divButton3 = document.createElement('div');
const withdraw = document.querySelector('.withdraw');


document.body.prepend(div);
div.append(divButton);
homeHeadding.innerHTML = 'Home work №4';
practicalHeadding.innerHTML = 'Practic work №4';

divButton2.classList.add('buttons-wrapper');
div.classList.add('wrapper');
practicalHeadding.classList.add('headding');
practRec.classList.add('headding');
homeHeadding.classList.add('headding');
divButton.classList.add('buttons-wrapper');
divButton3.classList.add('buttons-wrapper');

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
practicButtonItem[0].addEventListener('click', comparisonNumbers);
practicButtonItem[1].addEventListener('click', raiseNumber);
practicButtonItem[2].addEventListener('click', calculator);
practicButtonItem[3].addEventListener('click', isPrimeMumber);
practicButtonItem[4].addEventListener('click', multiplicationTable);
practicButtonItem[5].addEventListener('click', divisionWithRemainder);
practicButtonItem[6].addEventListener('click', summNumbers);
practicButtonItem[7].addEventListener('click', largeOfNumbers);
practicButtonItem[8].addEventListener('click', showEvenOdd);
practicButtonItem[9].addEventListener('click', date);

homeWorksButtonItem[0].addEventListener('click', comparison);
homeWorksButtonItem[1].addEventListener('click', factorial);
homeWorksButtonItem[2].addEventListener('click', concat);
homeWorksButtonItem[3].addEventListener('click', areaRectangle);
homeWorksButtonItem[4].addEventListener('click', perfectNumbers);
homeWorksButtonItem[5].addEventListener('click', diapasonePerfectNumbers);
homeWorksButtonItem[6].addEventListener('click', showTime);
homeWorksButtonItem[7].addEventListener('click', inSeconds);
homeWorksButtonItem[8].addEventListener('click', fromSeconds);
homeWorksButtonItem[9].addEventListener('click', divideDate);


function removeSpan(){
    const span = withdraw.querySelectorAll('span');
    
    for(let i = 0; i < span.length; i++){
        span[i].remove();
    }
}

function addTextForSpan(index, textUser){
        span[index] = document.createElement('span');
        span[index].innerHTML = textUser;
        withdraw.append(span[index]);
}


/*****************************************/

function comparisonNumbers(){
    removeSpan()

    let numberA = +prompt('Enter number A: ');
    let numberB = +prompt('Enter number B: ');
    let res = 0;

    if(numberA < numberB){
        res = numberA;
    } else if(numberA > numberB){
        res = numberB;
    } 

    addTextForSpan(0, res + ' less');
}

function raiseNumber(){
    removeSpan()

    let number = +prompt('Enter number: ');
    let expon = +prompt('Enter exponent: ');

    addTextForSpan(0, raiseNumberChild(number, expon));

}

function raiseNumberChild(n, e){
    let res = 1;

    while(e > 0){
        res = res * n;
        e--;
    }

    return res;
}

function calculator(){
    removeSpan();

    let numberA = +prompt('Enter number A: ');
    let numberB = +prompt('Enter number B: ');
    let sign = prompt('Enter sign for calculate (+, -, /, *): ')

    addTextForSpan(0, `${numberA} ${sign} ${numberB}  = ` + calculatorChild(numberA, numberB, sign));
}

function calculatorChild(a, b, sign){
    let res = 0;
    switch (sign) {
        case '+':
            res = a + b;
        break;
        case '-':
            res = a - b
        break;
        case '*':
            res = a * b
        break;
        case '/':
            res = a / b;
        break;
        default:
            break;
    }

    return res;
}

function isPrimeMumber(){
    removeSpan();

    let number = +prompt('Enter the number for verification: ');

   isPrimeMumberChild(number);
}

function isPrimeMumberChild(number){
    let str = '';

    for(let i = 2; i < number; i++){
        if(number % i == 0){
           str = `No, this number isn\`t prime, because ${number} % ${i} = ${number % i}`;
           addTextForSpan(0, str);
           return 0;
        }
    }

    str = 'Yes, this number is prime';
    addTextForSpan(0, str);
}


function multiplicationTable(){
    removeSpan();
    let number = +prompt('Enter number for table: ');

    multiplicationTableChild(number);   
}

function multiplicationTableChild(n){
    for(let i = 1; i < 11; i++){
        addTextForSpan(i, `${n} * ${i} = ${n * i} <br>`);
    }
}

function divisionWithRemainder(){
    removeSpan();
    let numberA = +prompt('Enter number A: ');
    let numberB = +prompt('Enter number B: ');

    addTextForSpan(0, divisionWithRemainderChild(numberA, numberB));
}

function divisionWithRemainderChild(a, b){
    let res = 0;
    res = Math.floor(a / b);
    b = b*res;
    a = a - b;

    let str = `
        res = 0; <br>
        res = Math.floor(${a} / ${b}); <br>
        b = ${b} * ${res}; <br>
        a = ${a} - ${b}; <br>
        ${a} % ${b} = ${a}
    `

    return str;
}

function summNumbers(){
    removeSpan();
    let numberA = +prompt('Enter number 1: ', '2');
    let numberB = +prompt('Enter number 2: ', '10');
    let numberC = +prompt('Enter number 3: ', '22');
    let numberD = +prompt('Enter number 4: ', '3');
    let numberE = +prompt('Enter number 5: ', '18');

    addTextForSpan(0, `The summ of the numbers = ` + summNumbersChild(numberA, numberB, numberC, numberD, numberE));
}

function summNumbersChild(){
    let res = 0;
    for(let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}

function largeOfNumbers(){
    removeSpan();
    let numberA = +prompt('Enter number 1: ', '2');
    let numberB = +prompt('Enter number 2: ', '10');
    let numberC = +prompt('Enter number 3: ', '22');
    let numberD = +prompt('Enter number 4: ', '3');
    let numberE = +prompt('Enter number 5: ', '18');

    addTextForSpan(0, `The large numbers = ` + largeOfNumbersChild(numberA, numberB, numberC, numberD, numberE));    
}

function largeOfNumbersChild(){
    let res = 0;
    for(let i = 0; i < arguments.length; i++){
        if(res < arguments[i]){
            res =  arguments[i];
        }
    }

    return res;
}

function showEvenOdd(){
    removeSpan();
    let min= +prompt('Enter the MIN number for the range: ', '32');
    let max = +prompt('Enter the MAX number for the range', '99');
    let params = prompt('Which numbers to display even(true) or odd(false)', 'true');

    showEvenOddChild(min, max, params);
}

function showEvenOddChild(min, max, params){
    let res = '';

    for(let i = min; i <= max; i++){
        if(params === 'true' && i % 2 === 0){
            addTextForSpan(i, `${i}, `);
        } else if(params === 'false' && i % 2 !== 0){
            addTextForSpan(i, `${i}, `);
        }
    }
}

function date(){
    removeSpan();
    let day = +prompt('Enter day, please: ');
    let month = +prompt('Enter month, please: ');
    let year = +prompt('Enter year, please: ');

    dateChild(day, month, year);
}

function dateChild(day, month, year){

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
    

    addTextForSpan(0, day + '.' + month + '.' + year);
}


/*******************************************/

function comparison(){
    removeSpan();
    let numberA = +prompt('Enter number A, please: ');
    let numberB = +prompt('Enter number B, please: ');

    function comparisonChild(numberA, numberB) {
        if(numberA < numberB){
            return -1;
        } else if (numberA > numberB){
            return 1;
        } else if (numberA === numberB){
            return 0;
        } else {
            alert('Fail!!!');
        }
    }

    addTextForSpan(0, comparisonChild(numberA, numberB));
}

function factorial(){
    removeSpan();
    let number = +prompt('Enter number please: ');

    function factorialChild(number){
        if(number === 1){
            return 1;
        } else {
            return number*factorialChild(number-1);
        }
    }

    addTextForSpan(0, factorialChild(number));
}

function concat(){
    removeSpan();
    let number = '';
    let count = 0;
    let str = '';

    while(count < 3){
        number = +prompt('Enter number please: ');
        str += number;
        count++;
    }

    str = parseInt(str);
    addTextForSpan(0, str);
}

function areaRectangle(){
    removeSpan();
    let width = +prompt('Enter width please: ');
    let height = +prompt('Enter height please: ');

    function areaRectangleChild(width = 0, height = 0){
        let area = 0;

        if(width === 0){
            area = height * height;
            area = 'S(q) = ' + height + ' * ' + height + ' = ' + area;
        } else if (height === 0){
            area = width * width
            area = 'S(q) = ' + width + ' * ' + width + ' = ' + area;
        } else {
            area = width * height;
            area = 'S(r) = ' + width + ' * ' + height + ' = ' + area;
        }

        return area;
    }

    addTextForSpan(0, areaRectangleChild(width, height));
}

function perfectNumbers(){
    removeSpan();
    let number = +prompt('Enter number please: ');
    let str = '';


    if (perfectNumbersCild(number) === 1){
        str = `Yes, the number ${number} is perfect <br>`;
    } else {
        str = `No, the number ${number} isn\`t perfect <br>`;
    }

    addTextForSpan(0, str);
}

function perfectNumbersCild(number){
    let summ = 0;
    let count = 1;

    while(count < number){
        if(number % count === 0){
            summ += count;
            count++;
        } else {
            count++;
        }
    }

    if (number === summ){
        return 1;
    } else {
        return 0;
    }
}



function diapasonePerfectNumbers(){
    removeSpan();
    let min = +prompt('Enter min number please: ');
    let max = +prompt('Enter max number please: ');
    let count = 0;

    for(; min < max; min++){
        if(perfectNumbersCild(min) === 1){
            addTextForSpan(count, `${min}, `);
        }
    }
}


/**********************************************************/


function showTime(){
    removeSpan();
    let hours = +prompt('How match hours?');
    let minutes = +prompt('How match minutes?');
    let seconds = +prompt('How match seconds?');

    addTextForSpan(0, showTimeChild(hours, minutes, seconds));
}

function inSeconds(){
    removeSpan();
    let hours = +prompt('How match hours?');
    let minutes = +prompt('How match minutes?');
    let seconds = +prompt('How match seconds?');

    addTextForSpan(0, inSecondsChild(hours, minutes, seconds)+'s');
}

function fromSeconds(){
    removeSpan();
    let seconds = +prompt('How match seconds?');

    addTextForSpan(0, fromSecondsChild(seconds));
}

function divideDate(){
    removeSpan();
    let day_1 = +prompt('Enter day for first date: ', '01');
    let month_1 = +prompt('Enter month for first date: ', '01');
    let year_1 = +prompt('Enter year for first date: ', '2019');

    let day_2 = +prompt('Enter day for second date: ', '05');
    let month_2 = +prompt('Enter month for second date: ', '06');
    let year_2 = +prompt('Enter year for second date: ', '2020');

    addTextForSpan(0, divideDateChild(day_1, month_1, year_1, day_2, month_2, year_2) + ". Inaccuracy: (+/-) 50s. Because the average value of the days of the month is taken 30,4167 days")
}


/***********************************************************/

function showTimeChild(h = 0, m = 0, s = 0){
    if(h < 24){
        if(m < 60){
            if(s < 60){
                h < 10 ? h = '0' + h : h;
                m < 10 ? m = '0' + m : m;
                s < 10 ? s = '0' + s : s;

                let str = `${h}:${m}:${s}`;
                return str;
            } else {
                alert('Seconds has incorrect value!');
                return 0;
            }
        } else {
            alert('Minutes has incorrect value!');
            return 0;
        }
    } else {
        alert('Hours has incorrect value!');
        return 0;
    }
}

function inSecondsChild(h = 0, m = 0, s = 0){
    // if(h < 24){
    //     if(m < 60){
    //         if(s < 60){
                let summ = 0;

                m = m * 60;
                h = h * 60 * 60;

                summ = s + m + h;
                return summ;
    //         } else {
    //             alert('Seconds has incorrect value!');
    //             return 0;
    //         }
    //     } else {
    //         alert('Minutes has incorrect value!');
    //         return 0;
    //     }
    // } else {
    //     alert('Hours has incorrect value!');
    //     return 0;
    // }
}

function fromSecondsChild(s){
    let hours = Math.floor(s / 3600);
    let minutes = Math.floor((s - (hours * 3600)) / 60);
    let seconds = s - ((hours * 3600) + (minutes * 60));

    hours < 10 ? hours = '0' + hours : hours;
    minutes < 10 ? minutes = '0' + minutes : minutes;
    seconds < 10 ? seconds = '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function divideDateChild(d1, m1, y1, d2, m2, y2){
    let secondsForDate1 = inSeconds(d1, m1, y1);
    let secondsForDate2 = inSeconds(d2, m2, y2);

    function inSeconds(d, m, y){
        let seconds = 0

        d = d * 86400;
        m = m * 2,628e+6;
        y = y * 31535965,4396976;

        seconds = d + m + y;
        return seconds;
    }

    function divideDateInside(date1, date2){
        let result = 0;

        if(date1 > date2){
            result = date1 - date2;
            return 
        } else if(date1 < date2){
            result = date2 - date1;
        } 

        return result;
    }

    let divide = divideDateInside(secondsForDate1, secondsForDate2);
    let finish = fromSecondsChild(divide);

    return finish;
}