const ARRAY_TASKS = [
    `Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины`,
    `Написать функцию, которая переводит в верхний регистр первый символ переданной строки`,
    `Написать функцию, которая считает количество гласных букв в переданной строке`,
    `Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру`,
    `Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие. Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”`,
    `Написать функцию, которая проверяет, является ли переданная строка палиндромом`,
    `Написать функцию, которая считает количество слов в предложении`,
    `Написать функцию, которая возвращает самое длинное слово из предложения`,
    `Написать функцию, которая считает среднюю длину слова в предложении`,
    `Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке. Также вывести, сколько всего раз встречается этот символ в строке`
]

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
practicalHeadding.innerHTML = 'Module 2. Home work №3';

divButton2.classList.add('buttons-wrapper');
div.classList.add('wrapper');
practicalHeadding.classList.add('headding');
divButton.classList.add('buttons-wrapper');

div.prepend(practicalHeadding);


for (let i = 0; i < practicButtons; i++){
    practicButtonItem[i] = document.createElement('button');
    practicButtonItem[i].innerHTML = `Task №${i+1}`;
    divButton.append(practicButtonItem[i]);
    practicButtonItem[i].classList.add('button');
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
practicButtonItem[0].addEventListener('click', stringComparison);
practicButtonItem[1].addEventListener('click', lowerFirstLetter);
practicButtonItem[2].addEventListener('click',  consonantСheck);
practicButtonItem[3].addEventListener('click', checkSpam);
practicButtonItem[4].addEventListener('click', lineShortening);
practicButtonItem[5].addEventListener('click', palindromeLine);
practicButtonItem[6].addEventListener('click', countWord);
practicButtonItem[7].addEventListener('click', longWord);
practicButtonItem[8].addEventListener('click', averageWordLength);
practicButtonItem[9].addEventListener('click', showIndexSymbols);

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

function stringComparison(){
    removeSpan();
    let firstString = prompt('Enter the first string: ', 'Hello World');
    let secondString = prompt('Enter the second string: ', 'Hello Java Script');
    let result = 0;

    if(firstString.length > secondString.length){
        result = 1;
    } else if(firstString.length < secondString.length){
        result = -1;
    }

    addTextForSpan(0, result);
}

function lowerFirstLetter(){
    removeSpan();
    let firstString = prompt('Enter the first string: ', 'hello world');
    let firstLetter = firstString[0].toUpperCase();

    addTextForSpan(0,  firstLetter + firstString.slice(1));
}

function consonantСheck(){
    let str = prompt('Add first string: ');
    str = str.toLowerCase();
    let arr = str.split('');
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || 
        arr[i] === 'o' || arr[i] === 'u' || arr[i] === 'y'){
            count++;
        }
    }
}

function checkSpam(){
    removeSpan();
    let spam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх', 'xxx'];
    let str = prompt('Add string: ', 'Check this (не удаляйте) sentence');
    str = str.toLowerCase();

    for(let i = 0; i < spam.length; i++){
        if(str.indexOf(spam[i]) >= 0){
            addTextForSpan(0, 'This sentence has spam!');
            return 0;
        }
    }

    addTextForSpan(0, 'This sentence hasn`t spam!');
}

function lineShortening(){
    removeSpan();

    let str = prompt('Enter string, please: ', 'Hello World');
    let num = +prompt('How much to cut', '8');

    if(str.length > num){
        num = num - 3;
        addTextForSpan(0, str.slice(0, num) + '...');
        return 1;
    }

    addTextForSpan(0, str);
}

function palindromeLine(){
    removeSpan();

    let palindrome = prompt('Enter palindrome: ', 'Ты, милок, иди яром: у дороги мина, за дорогой огород, а за ним и город у моря; иди, коли мыт.');
    palindrome = palindrome.toLowerCase();
    palindromeArray = palindrome.split('').filter((item) => {
        if(item !== ',' && item !== '-' && item !== '-' 
        && item !== '!' && item !== '.' && item !== ' '
        && item !== ';' && item !== ':' && '...'){
            return item;
        }
    });

    let firstPalindromeLine = palindromeArray.join('');
    palindromeArray = palindromeArray.reverse().join('');    
    

    if(firstPalindromeLine === palindromeArray){
        addTextForSpan(0, 'Yes, your string is palindrome!');
    }else{
        addTextForSpan(0, 'No, your string isn`t palindrome!');
    }
}

function countWord(){
    removeSpan();

    let str = prompt('Enter а sentence: ', 'Ты, милок, иди яром: у дороги мина, за дорогой огород, а за ним и город у моря; иди, коли мыт.');
    addTextForSpan(0, `${str.split(' ').length} words in your sentence`);
    
}

function longWord(){
    let str = prompt('Enter а sentence', 'Какой атрибут указывает язык на котором написан сценарий');
    str = str.toLowerCase().split(' ');
    let max = str[0];
   
    for(let i = 1; i < str.length; i++){
        if(str[i].length > max.length){
            max = str[i];
        }
    }

    addTextForSpan(0, `The biggest word in a sentence: "${max}"`);
}

function averageWordLength(){
    let str = prompt('Enter a sentence: ', 'Specifies a string to separate each pair of adjacent elements of the array.');

    str = str.toLowerCase().split(' ');
    let count = 0;
    let summ = 0;

    for(let i = 0; i < str.length; i++){
        summ += str[i].length;
        count++;
    }

    addTextForSpan(0, `Average word length in a sentence is: ${(summ/count).toFixed(2)} units`);
}

function showIndexSymbols(){
    let str = prompt('Enter a sentence: ', 'Specifies a string to separate each pair of adjacent elements of the array.');
    let symbol = prompt('Enter a symbol', 's');
    let count = 0;
    str = str.toLowerCase().split('');

    for(let i = 0; i < str.length; i++){
        if(str[i] === symbol){
            addTextForSpan(count, `${i}, `);
            count++;
        }
    }

    addTextForSpan(count+1, `Number of characters in a line: ${count}`);

}