const practicButtons = 10;
let practicButtonItem = [];
let homeWorksButtonItem = [];
let span = [];

const div = document.createElement('div');
const practicalHeadding = document.createElement('h2');
const homeHeadding = document.createElement('h2');
const divButton = document.createElement('div');
const divButton2 = document.createElement('div');
const withdraw = document.querySelector('.withdraw');


document.body.prepend(div);
div.append(divButton);
practicalHeadding.innerHTML = 'Practic work №3';
homeHeadding.innerHTML = 'Home work №3';

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
practicButtonItem[0].addEventListener('click', alertSymbol);
practicButtonItem[1].addEventListener('click', maxToNull);
practicButtonItem[2].addEventListener('click',  exponentiation);
practicButtonItem[3].addEventListener('click', divide);
practicButtonItem[4].addEventListener('click',factorial);
practicButtonItem[5].addEventListener('click', untieTheEquation);
practicButtonItem[6].addEventListener('click', divideOn1000);
practicButtonItem[7].addEventListener('click', diapasone);
practicButtonItem[8].addEventListener('click', everyForthElements);
practicButtonItem[9].addEventListener('click', difficultNumber);

homeWorksButtonItem[0].addEventListener('click', addSummNextToNumber);
homeWorksButtonItem[1].addEventListener('click', NOD);
homeWorksButtonItem[2].addEventListener('click', allDivide);
homeWorksButtonItem[3].addEventListener('click', howMutchNumbers);
homeWorksButtonItem[4].addEventListener('click', calcNumbers);
homeWorksButtonItem[5].addEventListener('click', calculate);
homeWorksButtonItem[6].addEventListener('click', shiftNumbers);
homeWorksButtonItem[7].addEventListener('click', daysOfWeek);
homeWorksButtonItem[8].addEventListener('click', multiplicationTable);
homeWorksButtonItem[9].addEventListener('click', GuessTheNumber);


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

function alertSymbol(){
    removeSpan();
    let howMatch = +prompt('Enter number please: ');
    while(howMatch > 0){
        let index = 0;
        howMatch--;

        const str = `# | `;
        addTextForSpan(index, str);
        index++;
    }
}

function maxToNull(){
    removeSpan();
    let number = +prompt('Enter number please: ');

    while(number > -1){
        let index = 0;

        const str = `${number} | `;
        addTextForSpan(index, str);
        
        
        index++;
        number--;
    }
}


function exponentiation(){
    removeSpan();
    const number = +prompt('Enter number please: ');
    const expon = +prompt('Enter exponential please: ');
    let res = 1;
    let index = expon;



    while(index > 0){
        
        res *= number;
        index--;
    }

    const str = `${number}^${expon} = ${res}`;

    addTextForSpan(0, str);
}


function divide(){
    removeSpan();
    let numberA = +prompt('Enter numberA please: ');
    let numberB = +prompt('Enter numberB please: ');
    let index = 2;
    let index_1 = 0;
    let resA = [];
    let resB = [];
    let resAll = 1;
    const SaveNumberA = numberA;
    const SaveNumberB = numberB;
    let strA = '';
    let strB = '';
    let strNSD = '';


    while(numberA > 1 || numberB > 1){
        if(numberA % index === 0){
            numberA = numberA / index;
            strA += `${index} * `;
            resA.push(index);
        } else if(numberB % index === 0){
            numberB = numberB / index;
            strB += `${index} * `;
            resB.push(index);
        } else {
            index++;  
        }
    }

    strA += '1';
    strB += '1';

    while(index_1 < resA.length ){
        let index_2 = 0;

        while(index_2 < resB.length){
            // console.log(resA[index_1], resB[index_2]);
            if(resA[index_1] === resB[index_2]){
                resAll *= resA[index_1];
                strNSD += `${resA[index_1]} * `
                resB[index_2] = 0;
                break;
            }
            index_2++;
        }

        index_1++;
    }

    const strResultA = `Number A: ${SaveNumberA} = ${strA} <br>Number B: ${SaveNumberB} = ${strB} <br>Общие делители: ${strNSD} 1`

    addTextForSpan(0, strResultA);
}

