function getFormvalue(){
  let form = document.getElementById('form1');
  for (let i  = 0; i < form.length; i ++){
    // let element = form.elements[i];
    if (form.elements[i].value != 'Submit'){
      console.log(form.elements[i].value);
    }
  }
}
