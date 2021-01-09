const practicButtons = 13;
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
practicalHeadding.innerHTML = 'Module 2. Home work №2';

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


/************************************/
practicButtonItem[0].addEventListener('click', showPurchases);
practicButtonItem[1].addEventListener('click', addPurchases);
practicButtonItem[2].addEventListener('click',  addBuy);
practicButtonItem[3].addEventListener('click', showCheck);
practicButtonItem[4].addEventListener('click', allSumm);
practicButtonItem[5].addEventListener('click', mostExpensivePurchase);
practicButtonItem[6].addEventListener('click', averageValueGoods);
practicButtonItem[7].addEventListener('click', addStyles);
practicButtonItem[8].addEventListener('click', showAuditory);
practicButtonItem[9].addEventListener('click', showAuditoryFaculty);
practicButtonItem[10].addEventListener('click', showAuditoryObj);
practicButtonItem[11].addEventListener('click', sortPlaces);
practicButtonItem[12].addEventListener('click', sortName);

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

let purchasesList = 
[
    {
        name: 'phone',
        count: 5,
        buy: false,
    },
    {
        name: 'auto',
        count: 1,
        buy: false,
    },
    {
        name: 'mouse',
        count: 1,
        buy: true,
    },
    {
        name: 'pen',
        count: 15,
        buy: false,
    },
    {
        name: 'chart',
        count: 1,
        buy: true,
    },
]

function showPurchases(){
    removeSpan();
    
    for(let i = 0; i < purchasesList.length; i++){
        if(purchasesList[i].buy === false){
            let str = 
            `
                Product name: ${purchasesList[i].name} <br>
                Quantity: ${purchasesList[i].count} <br>
                Bought: ${purchasesList[i].buy} <br><br>
            `
            addTextForSpan(i, str)
        }
    }

    for(let i = 0; i < purchasesList.length; i++){
        if(purchasesList[i].buy === true){
            let str = 
            `
                Product name: ${purchasesList[i].name} <br>
                Quantity: ${purchasesList[i].count} <br>
                Bought: ${purchasesList[i].buy} <br><br>
            `
            addTextForSpan(i, str)
        }
    }
}

function addPurchases(){
    removeSpan();
    let nameNewPurchases = prompt('Which product to add?', 'pen');
    nameNewPurchases = nameNewPurchases.toLowerCase();

    for(let i = 0; i < purchasesList.length; i++){
        if(nameNewPurchases === purchasesList[i].name){
            purchasesList[i].count++;
            let str = 
            `
                Product name: ${purchasesList[i].name} <br>
                Quantity: ${purchasesList[i].count} <br>
                Bought: ${purchasesList[i].buy} <br><br>
            `
            addTextForSpan(i, str)
            return 0;
        } 
    }

    let newProduct = {
        name: nameNewPurchases,
        count: 1,
        buy: false,
    } 

    purchasesList.push(newProduct);

    showPurchases();
}

function addBuy(){
    removeSpan();
    let buyProduct = prompt('Which product to buy', 'auto');
    buyProduct = buyProduct.toLowerCase();

    for(let i = 0; i < purchasesList.length; i++){
        if(purchasesList[i].name === buyProduct){
            purchasesList[i].buy = true;
        }
    }

    showPurchases();
}


let check = [
    {
        name: 'milk',
        count: 2,
        price: 3.1,
    },
    {
        name: 'chocolate',
        count: 1,
        price: 2,
    },
    {
        name: 'cheese',
        count: 1,
        price: 5.5,
    },
    {
        name: 'coca-cola',
        count: 6,
        price: 1.5,
    },
    {
        name: 'mandarins',
        count: 20,
        price: 0.2,
    },
];

function showCheck(){
    removeSpan();
    for(let i = 0; i < check.length; i++){
        str = `Name product: ${check[i].name} | Q-ty: ${check[i].count} | Price: ${check[i].count} x ${check[i].price}$ <br>`
        addTextForSpan(i, str)
    }
}

function allSumm(){
    showCheck();

    let res = 0;

    for(let i = 0; i < check.length; i++){
        res += check[i].count * check[i].price;
    }

    addTextForSpan(check.length,`The amount of the check is: ${res}$`)
}

function mostExpensivePurchase(){
    removeSpan();
    let max = 0;
    let res = new Object();


    for(let i = 0; i < check.length; i++){
        if(check[i].price * check[i].count > max){
            max = check[i].price * check[i].count;
            res = check[i];
        }
    }
    addTextForSpan(0, `The most expensive purchase is: ${res.name} (${res.count}*${res.price}$ = ${res.count*res.price}$)`)
}

function averageValueGoods(){
    removeSpan();
    for(let i = 0; i < check.length; i++){
        addTextForSpan(0, `${check[i].name} = ${check[i].price}$ <br>`);
    }
}

