const ARRAY_TASKS = [
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена)`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция принимает объект-прямоугольник и возвращает его ширину`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция принимает объект-прямоугольник и возвращает его высоту`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция принимает объект-прямоугольник и возвращает его площадь`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция принимает объект-прямоугольник и возвращает его периметр.`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения – для изменения ширины и высоты`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y`,
    `Создать объект (в задание 1), описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
    Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки`,
    `Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом. Функция для вывода на экран информации об автомобиле`,
    `Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
    Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час`,
    `Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. Функция сложения 2-х объектов-дробей`,
    'Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. Функция вычитания 2-х объектов-дробей',
    `Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. Функция умножения 2-х объектов-дробей`,
    `Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. Функция деления 2-х объектов-дробей`,
    `Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. Функция сокращения объекта-дроби`,
    `Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. Функция вывода времени на экран`,
    `Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. Функция изменения времени на переданное количество секунд`,
    `Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. Функция изменения времени на переданное количество минут`,
    `Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. Функция изменения времени на переданное количество часов`,


 ]

const practicButtons = 12;
const homeButtons = 11;
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
practicalHeadding.innerHTML = 'Module 2. Practic work №1';
homeHeadding.innerHTML = 'Module 2. Home work №1';

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
}

for (let i = 0; i < homeButtons; i++){
    homeWorksButtonItem[i] = document.createElement('button');
    homeWorksButtonItem[i].innerHTML = `Task №${i+1}`;
    divButton2.append(homeWorksButtonItem[i]);
    homeWorksButtonItem[i].classList.add('button');
}

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
practicButtonItem[0].addEventListener('click', pointRectangle);
practicButtonItem[1].addEventListener('click', calcWidth);
practicButtonItem[2].addEventListener('click',  calcHeight);
practicButtonItem[3].addEventListener('click', areaRectangle);
practicButtonItem[4].addEventListener('click',calcPerimeter);
practicButtonItem[5].addEventListener('click', addWidth);
practicButtonItem[6].addEventListener('click', addHeight);
practicButtonItem[7].addEventListener('click', addHeightAndWidth);
practicButtonItem[8].addEventListener('click', moveX);
practicButtonItem[9].addEventListener('click', moveY);
practicButtonItem[10].addEventListener('click', moveXY);
practicButtonItem[11].addEventListener('click', pointInRectandle);

homeWorksButtonItem[0].addEventListener('click', showAuto);
homeWorksButtonItem[1].addEventListener('click', calcAverageSpeed);
homeWorksButtonItem[2].addEventListener('click', calcFraction);
homeWorksButtonItem[3].addEventListener('click', subtractionFractions);
homeWorksButtonItem[4].addEventListener('click', multiplicationFractions);
homeWorksButtonItem[5].addEventListener('click', divisionFractions);
homeWorksButtonItem[6].addEventListener('click', fractionReduction);
homeWorksButtonItem[7].addEventListener('click', showDate);
homeWorksButtonItem[8].addEventListener('click', correctSeconds);
homeWorksButtonItem[9].addEventListener('click', correctMinutes);
homeWorksButtonItem[10].addEventListener('click', correctHours);


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

/******************************************************/

let rect = {
    p1: {x : 0, y : 0},
    p3: {x : 0, y : 0},
}

function pointRectangle(){
    removeSpan();
    let topLeftX = +prompt('Enter X for point 1: ');
    let topLeftY = +prompt('Enter Y for point 1: ');
    let BottomRightX = +prompt('Enter X for point 2: ');
    let BottomRightY = +prompt('Enter Y for point 2: ');

    rect = {
        p1: {x : topLeftX, y : topLeftY},
        p2: {x :  BottomRightX, y : topLeftY},
        p3: {x : BottomRightX, y : BottomRightY},
        p4: {x : topLeftX, y : BottomRightY},
    }

    let str = `
        Point 1 (Top Left): X = ${rect.p1.x}; Y = ${rect.p1.y} <br>
        Point 2 (Top Right): X = ${rect.p2.x}; Y = ${rect.p2.y} <br>
        Point 3 (Bottom Right): X = ${rect.p3.x}; Y = ${rect.p3.y} <br>
        Point 4 (Bottom Left): X = ${rect.p4.x}; Y = ${rect.p4.y} <br>
    `;

    addTextForSpan(0, str);
}

function calcWidth(){
    removeSpan();
    
    let width = rect.p3.x - rect.p1.x;

    if (width < 0){
        width *= -1;
    }

    addTextForSpan(0, `Width rectangle = ${width}`);
    return width;
}

function calcHeight(){
    removeSpan();

    let height = rect.p1.y - rect.p3.y;

    if (height < 0){
        height *= -1;
    }

    addTextForSpan(0, `Height rectangle = ${height}`);
    return height;
}

function areaRectangle(){
    let area = calcWidth() * calcHeight();
    removeSpan();

    addTextForSpan(0, `S(r) = ${area}`);
}

function calcPerimeter(){
    let perimeter = 2*(calcWidth() + calcHeight());

    removeSpan();

    addTextForSpan(0, `P(r) = ${perimeter}`);
}

function addWidth(){
    removeSpan();
    let addWidth = +prompt('How much to change the width?');

    rect.p3.x += addWidth;
    rect.p2.x = rect.p3.x;

    calcWidth();
}

function addHeight(){
    removeSpan();
    let addHeight = +prompt('How much to change the height');

    rect.p1.y += addHeight;
    rect.p2.y = rect.p2.y;

    calcHeight();
}

function addHeightAndWidth(){
    removeSpan();
    let addHeight = +prompt('How much to change the height');
    let addWidth = +prompt('How much to change the width?');

    rect.p1.y += addHeight;
    rect.p2.y = rect.p2.y;
    rect.p3.x += addWidth;
    rect.p2.x = rect.p3.x;

    let height = rect.p1.y - rect.p3.y;

    if (height < 0){
        height *= -1;
    }

    addTextForSpan(0, `Height rectangle = ${height} <br>`);
    
    let width = rect.p3.x - rect.p1.x;

    if (width < 0){
        width *= -1;
    }

    addTextForSpan(0, `Width rectangle = ${width}`);
}

function moveX(){
    removeSpan();
    let moveX = +prompt('How much to change the X-absciss?');

    rect.p1.x += moveX;
    rect.p2.x += moveX;
    rect.p3.x += moveX;
    rect.p4.x += moveX;

    let str = `
    Point 1 (Top Left): X = ${rect.p1.x}; Y = ${rect.p1.y} <br>
    Point 2 (Top Right): X = ${rect.p2.x}; Y = ${rect.p2.y} <br>
    Point 3 (Bottom Right): X = ${rect.p3.x}; Y = ${rect.p3.y} <br>
    Point 4 (Bottom Left): X = ${rect.p4.x}; Y = ${rect.p4.y} <br>
    `;

    addTextForSpan(0, str);
}   

function moveY(){
    removeSpan();
    let moveY = +prompt('How much to change the Y-absciss?');

    rect.p1.y += moveY;
    rect.p2.y += moveY;
    rect.p3.y += moveY;
    rect.p4.y += moveY;

    let str = `
    Point 1 (Top Left): X = ${rect.p1.x}; Y = ${rect.p1.y} <br>
    Point 2 (Top Right): X = ${rect.p2.x}; Y = ${rect.p2.y} <br>
    Point 3 (Bottom Right): X = ${rect.p3.x}; Y = ${rect.p3.y} <br>
    Point 4 (Bottom Left): X = ${rect.p4.x}; Y = ${rect.p4.y} <br>
    `;

    addTextForSpan(0, str);
}


function moveXY(){
    moveX();
    moveY();
}


function pointInRectandle(){
    removeSpan();
    let pointX = +prompt('Add a point on the X-absciss?');
    let pointY = +prompt('Add a point on the Y-absciss?');

    if(pointX <= rect.p2.x && pointX >= rect.p1.x){
        if(pointY >= rect.p4.y && pointY <= rect.p1.y){
            addTextForSpan(0, `Yes, this point(x = ${pointX}, y = ${pointY}) is in a rectangle!`);
            return 1;
        }
    }

    addTextForSpan(0, `No, this point(x = ${pointX}, y = ${pointY}) isn\`t in a rectangle!`);
    return 0;
}

