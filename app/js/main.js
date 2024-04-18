let pay = 0;
let pay_2 = 0;
const container = document.querySelector('.onlineStore__container');
const containerOrders = document.querySelector('.orders__container');
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

const spanContainer = document.querySelector('.orders__span-container');

const errorMessage = document.querySelector('.onlineStore__errorContainer');
const errorDiscription = document.querySelector('.onlineStore__errorDiscription');

const firstName = document.querySelector('#first_nameID');
const lastName = document.querySelector('#last_nameID');
const patronymic = document.querySelector('#patronymicID');
const city = document.querySelector('#citySet');
const nova = document.querySelector('#novaID');

const payMethod = document.querySelector('.orders__desk-price');
const cash = document.querySelector('#cashID');
const card = document.querySelector('#cardID');

const orderItem = document.querySelector('.orders__par-label');
orderItem.textContent = '(Items)';

const orderNum = document.querySelector('.orders__number');
orderNum.textContent = 0

const orderPrice = document.querySelector('.orders__price');
orderPrice.textContent = '$0'


// submitButton.addEventListener('submit', pageOfGuds);

// function pageOfGuds(event){
//   event.preventDefault();
//   container.style.display = 'none';
//   containerOrders.style.display = 'block';

//   fieldName.textContent = 'Name: ' + firstName.value + ',';
//   fieldLastName.textContent = 'Last Name: ' + lastName.value + ',';
//   fieldPatronymic.textContent = 'Patronymic: ' + patronymic.value + ',';
//   fieldCity.textContent = 'City: ' + city.value + ',';
//   fieldNova.textContent = 'NP №: ' + nova.value + '.';
// }

// form.addEventListener('submit', pageOfGuds);

// function pageOfGuds(event){
//   event.preventDefault();
//   container.style.display = 'none';
//   containerOrders.style.display = 'block';

//   spanContainer.textContent = firstName.value + ', ' + lastName.value + ', ' + patronymic.value + ', ' + city.value + ', ' + nova.value + '.';
// }






form.addEventListener('submit', pageOfGuds);

function pageOfGuds(event){
  event.preventDefault();
  container.style.display = 'none';
  containerOrders.style.display = 'block';

  
}


//?========= PAY METHOD ===========================================
cash.addEventListener('click', selectCash);
function selectCash(){
  payMethod.textContent = 'Cash on delivery';
  payMethod.style.color = '#2b8d78';
}

card.addEventListener('click', selectCard);
function selectCard(){
  payMethod.textContent = 'Card payment'
  payMethod.style.color = '#2b8d78';
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
  orderNum.textContent--;
  submitButton.textContent = `Pay $${pay -= 9.99}`;
  orderPrice.textContent = `$${pay_2 -= 9.99}`;
  if (guds.textContent <= 0) {
    submitButton.textContent = `Pay $${pay = 0}`;
    orderPrice.textContent = `$${pay_2 = 0}`;
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
  orderNum.textContent++;
  submitButton.textContent = `Pay $${pay += 9.99}`; 
  orderPrice.textContent = `$${pay_2 += 9.99}`;

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



