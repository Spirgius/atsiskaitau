"use strict";
var nav = document.querySelector('nav');
nav.innerHTML = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n                    <div class=\"navbar-brand\">\n                    <a class=\"navbar-item\" href=\"https://bulma.io\">\n                        <img src=\"https://bulma.io/images/bulma-logo.png\" width=\"112\" height=\"28\">\n                    </a>\n\n                    <a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasicExample\">\n                        <span aria-hidden=\"true\"></span>\n                        <span aria-hidden=\"true\"></span>\n                        <span aria-hidden=\"true\"></span>\n                    </a>\n                    </div>\n\n                    <div id=\"navbarBasicExample\" class=\"navbar-menu\">\n                    <div class=\"navbar-start\">\n                        <a class=\"navbar-item\">\n                        Home\n                        </a>\n\n                        <div class=\"navbar-item has-dropdown is-hoverable\">\n                        <a class=\"navbar-link\">\n                            More\n                        </a>\n\n                        <div class=\"navbar-dropdown\">\n                            <a class=\"navbar-item\">\n                            About\n                            </a>\n                            <a class=\"navbar-item\">\n                            Jobs\n                            </a>\n                            <a class=\"navbar-item\">\n                            Contact\n                            </a>\n                            <hr class=\"navbar-divider\">\n                            <a class=\"navbar-item\">\n                            Report an issue\n                            </a>\n                        </div>\n                        </div>\n                    </div>\n\n                    <div class=\"navbar-end\">\n                        <div class=\"navbar-item\">\n                        <div class=\"buttons\">\n                            <a class=\"button is-primary nav-signup\">\n                            <strong>Sign up</strong>\n                            </a>\n                            <a class=\"button is-light nav-login\">\n                            Log in\n                            </a>\n                        </div>\n                        </div>\n                    </div>\n                    </div>\n                </nav>";
document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
        el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            var target = el.dataset.target;
            var $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});
var mainWrapper = document.querySelector('#main-wrapper');
var registrationWrapper = document.querySelector('.registration-wrapper');
var registrationForm = document.querySelector('#registration-form');
var registrationInputs = document.querySelectorAll('.required');
var loginWrapper = document.querySelector('.login-wrapper');
var loginForm = document.querySelector('#login-form');
var loginInputs = document.querySelectorAll('.login-input');
var errorMessage = document.createElement('div');
errorMessage.classList.add('notification', 'is-danger');
errorMessage.innerText = "bybas";
mainWrapper.prepend(errorMessage);
;
;
registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    sendRegistration();
});
function sendRegistration() {
    var user = {
        name: registrationInputs[0].value,
        passwordOne: registrationInputs[1].value,
        passwordTwo: registrationInputs[2].value
    };
    var options = {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(user)
    };
    fetch("http://167.99.138.67:1111/createaccount", options)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        validation(data);
    });
}
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    sendLogin();
});
function sendLogin() {
    var user = {
        name: loginInputs[0].value,
        password: loginInputs[1].value
    };
    var options = {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(user)
    };
    fetch("http://167.99.138.67:1111/login", options)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
    });
}
function validation(answer) {
    if (answer.success == false) {
        errorMessage.textContent = "" + answer.message;
    }
}
