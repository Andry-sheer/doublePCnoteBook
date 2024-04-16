let pay = 0;
const container = document.querySelector('.onlineStore__container');
const containerOfBuy = document.querySelector('.containerOfBuy');
const contImg = document.querySelector('.onlineStore__img-sliderContainer');
const img1 = document.querySelector('.onlineStore__img1');
const img2 = document.querySelector('.onlineStore__img2');
const dottedOne = document.querySelector('.onlineStore__dotted-1');
const dottedTwo = document.querySelector('.onlineStore__dotted-2');
const price = document.querySelector('.onlineStore__price');
const form = document.querySelector('.onlineStore__form');
const formTitle = document.querySelector('.onlineStore__form-titlePayment');
const buy = document.querySelector('.onlineStore__buy');
const guds = document.querySelector('.onlineStore__guds');
guds.textContent = 0;
const removeGuds = document.querySelector('.onlineStore__remGuds');
const addGuds = document.querySelector('.onlineStore__addGuds');
const submitButton = document.querySelector('.onlineStore__submitButton');


const errorMessage = document.querySelector('.onlineStore__errorContainer');
const errorDiscription = document.querySelector('.onlineStore__errorDiscription');

const firstName = document.querySelector('#first_nameID');
const lastName = document.querySelector('#last_nameID');
const patronymic = document.querySelector('#patronymicID');
const nova = document.querySelector('#novaID');

submitButton.addEventListener('click', pageOfGuds);

function pageOfGuds(event){
  event.preventDefault();
  container.style.display = 'none';
  containerOfBuy.style.display = 'flex';
  // errorMessage.style.display = 'flex';
}









//?========= SHOW FORMS on click Button ===========================================
buy.addEventListener('click', showForm);
function showForm(){
  form.style.display = 'flex';
  formTitle.style.display = 'flex';
  buy.style.display = 'none';
  submitButton.style.justifyContent = 'center';
  submitButton.textContent = 'Pay $' + pay;
}

//?====== REMOVE GUDS BUTTON =======================================
removeGuds.addEventListener('click', gudsMinus);
function gudsMinus(e){
  e.preventDefault();
  guds.textContent--;
  submitButton.textContent = `Pay $${pay -= 9.99}`;
  if (guds.textContent <= 0) {
    submitButton.textContent = `Pay $${pay = 0}`;
  }

  if (guds.textContent <= 0) {
    removeGuds.disabled = true;
  }
}

//?====== ADD GUDS BUTTON =======================================
addGuds.addEventListener('click', gudsAdd);
function gudsAdd(e){
  e.preventDefault();
  guds.textContent++;
  submitButton.textContent = `Pay $${pay += 9.99}`; 

  if (guds.textContent >= 1) {
  removeGuds.disabled = false;
  }
}

//?===== ADD SLIDER + DOTTED SLIDER ==============================
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



