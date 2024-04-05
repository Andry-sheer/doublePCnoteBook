const login = document.querySelector('.bodyMain__button');
const back = document.querySelector('.profile__buttonBack');
const spContainer = document.querySelector('.spinnerContainer');
const spin = document.querySelector('.spinner');
const bodyContainer = document.querySelector('.bodyMain__container');
const email = document.querySelector('.bodyMain__email');
const password = document.querySelector('.bodyMain__password');


function moveToProfile(){
  bodyContainer.style.display = 'none'
  spContainer.style.display = 'flex';
  spin.style.display = 'block';

  setTimeout(() => {
    location.href = 'myProfile.html';
  }, 4000);
};

function moveToLogin(){
  spContainer.style.display = 'flex';
  spin.style.display = 'block';

  setTimeout(() => {
    history.go(-1);
  }, 4000);
  
};