// ITERATIVE
const getSubstrings = str => {
  let result = [];

  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j < str.length + 1; j++){
      result.push(str.slice(i,j));
    }
  }

  return result;
}

let str = 'abc';
console.log(getSubstrings(str));

// RECURSIVE
function subsets(arr) {
  if (!arr.length) return [[]];
  const last = arr[arr.length - 1];
  const subs = subsets(arr.slice(0, arr.length - 1));
  return subs.concat(subs.map( (el) => {
    let newArr = el.slice(0)
    newArr.push(last);
    return newArr;
  }));
}
