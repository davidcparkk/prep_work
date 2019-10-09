// const stringCompression = str => {
//   if (!str) return false;

//   let result = "";
//   for(let i = 0; i < str.length; i++){
//     let char = str.charAt(i);
//     let start = i;
//     while(i+1 < str.length && char === str.charAt(i+1)){
//       i++;
//     }

//     result += char + (i - start + 1);
//   }

//   return result.length < str.length ? result : str;
// }

const stringCompression2 = str => {
  let output = "";
  let count = 0;
  for (let i  = 0; i < str.length; i++){
    count++;
    if (str[i] != str[i+1]){
      output += str[i] + count;
      count = 0;
    }
  }
  return output;
}


const removeDup = (str, n, k) => {
  let stack = [];
  for(let i = 0; i < n; i++){
    let char = str.charAt(i);
    if(stack.length > 0 && freq(stack[stack.length -1]) === k){
      let curr = stack[stack.length - 1];
      while(stack.length > 0 && stack[stack.length-1] === curr){
        stack.pop();
      }
    }

    if(stack.length > 0 && stack[stack.length - 1] === char){
      
    }
  }
}

let res = stringCompression2('aaabccccca');
console.log(res);