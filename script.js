var API_URL = 'https://private-7e7394-udacityfrontendtest.apiary-mock.com';
var API_PATH_SIGNUP = '/signup';
var API_PATH_SIGNIN = '/signin';

function post(url, data, cb) {
  return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader("Content-Type", "application/json")
    // xhr.onData
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.response
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.response
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
    message.innerHTML = "Successfully signed in!";
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
    message.innerHTML = "Sorry, please try again";
  });
}

function validateForm(action){
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const email = document.querySelector('#email').value;

  if(username === ""){
    alert("Username must be filled out. Try again!")
    return false;
  }

  if(email === ""){
    alert("Email must be filled out. Try again!")
    return false;
  }

  if(password === "" || password.length < 6){
    alert("Password must be filled out and be at least 6 characters long");
    return false;
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
