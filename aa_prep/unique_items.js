

// unique = unique_items(ary);
// unique => [7,16];

const count_hash = array => {
  let hash = {};
  for(let i = 0; i < array.length; i ++ ) {
    if (hash[array[i]]) {
      hash[array[i]]++;
    } else {
      hash[array[i]] = 1;
    }
  }
  return hash;
}

const unique_items = array => {
  let hash = count_hash(array);
  let result = [];

  for (let key in hash) {
    if (hash[key] === 1) result.push(parseInt(key));
  }
  return result;
}
ary = [1,5,5,7,16,8,1,8];
console.log(unique_items(ary));