let auto = {
    manufacturer: '',
    model: '',
    yearOfIssue: 0,
    averageSpeed: 0
}

function showAuto(){
    removeSpan();
    let manufacturerInside = prompt('Add manufacturer autos: ', 'BMW');
    let modelInside = prompt('Add model autos: ', 'M5');
    let yearOfIssueInside = +prompt('Add year of issue autos: ', '2015');
    let averageSpeed = +prompt('Add average speed autos', '160')

    auto = {
        manufacturer: manufacturerInside,
        model: modelInside,
        yearOfIssue: yearOfIssueInside,
        averageSpeed: averageSpeed
    }

    let str = `
        Manufacturer: ${auto.manufacturer} <br>
        Model: ${auto.model} <br>
        Year of issue: ${auto.yearOfIssue} year<br>
        Average speed: ${auto.averageSpeed} km/h
    `

    addTextForSpan(0, str);
}

function calcAverageSpeed(){
    removeSpan();
    let way = +prompt('Add way (in km): ', '1300');

    let time = way/auto.averageSpeed;
    let rest = 0;

    let s = time * 60 * 60;
    
    let hours = Math.floor(s / 3600);
    let minutes = Math.floor((s - (hours * 3600)) / 60);
    let seconds = s - ((hours * 3600) + (minutes * 60));

    hours < 10 ? hours = '0' + hours : hours;
    minutes < 10 ? minutes = '0' + minutes : minutes;
    seconds < 10 ? seconds = '0' + seconds : seconds;

    if(time > 4){
        rest = Math.floor(time / 4);
    }

    addTextForSpan(0, `${hours}:${minutes}:${seconds} on the road and ${rest} hours of rest.`);
}

