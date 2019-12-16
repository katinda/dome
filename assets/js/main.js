import exo1 from './exo1.js'
import exo2 from './exo2.js'
import exo4 from './exo4.js'
import exo3 from './exo3.js'
import exo5 from './exo5.js'


// EXO5---------------------------------------------------------------------------------------

let oeuf = document.querySelector('.oeuf');
let popey = document.querySelector('.popey');

oeuf.addEventListener('click', () => {
    let chichi = document.createElement('img');
    chichi.src = '../../assets/images/206129-711-1-Large.jpg';
    chichi.setAttribute('width', '110')
    chichi.setAttribute('height', '110')
    popey.appendChild(chichi);


})

// EXO6 ---------------------------------------------------------------------------------------------

let openleft = document.querySelector('.operand-left');
let openright = document.querySelector('.operand-right');
let calc1 = document.querySelector('#calc1');
let sum = document.querySelector('.sum');


calc1.addEventListener('click', () => {
    // sum.innerText =Number(openleft.value)+ Number(openright.value); // bissss
    sum.textContent = eval(`${openleft.value}+${openright.value}`);
})


// EXO6Bis-----------------------------------------------------------------------------------------------

let numberCalc = document.querySelectorAll('.numberCalc');
let operatorCalc = document.querySelectorAll('.operatorCalc');
let equalCalc = document.querySelector('.equalCalc');
let deleteCalc = document.querySelector('.deleteCalc');
let resultCalc = document.querySelector('.resultCalc');
let operationCalc = document.querySelector('.operationCalc');
let ryan= 0


numberCalc.forEach(element => {
    element.addEventListener('click', () => {
        resultCalc.value += element.innerText
    })
});


operatorCalc.forEach((element,i) => {
    element.addEventListener('click',() =>{
        operationCalc.innerText= resultCalc.value + operatorCalc[i].textContent;
        resultCalc.value=''
    })  
});
equalCalc.addEventListener('click',()=>{
    operationCalc.textContent+=resultCalc.value;
    let result = eval(operationCalc.textContent);
    operationCalc.textContent+=`=${result}` 
    resultCalc.value=""
});

deleteCalc.addEventListener('click',()=>{
    operationCalc.textContent=""
    resultCalc.value=""

});

// EXO7--------------------------------------------------------------------------------------

