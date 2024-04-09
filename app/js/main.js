



document.querySelector('#submit_person').addEventListener('submit', function(event){
  event.preventDefault();
  // console.log('submit')
  const formData = new FormData(this);
  const formObject = {};

  formData.forEach(function(value, key){
    // console.log(value, key)
    if (!formObject[key]) {
      formObject[key] = value;
    }
    else {
      formObject[key] = `${formObject[key]}, ${value}`
    }
})
    
console.log(formObject)

  validate(formObject)
})  

  function validate(object){
    
    if (object.password.length < 8){
      document.querySelector('.passError').style.display = 'block';
      document.querySelector('#submit_person').style.height = '400px';
    }
  };




