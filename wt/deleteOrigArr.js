const removeLetters = (arr) => {
  let num = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9};
  for(let i = 0; i < arr.length; i++){
    let char = arr[i];
    if(!num[char]){
      arr.splice(i,1);
    }
  }
  return arr;
}

let arr = ['a',1,2,3,'b'];
console.log(removeLetters(arr));