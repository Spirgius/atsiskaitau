
let nav = document.querySelector('nav') as HTMLElement;
nav.innerHTML = `<nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                        Home
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                            About
                            </a>
                            <a class="navbar-item">
                            Jobs
                            </a>
                            <a class="navbar-item">
                            Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                            Report an issue
                            </a>
                        </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary nav-signup">
                            <strong>Sign up</strong>
                            </a>
                            <a class="button is-light nav-login">
                            Log in
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </nav>`;


document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

let mainWrapper = document.querySelector('#main-wrapper') as HTMLElement;
let registrationWrapper = document.querySelector('.registration-wrapper') as HTMLElement;
let registrationForm = document.querySelector('#registration-form') as HTMLElement;
let registrationInputs = document.querySelectorAll('.required') as NodeListOf<HTMLElement>;

let loginWrapper = document.querySelector('.login-wrapper') as HTMLElement;
let loginForm = document.querySelector('#login-form') as HTMLElement;
let loginInputs = document.querySelectorAll('.login-input') as NodeListOf<HTMLElement>;

let errorMessage = document.createElement('div') as HTMLElement;
errorMessage.classList.add('notification', 'is-danger');
errorMessage.innerText = `bybas`
mainWrapper.prepend(errorMessage);

interface RegistrationInterface {
    name:string,
    passwordOne:string,
    passwordTwo:string
};

interface LoginInterface {
    name:string,
    password:string
};

registrationForm.addEventListener('submit', e => {
e.preventDefault()
sendRegistration();

})

function sendRegistration() {
    const user:RegistrationInterface = {
        name: registrationInputs[0].value,
        passwordOne: registrationInputs[1].value,
        passwordTwo: registrationInputs[2].value
    }

    const options = {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(user)
    }

    fetch("http://167.99.138.67:1111/createaccount", options)
        .then(res => res.json())
        .then(data => {
            validation(data);
        })
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    sendLogin();
})


function sendLogin() {
    const user:LoginInterface = {
        name: loginInputs[0].value,
        password: loginInputs[1].value
    }

    const options = {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(user)
    }

    fetch("http://167.99.138.67:1111/login", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}






function validation (answer: { success: boolean; message: any; }) {
    if (answer.success == false) {
        errorMessage.textContent = `${answer.message}`;
    }
}