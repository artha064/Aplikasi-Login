/** @module Login-Script */
/**
* Creating a temporary variable to store the login form.
* @constant {HTMLelement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Creating a variable to store the input email element.
* @constant {HTMLelement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Creating a variable to store the input password element.
* @constant {HTMLelement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Creating a variable to store user's email temporarily.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Creating a variable to store user's password temporarily.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment : Adding an on-submit event listener to form's button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Creating a variable to store email thrown
  * @constant {string}
  */
  const email = inputEmailElement.value;

  /**
  * Creating a variable to store email thrown
  * @constant {string}
  */
  const password = inputPasswordElement.value;

  /* Comment : Check if the user submitting the correct email and password */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Comment : If the submitted email and password are correct then redirect the user to the homepage */
    goToHome();
    
  } else {

    /* Comment : If the submitted email and password are wrong then display a pop-up to the user*/
    showPopUp();
  }
});
