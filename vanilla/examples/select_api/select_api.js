window.onload = function(){
  let studentList = {
    1: {id: 1, name: "Student 1"},
    2: {id: 2, name: "Student 2"},
    3: {id: 3, name: "Student 3"},
    4: {id: 4, name: "Student 4"},
    5: {id: 5, name: "Student 5"},
    6: {id: 6, name: "Student 6"},
    7: {id: 7, name: "Student 7"},
    8: {id: 8, name: "Student 8"},
    9: {id: 9, name: "Student 9"},
    10: {id: 10, name: "Student 10"}
  };
  
  let dropdown = document.getElementById('dropdown');

  const api_request = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {mode: 'cors'});
    return response.json();
  }

  dropdown.addEventListener('change', (e) => {
    api_request(e.target.value)
      .then(response => {
        console.log("success",response)
      })
  });
  
  for(let key in studentList){
    let student = studentList[key];
    let option = document.createElement('option');
    option.value = student.id;
    option.innerHTML = student.name;
    option.class = "option";
    dropdown.appendChild(option);
  }

  // get class
  const changeColor = () => {
    let dom = document.querySelectorAll("*");
    let arr = Array.from(dom);
    for(let i = 0; i< arr.length; i++){
      let element = arr[i];
      if (element.class === 'option'){
        element.style.backgroundColor = 'green'
      }
    }
  }
  changeColor();
}