function factorial(){
    removeSpan();

    let number = +prompt('Enter number please: ');
    const saveNumber = number;
    let res = 1;
    let str = '';

    while(number > 0){
        res *= number;
        number--;
        addTextForSpan(0, str)
    }

    str = `(${saveNumber})! = ${res}`
    addTextForSpan(0, str);
}


function untieTheEquation(){
    removeSpan();
    let x = 0;

    do{
        x = +prompt('2 + 2 * 2?');
        if(x === 6){
            alert('Yes, it`s true!');
        }
    }while(x !== 6);
}

function divideOn1000(){
    removeSpan();
    let number = +prompt('Enter number please: ', '1000');
    let count = 0;
    
    do{
        number /= 2;
        count++;
        console.log(number);
    } while(number > 50);

    let str = `Result: ${number}, and ${count} divisions`;

    addTextForSpan(0, str);
}

function diapasone(){
    removeSpan();
    let number = +prompt('Enter number: ');

    for(let i = 1, j = 0; i <= 100; i++){
        if(i % number === 0){
            addTextForSpan(j, `${i} | `)
            j++;
        } 

    }
}

function everyForthElements(){
    removeSpan();
    let min = +prompt('Min number: ');
    let max = +prompt('Max number: ');

    for(let i = min, j = 0; i <= max; i+=4){
        addTextForSpan(j, `${i} | `);
        j++;
    }
}

