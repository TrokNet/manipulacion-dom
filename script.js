const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const  parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

h1.innerText= 'Trok <br> EU';
console.log('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#res');
function btnOnclock(){
    resultado.innerHTML = (input1.value + input2.value);
}

const er = btnOnclock();
console.log(input1.value + input2.value);

resultado.innerHTML = btnOnclock();