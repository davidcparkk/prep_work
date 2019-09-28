var API_URL = 'https://private-7e7394-udacityfrontendtest.apiary-mock.com';
var API_PATH_SIGNUP = '/signup';
var API_PATH_SIGNIN = '/signin';

let el1 = document.getElementById("sign-up");
if(el1) {
  el1.addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    validateForm(this);
  }, false );
};
let el2 = document.getElementById("sign-in");
if(el2){
  el2.addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    validateForm(this);
  }, false );
}

function post(url, data) {
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: JSON.parse(xhr.response)
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: JSON.parse(xhr.response)
      });
    };
    xhr.send(JSON.stringify(data));
  });
}

function submitForm(path) {
  loading();
  post(API_URL + path, {
    username: document.querySelector('#username').value,
    password: document.querySelector('#password').value
  }, function(res) {
    console.log(res);
  }).then(function(datums){
    console.log(datums);
    removeLoading();
    const message = document.querySelector('#message');
    message.classList.add('messageDisplay');
    message.innerText = `${datums.statusText.message}`;
    // innerText not HTML
    // name/for labelinput
    // collects input
      // input.addEventListener('click', function())
    // webpack, keeps functions from being global
    // document.createElement, findByID, appendChild

    // message, I can show you my react. i do have a lot of exp with react and I this project would be a great fit for it, would be happy to do it again if you are intersrted in seeing.

  }).catch(function(err){
    console.log(err);
    removeLoading();
    const message = document.querySelector('#message');
    message.classList.add('messageDisplay');
    message.innerText = `${err.statusText.message}`;;
  });
}

function validateForm(action){
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const email = document.querySelector('#email').value;

  if(username === ""){
    const error = document.createElement('span');
    var node = document.createTextNode('Username must be filled out.');
    error.appendChild(node);
    const element = document.getElementById('username');
    element.parentNode.insertBefore(error, element.nextSibling);
    return false;
    // alert("Username must be filled out. Try again!")
    // return false;
  }

  if(email === ""){
    const error = document.createElement('span');
    var node = document.createTextNode('Email must be filled out.');
    error.appendChild(node);
    const element = document.getElementById('email');
    element.parentNode.insertBefore(error, element.nextSibling);
    return false;
    // alert("Email must be filled out. Try again!")
    // return false;
  }

  if(password === "" || password.length < 6){
    const error = document.createElement('span');
    var node = document.createTextNode('Password must be filled out and be at least 6 characters long.');
    error.appendChild(node);
    const element = document.getElementById('password');
    element.parentNode.insertBefore(error, element.nextSibling);
    return false;
    // alert("Password must be filled out and at least 6 characters long");
    // return false;
  }
  
  if(action.id === "sign-up"){
    submitForm(API_PATH_SIGNUP);
  } else if (action.id === "sign-in"){
    submitForm(API_PATH_SIGNIN);
  }
}

function loading(){
  document.getElementById("content").style.visibility = "hidden";
  document.getElementById("loading").style.display = "block";
}

function removeLoading(){
  document.getElementById("content").style.display = "flex";
  document.getElementById("content").style.visibility = "visible";
  document.getElementById("loading").style.display = "none";
}

// change class to input invalid, errors
// one label id = label, id = label errors

// semantic HTML, don't want any divs, sections, tables, form, button. Want HTMl as semantic. make page simpler to look at by just, prset styles

// page grays out and loading spinner, submission sussccessfull
// click here to view details, show JSON data
// redirect to another html

// DOM manipulation is synchronous, loadingBar visilibyt: true, make this APi request.then
// or axios/fetch

// get webpack set up
// webpack to bundle toegether