let fractionA = {
    numerator: 3,
    denominator: 4, 
}

let fractionB = {
    numerator: 5,
    denominator: 8, 
}

function calcFraction(){
    removeSpan();

    addTextForSpan(0, calcFractionChild(fractionA, fractionB));
}

function subtractionFractions(){
    removeSpan();

    addTextForSpan(0, subtractionFractionsChild(fractionA, fractionB));
}

function multiplicationFractions(){
    removeSpan();

    addTextForSpan(0, multiplicationFractionsChild(fractionA, fractionB));
}

function divisionFractions(){
    removeSpan();

    addTextForSpan(0, divisionFractionsChild(fractionA, fractionB));
}

function commonDenominator(a, b){
    let max = 0;
    let generalDenominator = 0;

    if(a.denominator > b.denominator){
        max = a.denominator;
    } else if(a.denominator < b.denominator){
        max = b.denominator;
    } else {
        max = a.denominator;
    }

    for (let i = max; true; i++){
        if(i % a.denominator === 0 && i % b.denominator === 0){
            generalDenominator = i;
            return generalDenominator
        }
    }

}

function calcFractionChild(a, b){
    let generalDenominator =  commonDenominator(a, b);

    let numeratorMultyA = generalDenominator / a.denominator;
    let numeratorMultyB = generalDenominator / b.denominator;

    numeratorMultyA = numeratorMultyA * a.numerator;
    numeratorMultyB = numeratorMultyB * b.numerator;

    let str = `${a.numerator}/${a.denominator} + ${b.numerator}/${b.denominator} = ${numeratorMultyA+numeratorMultyB}/${generalDenominator}`;
    return str;
}

function subtractionFractionsChild(a, b){
    let generalDenominator =  commonDenominator(a, b);

    let numeratorMultyA = generalDenominator / a.denominator;
    let numeratorMultyB = generalDenominator / b.denominator;

    numeratorMultyA = numeratorMultyA * a.numerator;
    numeratorMultyB = numeratorMultyB * b.numerator;

    let str = `${a.numerator}/${a.denominator} - ${b.numerator}/${b.denominator} = ${numeratorMultyA-numeratorMultyB}/${generalDenominator}`;
    return str;
}


function multiplicationFractionsChild(a, b){
    let up = a.numerator * b.numerator;
    let down = a.denominator * b.denominator;

    let str = `${a.numerator}/${a.denominator} * ${b.numerator}/${b.denominator} = ${up}/${down}`;
    return str;
}