function  difficultNumber(){
    removeSpan();
    let number = +prompt('Enter number: ');
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

function addSummNextToNumber(){
    removeSpan();
    let min = +prompt('Enter min number for diapasone: ');
    let max = +prompt('Enter max number for diapasone: ');
    let summ = 0;
    let j = 1;

    for(let i = 0; min <= max; min++, i++, j+=2){
        summ += min;
    
        if(min !== max){
            addTextForSpan(i, `${min} + `);
        } else {
            addTextForSpan(i, min);
        }
    }

    addTextForSpan(j, ` = ${summ}`);
}


function NOD(){
    removeSpan();
    let numberA = +prompt('Enter numberA please: ');
    let numberB = +prompt('Enter numberB please: ');
    let index = 2;
    let index_1 = 0;
    let resA = [];
    let resB = [];
    let resAll = 1;
    const SaveNumberA = numberA;
    const SaveNumberB = numberB;
    let strA = '';
    let strB = '';
    let strNSD = '';


    while(numberA > 1 || numberB > 1){
        if(numberA % index === 0){
            numberA = numberA / index;
            strA += `${index} * `;
            resA.push(index);
        } else if(numberB % index === 0){
            numberB = numberB / index;
            strB += `${index} * `;
            resB.push(index);
        } else {
            index++;  
        }
    }

    strA += '1';
    strB += '1';

    while(index_1 < resA.length ){
        let index_2 = 0;

        while(index_2 < resB.length){
            // console.log(resA[index_1], resB[index_2]);
            if(resA[index_1] === resB[index_2]){
                resAll *= resA[index_1];
                strNSD += `${resA[index_1]} * `
                resB[index_2] = 0;
                break;
            }
            index_2++;
        }

        index_1++;
    }

    const strResultA = `Number A: ${SaveNumberA} = ${strA} <br>Number B: ${SaveNumberB} = ${strB} <br>Общие делители: ${strNSD} 1 <br> NOD: ${resAll}`

    addTextForSpan(0, strResultA);
}


function allDivide(){
    removeSpan();
    let numberA = +prompt('Enter numberA please: ');
    let index = 2;
    let strA = '';
    const saveNumberA = numberA;

    while(numberA > 1){
        if(numberA % index === 0){
            numberA = numberA / index;
            
            if(numberA > 1){
                strA += `${index} * `;
            } else {
                strA += `${index}`;
            }
        } else {
            index++;  
        }
    }

    addTextForSpan(0, `${saveNumberA} = ${strA}`);
}

function howMutchNumbers(){
    removeSpan();
    let number = +prompt('Enter number please: ');
    let count = 0;
    const saveNumber = number;

    while(number > 0){
        if(number < 10){
            count++;
            break;
        } else {
            number /= 10;
            count++;
        }
    }

    addTextForSpan(0, `A number ${saveNumber} has ${count} digits`);
}

function calcNumbers(){
    removeSpan();
    const arr = [1,0,-4,4,0,5,-8,9,4,0];
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    let countAll = 0;
    
    while(countAll < 10){
        let number = +prompt('Enter number please: ', `${arr[countAll]}`);

        if(number > 0){
            countPositive++;
        } else if(number < 0){
            countNegative++
        } else if(number === 0){
            countZero++;
        }

        countAll++;
    }

    addTextForSpan(0, `User entered ${countPositive} positive numbers, ${countNegative} negative numbers and ${countZero} zeros`)
}


function calculate(){
    removeSpan();
    let question = '';
    let res;
    let count = 0;
    
    do{
        res = 0;
        const numberA = +prompt('Enter numberA please: ');
        const numberB = +prompt('Enter numberB please: ');

        const sign = prompt('Enter symbol for sample ("+", "-", "*", "/"):');

        switch (sign) {
            case '+':
                res = numberA + numberB;
            break;
            case '-':
                res = numberA - numberB;
            break;
            case '*':
                res = numberA * numberB;
            break;
            case '/':
                res = numberA / numberB;
            break;
        
            default:
            break;
        }

        count++;

        addTextForSpan(count, `${numberA} ${sign} ${numberB} = ${res} <br>`);
        question = prompt('End program? (yes or other symbol for continue): ');
    }while(question !== 'yes');
}


function shiftNumbers(){
    removeSpan();
    let numberA = +prompt('Enter number please: ');
    const shift = +prompt('How much to move?');
    let count = 0;

    let saveNumberLeftPart = saveNumberRightPart = numberA;
    let resultLeft = '';
    let resultRight = 0

    let resultAll = '';

    while(numberA > 0){
        if(numberA < 10){
            count++;
            break;
        } else {
            numberA /= 10;
            count++;
        }
    }

    count = count - shift;

    while(count > 0){
        saveNumberLeftPart = parseInt(saveNumberRightPart%10);
        saveNumberRightPart = saveNumberRightPart/10;
        resultLeft += saveNumberLeftPart;
        count--
    }

    resultLeft = resultLeft.split('').reverse().join('');
    resultRight = parseInt(saveNumberRightPart);

    resultAll = resultLeft+resultRight;

    addTextForSpan(0, `Result = ${resultAll}`);
}

function daysOfWeek(){
    removeSpan();
    let days = '';
    let count = 1;
    let nameOfDay = '';


    do{
        switch (count) {
            case 1:
                nameOfDay = 'Monday';
            break;
            case 2:
                nameOfDay = 'Tuesday'
            break;
            case 3: 
                nameOfDay = 'Wednesday'
            break;
            case 4:
                nameOfDay = 'Thursday'
            break;
            case 5:
                nameOfDay = 'Friday'
            break;
            case 6:
                nameOfDay = 'Saturday'
            break;
            case 7:
                nameOfDay = 'Sunday'
            break;
        
            default:
            break;
        }

        days = confirm(`Days today ${nameOfDay}. Want to see the next day`);
        count++;

        if(count === 8){
            count = 1;
        }

    }while(days !== false);
}


function multiplicationTable(){
    removeSpan();
    let count = 0;

     
    for(let i = 1; i < 11; i++){
        for(let j = 2; j < 10; j++){
            addTextForSpan(count, `${j} * ${i} = ${j * i}`);
            count++;
        }
        addTextForSpan(count, '<br>');
        count++;
    }


    span.forEach(item => {
        item.style.display = 'block';
        item.style.float = 'left';
        item.style.width = '150px';
    })
    
}


function GuessTheNumber(){
    removeSpan();
    let myNumber = 100;
    confirm(`Guess the number please (0 - ${myNumber}): `);
    let question = '';
    let saveNumber = myNumber / 2;

    let N = 0;

    while(true){

        question = prompt('Your number > '+ saveNumber + ', <'+ saveNumber + ' or = ' + saveNumber + '?')

       
        switch (question) {
            case '>':
                N = myNumber/2 + 1;
                saveNumber = Math.ceil((saveNumber + myNumber)/2);
            break;
            case '<':
                myNumber = saveNumber;
                saveNumber = Math.floor((N + myNumber)/2);
            break;
            case '=':
                alert('I won!');
            break;
        }

        if(question === '='){
            break;
        }

    }
}
