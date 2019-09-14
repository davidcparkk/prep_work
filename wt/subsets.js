function strSubsets(s) {
  let result = [];
  let arr = s.split('');
  
  // for (let i = 0; i &lt; s.length ; i++){
  // for ( let j = i + 1; j &lt; s.length + 1; j++){
  // result.push(s.slice(i,j));
  // }
  // }
  // result = result.filter( el => el != "");
  // return result.sort();
  function subsets(arr){
    if(!arr.length) return [[]];
    const last = arr[arr.length - 1];
    const subs = subsets(arr.slice(0,arr.length - 1));
    return subs.concat(subs.map( (el) => {
    let newArr = el.slice(0);
    newArr.push(last);
    return newArr;
    }));
  }
  let subs = subsets(arr);
  
  for (let i = 0; i &lt; subs.length; i ++){
    result.push(subs[i].join(''));
  }
  result = result.filter( el => el != "");
  return result.sort();
  
}