function divisionFractionsChild(a, b){
    let up = a.numerator * b.denominator;
    let down = a.denominator * b.numerator;

    let str = `${a.numerator}/${a.denominator} : ${b.numerator}/${b.denominator} = ${up}/${down}`;
    return str
}

function fractionReduction(){
    removeSpan();
    let fract = {
        numerator: +prompt('Enter numerator of fraction: ', '20'),
        denominator: +prompt('Enter denominator of fraction: ', '5'),
    }
    let min = 0
    let str = `${fract.numerator} / ${fract.denominator} = `;

    if(fract.numerator < fract.denominator){
        min = fract.numerator;
    }else{
        min = fract.denominator;
    }


    for(let i = min; i >= 2; i--){
        if(fract.numerator % i === 0 && fract.denominator % i === 0){
            fract.numerator = fract.numerator / i;
            fract.denominator = fract.denominator / i;
        }
    }

    if(fract.denominator === 1){
        str += `${fract.numerator}`;
    }else{
        str += `${fract.numerator} / ${fract.denominator}`;
    }


    addTextForSpan(0, str);
}


let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

function showDate(){
    removeSpan();
    time.hours = +prompt('How many hours?', '23');
    if(time.hours < 24){
        time.minutes = +prompt('How many minutes?', '44');
        if(time.minutes < 60){
            time.seconds = +prompt('How many seconds?', '36');
            if(time.seconds < 60){
                addTextForSpan(0,  showDateChild(time.hours, time.minutes, time.seconds));
            } else {
                alert('Incorrect seconds');
            }
        } else {
            alert('Incorrect minutes');
        }
    } else {
        alert('Incorrect hours');
    }
}

function showDateChild(h, m, s){
    h < 10 ? h = '0' + h : h;
    m < 10 ? m = '0' + m : m;
    s < 10 ? s = '0' + s : s;

    let str = `${h}:${m}:${s}`;

    return str;
}

function correctSeconds(){
    removeSpan();
    let addSeconds = +prompt('How many add seconds?', '1000');
    let countSeconds = 0;
    let countMinutes = 0;
    let countHours = 0;

    time.seconds += addSeconds;

    if(time.seconds > 59){
        countSeconds = Math.floor(time.seconds / 60);
        time.minutes += countSeconds;
        time.seconds = time.seconds - (countSeconds * 60); 
    }

    if(time.minutes > 59){
        countMinutes = Math.floor(time.minutes / 60);
        time.hours += countMinutes;
        time.minutes = time.minutes - (countMinutes * 60)
    }

    if(time.hours > 23){
        if(time.hours === 24){
            time.hours = 0;
        } else {
            countHours = Math.floor(time.hours / 24);
            time.hours += countHours;
            time.hours = time.hours - (countHours * 24)
        }
    }

    

    addTextForSpan(0, showDateChild(time.hours, time.minutes, time.seconds));
}

function correctMinutes(){
    removeSpan();
    let addMinutes = +prompt('How many add minutes?', '70');
    let countMinutes = 0;
    let countHours = 0;

    time.minutes += addMinutes;

    if(time.minutes > 59){
        countMinutes = Math.floor(time.minutes / 60);
        time.hours += countMinutes;
        time.minutes = time.minutes - (countMinutes * 60)
    }

    if(time.hours > 23){
        if(time.hours === 24){
            time.hours = 0;
        } else {
            countHours = Math.floor(time.hours / 24);
            time.hours += countHours;
            time.hours = time.hours - (countHours * 24)
        }
    }

    addTextForSpan(0, showDateChild(time.hours, time.minutes, time.seconds));

}

function correctHours(){
    removeSpan();
    let addHours = +prompt('How many add hours?', '10');

    time.hours += addHours;

    if(time.hours > 23){
        if(time.hours === 24){
            time.hours = 0;
        } else {
            countHours = Math.floor(time.hours / 24);
            time.hours += countHours;
            time.hours = time.hours - (countHours * 24)
        }
    }

    addTextForSpan(0, showDateChild(time.hours, time.minutes, time.seconds));
}




