console.log(document.querySelector('.list'));
// document.querySelector('.list > li + li').innerHTML = 'ORANGE';
// document.querySelector('li:nth-child(2)').innerHTML = 'ORANGE';
// document.querySelector('li:nth-child(2)').textContent = 'ORANGE';
document.querySelector('li:nth-of-type(2)').textContent = 'ORANGE';

// document.querySelector('div').innerText = 'Technologi';
document.querySelector('div').style.color = 'red';


document.querySelector('.par').textContent = 'DOCUMENT';
document.querySelector('.par').style.color = 'black';

// console.log(document.querySelector('a').getAttribute('href'));
document.querySelector('.par').setAttribute('style', 'color: purple');

const ul = document.querySelector('ul');
const span1 = document.querySelector('span');
ul.removeChild(span1);

const li1 = document.createElement('li');
li1.textContent = 'JS';

const li2 = document.querySelector('li:nth-child(2)');

ul.appendChild(li1);

ul.insertBefore(li1, li2)

const li3 = document.createElement('li');
li3.textContent = 'SQL';

ul.appendChild(li3);

const li4 = document.createElement('li');
li4.textContent = 'JAVA';


ul.replaceChild(li4, li3);

// document.querySelector('#button1').onclick = function(){
//   alert( 'ok' );
// };

// document.querySelector('#button1').addEventListener( "click", function(){alert( 'ok' )} );
button1.addEventListener( "click", function(){alert( 'ok' )} );

document.querySelector('li:nth-child(3)').style.color = 'orange';

const li5 = document.createElement('li');
ul.appendChild(li5).textContent = 'TEST combie ADD + TEXT';

document.querySelector('#button1').style.background = 'blue'

button1.addEventListener("mouseover", function(){
  this.style.color = "white" });

button1.addEventListener("mouseover", function(){
  this.style.background = "black" });

