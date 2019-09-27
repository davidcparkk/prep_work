var API_URL = 'https://private-7e7394-udacityfrontendtest.apiary-mock.com'
var API_PATH_SIGNUP = '/signup'

function post(url, data, cb) {
  var xhr = new XMLHttpRequest()
  
  xhr.open('POST', url)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(JSON.stringify(data));
  xhr.onload = function() {
    cb(JSON.parse(this.responseText))
  }
}

function submitForm() {
  post(API_URL+API_PATH_SIGNUP, {
    username: document.querySelector('#username').value,
    password: document.querySelector('#password').value
  }, function(res) {
    console.log(res)
  })
}

function validateForm(){
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

  submitForm();
  loading();
}

function loading(){
  document.getElementById("content").style.visibility = "hidden";
  document.getElementById("loading").style.display = "block";
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