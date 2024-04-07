const login = document.querySelector('.bodyMain__button');
const back = document.querySelector('.profile__buttonBack');
const spContainer = document.querySelector('.spinnerContainer');
const spin = document.querySelector('.spinner');
const bodyContainer = document.querySelector('.bodyMain__container');
const prContainer = document.querySelector('.profile__container');
const email = document.querySelector('.bodyMain__email');
const password = document.querySelector('.bodyMain__password');


function moveToProfile(){
  bodyContainer.style.display = 'none'
  spContainer.style.display = 'flex';
  spin.style.display = 'block';
  setTimeout(() => {
    location.href = 'myProfile.html'
  }, 2000);
  console.log(`e-mail = ${email.value} \npassword = ${password.value}`)
};

function moveToLogin(){
  prContainer.style.display = 'none';
  spContainer.style.display = 'flex';
  spin.style.display = 'block';
  setTimeout(() => {
    history.back()
  }, 2000);
};

console.log(`ScreenUser: \nWidth: ${window.innerWidth}px \nHeight: ${window.innerHeight}px`);