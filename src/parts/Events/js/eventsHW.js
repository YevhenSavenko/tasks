const descript = document.querySelectorAll('.descript');
const taskText = document.querySelectorAll('.task__text');

descript.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(taskText[index].classList.contains('task__text')){
            taskText[index].classList.remove('task__text');
            taskText[index].classList.add('task__show');
        } else {
            taskText[index].classList.add('task__text');
            taskText[index].classList.remove('task__show');
        }
    })
});



const links = document.querySelectorAll('.links ul li a');

links.forEach(item => {
    if (item.innerHTML.indexOf('http') === 0) {
        item.style.borderBottom = '2px dotted darkcyan';
    }
})


const folders = document.querySelectorAll('.inside__folders');
const openFolder = document.querySelectorAll('.folder__open');

openFolder.forEach((item, index) => {
    item.addEventListener('click', _ => {
        if (_.target.nodeName === 'LI') {
            if (window.getComputedStyle(folders[index]).display === 'none') {
                folders[index].style.display = 'block';
            } else {
                folders[index].style.display = 'none';
            }
        }
    });
});


const books = document.querySelectorAll('.books ul li');

books.forEach((item, index) => {
    item.addEventListener('click', e => {
        function removeBg(){
            books.forEach(item => {
                item.classList.remove('orange');
            });
        }

        function selectShift(index2 = 0, index1){
            if(index1 < index2){
                let temp = 0;
                temp = index1;
                index1 = index2;
                index2 = temp;
            }

            for(let i = index2; i <= index1; i++){
                books[i].classList.add('orange');
            }
        }

        

        if(e.ctrlKey){
            if(item.classList.contains('orange')){
                item.classList.remove('orange');
            } else {
                item.classList.add('orange');
            }
        } else if(e.shiftKey){
            let index2 = 0;
            books.forEach((item, indexI) => {
                if(item.classList.contains('orange')){
                    index2 = indexI
                }
            });
            selectShift(index2, index);
            window.getSelection().removeAllRanges();
        } else {
            removeBg();
            item.classList.add('orange');
        }
    });
})

const editWrapper = document.querySelector('.edit-wrapper');

addEventListener('keydown', e => {
    const content = document.querySelector('.edit');
    const textArea = document.querySelector('#edit-content');
    let data = '';

    if(e.ctrlKey === true && e.code === 'KeyE'){
        data = content.innerHTML.split(' ').filter(word => {
            if(word !== false){
                return word.replace(/\n/ig, '');
            }
        });

        console.log(data);
        content.classList.add('content-hide');
        content.classList.remove('content-show');

        textArea.classList.add('content-show');
        textArea.classList.remove('content-hide');
        textArea.value = data.join(' ');
    
        e.preventDefault();
    }

    if(e.ctrlKey === true && e.code === 'KeyS'){
        data = textArea.value;
        content.innerHTML = data;

        content.classList.add('content-show');
        content.classList.remove('content-hide');

        textArea.classList.add('content-hide');
        textArea.classList.remove('content-show');

        e.preventDefault();
    }
});


const findTable = document.querySelector('.table-with-sort table tbody');
const findRableTH = document.querySelectorAll('.table-with-sort th');
const arrayPeople = 
[
    {
        name: 'Mark',
        lastName: 'Zuckerberg',
        age: 34,
        company: 'Facebook'
    },
    {
        name: 'Larry',
        lastName: 'Page',
        age: 45,
        company: 'Google'
    },
    {
        name: 'Timothy',
        lastName: 'Cook',
        age: 57,
        company: 'Apple'
    },
    {
        name: 'Bill',
        lastName: 'Gates',
        age: 62,
        company: 'Microsoft'
    },
]

const arrayPeopleClone = arrayPeople;
const createElementTD = document.createElement('td');

function deleteСells(){
    const findCells = document.querySelectorAll('.table-with-sort td').forEach(item => item.remove());
}

function sortByFirstName(array){
    deleteСells();

    array.sort((a, b) => a.name > b.name ? 1 : -1);

    createRowsTable(array);
}

function sortByLastName(array){
    deleteСells();

    array.sort((a, b) => a.lastName > b.lastName ? 1 : -1);

    createRowsTable(array);
}

function sortByAge(array){
    deleteСells();

    array.sort((a, b) => a.age > b.age ? 1 : -1);

    createRowsTable(array);
}

function sortByCompany(array){
    deleteСells();

    array.sort((a, b) => a.company > b.company ? 1 : -1);

    createRowsTable(array);
}


function createRowsTable(array){
    for(let i = 0; i < array.length; i++){
        const createRowTable = document.createElement('tr');
        
        for(item in arrayPeople[i]){
            const cloneElementTD = createElementTD.cloneNode(false);
            cloneElementTD.innerHTML = arrayPeople[i][item];
            createRowTable.append(cloneElementTD);
        }

        findTable.append(createRowTable);
    }
}

findTable.addEventListener('click', e => {
    if(e.target.nodeName === 'TH'){
        if(e.target.innerText === 'Firstname'){
            sortByFirstName(arrayPeopleClone);
        } else if(e.target.innerText === 'Lastname'){
            sortByLastName(arrayPeopleClone);
        } else if(e.target.innerText === 'Age'){
            sortByAge(arrayPeopleClone);
        } else if(e.target.innerText === 'Company'){
            sortByCompany(arrayPeopleClone);
        }
    }
});

createRowsTable(arrayPeopleClone);