let styles = [
    {
        display: 'block',
        color: 'blue',
        fontSize: '20px',
        textAlign: 'left',
        line: 'underline',
        letterSpacing: '5px',
        fontWeight: 100,
    },
    {
        display: 'block',
        color: 'red',
        fontSize: '19px',
        textAlign: 'right',
        line: 'overline',
        letterSpacing: '4px',
        fontWeight: 200,
    },
    {
        display: 'block',
        color: 'purple',
        fontSize: '18px',
        textAlign: 'center',
        line: 'none',
        letterSpacing: '3px',
        fontWeight: 300,
    },
    {
        display: 'block',
        color: '#6ae',
        fontSize: '17px',
        textAlign: 'left',
        line: 'blink',
        letterSpacing: '2px',
        fontWeight: 500,
    },
    {
        display: 'block',
        color: 'rgb(122,55,32)',
        fontSize: '16px',
        textAlign: 'right',
        line: 'line-through',
        letterSpacing: '1px',
        fontWeight: 900,
    }
];

function addStyles(){
    removeSpan();
    let str = prompt('Add string: ', 'Hello Java Script!!!');
    for(let i = 0; i < styles.length; i++){
        addTextForSpan(i, str);
    }

    const paragraf = withdraw.querySelectorAll('span');

    paragraf.forEach((item, index) => {
        item.style.display = styles[index].display;
        item.style.color = styles[index].color;
        item.style.fontSize = styles[index].fontSize;
        item.style.textAlign = styles[index].textAlign;
        item.style.textDecoration = styles[index].line;
        item.style.letterSpacing = styles[index].letterSpacing;
        item.style.fontWeight = styles[index].fontWeight;
    })
}


let auditory = [
    {
        name: 'arizona',
        places: 15,
        faculty: 'back-end',

    },
    {
        name: 'ohio',
        places: 15,
        faculty: 'front-end',
    },
    {
        name: 'louisiana',
        places: 10,
        faculty: 'software development',
    },
    {
        name: 'missouri',
        places: 12,
        faculty: 'back-end',
    },
    {
        name: 'colorado',
        places: 12,
        faculty: 'software development',
    },
    {
        name: 'oregon',
        places: 20,
        faculty: 'front-end',
    },
    {
        name: 'hawai\`i',
        places: 18,
        faculty: 'front-end',
    }
];

function showAuditory(){
    removeSpan();

    for(let i = 0; i < auditory.length; i++){
        let str = 
        `
            Name auditory: <i>${auditory[i].name}</i> <br>
            Number of seats: <i>${auditory[i].places}</i> <br>
            Faculty: <i>${auditory[i].faculty}</i> <br><br>
        `
        addTextForSpan(i, str);
    }
}

function showAuditoryFaculty(){
    removeSpan();
    let faculty = prompt('Enter the faculty(front-end/software development/back-end)', 'front-end');
    faculty = faculty.toLowerCase();

    for(let i = 0; i < auditory.length; i++){
        if(faculty === auditory[i].faculty){
            let str = 
            `
                Name auditory: ${auditory[i].name} <br>
                Number of seats: ${auditory[i].places} <br>
                Faculty: <i>${auditory[i].faculty}</i> <br><br>
            `
            addTextForSpan(i, str);
            
        }
    }

    let tagsI = withdraw.querySelectorAll('i');

    tagsI.forEach(item => {
        item.style.color = 'red';
        item.style.fontWeight = 'bold'
    });
}

function showAuditoryObj(){
    removeSpan();
    let objFilter = {
        name: prompt('Enter auditory name: ', 'colorado'),
        places: +prompt('Enter number of seats: ', 12),
        faculty: prompt('Enter the faculty(front-end/software development/back-end)', 'software development'),
    };

    objFilter.name = objFilter.name.toLowerCase();
    objFilter.faculty = objFilter.faculty.toLowerCase();

    for(let i = 0; i < auditory.length; i++){
        if(objFilter.name === auditory[i].name && objFilter.places === auditory[i].places && objFilter.faculty === auditory[i].faculty){
            let str = 
            `
                Name auditory: <i>${auditory[i].name}</i> <br>
                Number of seats: <i>${auditory[i].places}</i> <br>
                Faculty: <i>${auditory[i].faculty}</i> <br><br>
            `
            addTextForSpan(i, str);
        }
    }

    let tagsI = withdraw.querySelectorAll('i');

    tagsI.forEach(item => {
        item.style.color = 'red';
        item.style.fontWeight = 'bold'
    });
}

function sortPlaces(){
    auditory.sort((a, b) => {
        return a.places - b.places;
    });

    showAuditory();
}

function sortName(){
    
    function compare(a,b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    auditory.sort(compare)

    showAuditory();
}

