const submit = document.querySelector('.form__submit');
const colorName = document.querySelector('.check__name input');
const selectType = document.querySelector('#select__type');
const errorName = document.querySelector('.input__error-name');
const checkCode = document.querySelector('.check__code input');
const errorCode = document.querySelector('.input__error-code');
const showColors = document.querySelector('.show__colors');
const oneColor = document.querySelector('.one__color');

let nameOfColor = '';
let type = '';
let code = '';

let dataArray = localStorage.getItem('arrColors');


submit.addEventListener('submit', e => {
    e.preventDefault();
    let flag = true;
    const templateName = /[^a-zA-Z]/;
    const templateHex = /^[#][0-9a-fA-F]{6}/;  


    if(colorName.value.length < 3){
        errorName.innerHTML = 'Name of the color must have 3 or more symbols!';
        flag = false;
    } else if(templateName.test(colorName.value) === true){
        errorName.innerHTML = 'Color name must have only English letters!';
        flag = false;
    }else{
        let temp = localStorage.getItem('arrColors');
        let arrColor = JSON.parse(temp);
        if(temp){
            for(let i = 0; i < arrColor.length; i++){
                if(arrColor[i].name === colorName.value){
                    flag = false;
                    errorName.innerHTML = 'This name is exists! Come up with a new one';
                } else {
                    errorName.innerHTML = '';
                    nameOfColor = colorName.value;
                }
            }
        } else {
            errorName.innerHTML = '';
            nameOfColor = colorName.value;
        }
    }

    if(checkCode.value.length < 1){
        errorCode.innerHTML = 'Code must not be empty!';
        flag = false;
    }

    if(selectType.value === 'hex'){
        if(checkCode.value.length > 7 || checkCode.value.length < 1){
            errorCode.innerHTML = "Hex code must have a '#' symbol and no more than 6 numbers [0-9] or letters [A-F]!";
            flag = false;
        }else if(templateHex.test(checkCode.value) && flag === true){
            type = selectType.value;
            code = checkCode.value;
            errorCode.innerHTML = '';
        }else{
            errorCode.innerHTML = "Hex code must have a '#' symbol and no more than 6 numbers [0-9] or letters [A-F]";
            flag = false;
        }
    }else if(selectType.value === 'rgb'){
        if(parseInt(checkCode.value.split(',')[0]) < 0 || parseInt(checkCode.value.split(',')[0]) > 255 ||
           parseInt(checkCode.value.split(',')[1]) < 0 || parseInt(checkCode.value.split(',')[1]) > 255 || 
           parseInt(checkCode.value.split(',')[2]) < 0 || parseInt(checkCode.value.split(',')[2]) > 255 || 
           isNaN(parseInt(checkCode.value.split(',')[0])) || isNaN(parseInt(checkCode.value.split(',')[1])) ||
           isNaN(parseInt(checkCode.value.split(',')[2])) || checkCode.value.split(',').length > 3){

            errorCode.innerHTML = 'RGB code must match the pattern [0-255], [0-255], [0-255]';
            flag = false;
        } else{
            if(flag === true){
                code = checkCode.value;
                type = selectType.value;
                errorCode.innerHTML = '';
            }
        }
    }else if( selectType.value === 'rgba'){
        if(parseInt(checkCode.value.split(',')[0]) < 0 || parseInt(checkCode.value.split(',')[0]) > 255 ||
           parseInt(checkCode.value.split(',')[1]) < 0 || parseInt(checkCode.value.split(',')[1]) > 255 || 
           parseInt(checkCode.value.split(',')[2]) < 0 || parseInt(checkCode.value.split(',')[2]) > 255 ||
           parseInt(checkCode.value.split(',')[3]) < 0 || parseInt(checkCode.value.split(',')[3]) > 1 ||  
           isNaN(parseInt(checkCode.value.split(',')[0])) || isNaN(parseInt(checkCode.value.split(',')[1])) ||
           isNaN(parseInt(checkCode.value.split(',')[2])) || isNaN(parseInt(checkCode.value.split(',')[3])) || 
           checkCode.value.split(',').length > 4){

            errorCode.innerHTML = 'RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]';
            flag = false;
        } else{
            if(flag === true){
                code = checkCode.value;
                type = selectType.value;
                errorCode.innerHTML = '';
            }
        }
    }

    if(flag === true){
        let data = localStorage.getItem('arrColors');
        let arr;

        if(data === null){
            arr = [];
        } else {
            arr = JSON.parse(data);
        }

        getItemColor(nameOfColor, type, code);
        

        arr.push({
            name: nameOfColor,
            type: type,
            code: code,
        });


        localStorage.setItem('arrColors', JSON.stringify(arr));
        checkCode.value = '';
        colorName.value = '';
    }
});


if(dataArray !== null){
    let arrParse = JSON.parse(dataArray);

    for(let i = 0; i < arrParse.length; i++){
        getItemColor(arrParse[i].name, arrParse[i].type, arrParse[i].code)
    }

    
}


function getItemColor(nameOfColor, type, code){
    const oneColorClone = oneColor.cloneNode(true);
    oneColorClone.childNodes[1].childNodes[1].innerHTML = nameOfColor;
    oneColorClone.childNodes[1].childNodes[3].innerHTML = type;
    oneColorClone.childNodes[1].childNodes[5].innerHTML = code;

    if(type === 'hex'){
        oneColorClone.style.background = code;
    } else {
        oneColorClone.style.backgroundColor = `${type}(${code})`;
    }

    showColors.append(oneColorClone);
}
