



// document.querySelector('#submit_person').addEventListener('submit', function(event){
//   event.preventDefault();
//   // console.log('submit')
//   const formData = new FormData(this);
//   const formObject = {};

//   formData.forEach(function(value, key){
//     // console.log(value, key)
//     if (!formObject[key]) {
//       formObject[key] = value;
//     }
//     else {
//       formObject[key] = `${formObject[key]}, ${value}`
//     }
// })
    
// console.log(formObject)

//   validate(formObject)
// })  

//   function validate(object){
    
//     if (object.password.length < 8){
//       document.querySelector('.passError').style.display = 'block';
//       document.querySelector('#submit_person').style.height = '400px';
//     }
//   };
const contImg = document.querySelector('.onlineStore__img-sliderContainer');
const img1 = document.querySelector('.onlineStore__img1');
const img2 = document.querySelector('.onlineStore__img2');
const dottedOne = document.querySelector('.onlineStore__dotted-1');
const dottedTwo = document.querySelector('.onlineStore__dotted-2');
const catalog = document.querySelector('.onlineStore__catalog');
const catalog2 = document.querySelector('.onlineStore__catalog-2');

img1.addEventListener('click', nextSlide);

function nextSlide () {
  setTimeout(() => {
    img1.style.display = 'none',
    img2.style.display = 'block'
  }, 100)
  
  dottedOne.style.background = 'transparent';
  dottedTwo.style.background = '#588077';
}

img2.addEventListener('click', prevSlide);

function prevSlide () {
  setTimeout(()=> {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }, 100);
  
  dottedOne.style.background = '#588077';
  dottedTwo.style.background = 'transparent';
}

catalog.addEventListener('click', fontBolt);

function fontBolt() {
  catalog.style.font
}

catalog2.addEventListener('click', fontSemi);

function fontSemi() {
  catalog.style.font
}