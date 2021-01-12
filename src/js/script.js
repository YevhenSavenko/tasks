const firstLine = document.querySelectorAll('.first__line');
const secondLine = document.querySelectorAll('.second__line');
const thirdLine = document.querySelectorAll('.third__line');
const fourthLine = document.querySelectorAll('.fourth__line');
const fifthLine = document.querySelectorAll('.fifth__line');
const sixth_Line = document.querySelectorAll('.sixth__line');
const seventhLine = document.querySelectorAll('.seventh__line');
const eighthLine = document.querySelectorAll('.eighth__line');
const ninthLine = document.querySelectorAll('.ninth__line');
const tenthLine = document.querySelectorAll('.tenth__line');
const wrapper = document.querySelector('.wp');

function randomNumber(){
    return Math.floor(Math.random()*2);
}


setInterval(()=>{
    for(let i = 1; i < firstLine.length; i++){
        firstLine[firstLine.length-i].innerHTML = firstLine[firstLine.length-i-1].innerHTML;
        secondLine[secondLine.length-i].innerHTML = secondLine[secondLine.length-i-1].innerHTML;
        thirdLine[thirdLine.length-i].innerHTML = thirdLine[thirdLine.length-i-1].innerHTML;
        fourthLine[fourthLine.length-i].innerHTML = fourthLine[fourthLine.length-i-1].innerHTML;
        fifthLine[fifthLine.length-i].innerHTML = fifthLine[fifthLine.length-i-1].innerHTML;
        sixth_Line[sixth_Line.length-i].innerHTML = sixth_Line[sixth_Line.length-i-1].innerHTML;
        seventhLine[seventhLine.length-i].innerHTML = seventhLine[seventhLine.length-i-1].innerHTML;
        eighthLine[eighthLine.length-i].innerHTML = eighthLine[eighthLine.length-i-1].innerHTML;
        ninthLine[ninthLine.length-i].innerHTML = ninthLine[ninthLine.length-i-1].innerHTML;
        tenthLine[tenthLine.length-i].innerHTML = tenthLine[tenthLine.length-i-1].innerHTML;
    }

    firstLine[0].innerHTML =  randomNumber();
    secondLine[0].innerHTML = randomNumber();
    thirdLine[0].innerHTML =  randomNumber();
    fourthLine[0].innerHTML =  randomNumber();
    fifthLine[0].innerHTML =  randomNumber();
    sixth_Line[0].innerHTML =  randomNumber();
    seventhLine[0].innerHTML =  randomNumber();
    eighthLine[0].innerHTML =  randomNumber();
    ninthLine[0].innerHTML =  randomNumber();
    tenthLine[0].innerHTML =  randomNumber();
}, 100);

for(let i = 0; i < 200; i++){
    const div = document.createElement('div');
    
    div.innerText = Math.floor(Math.random()*2);
    div.style.cssText = `transform: translate(-50%, -50%) translate(${Math.floor((Math.random()*400)-200)}px, ${Math.floor((Math.random()*150)-75)}px) rotate(${Math.floor(Math.random()*361)}deg);`;
    wrapper.append(div);
}

const numRain = document.querySelectorAll('.wp div');

function showAllNumbers(){
    numRain.forEach(item => {
        item.style.opacity = '1';
    });
}

setTimeout(() => {
    setInterval(() => {
        showAllNumbers();
        for(let i = 0; i < 200; i++){
            numRain[Math.floor(Math.random()*numRain.length)].style.opacity = '0';
        }
    }, 800);
}, 1000);


