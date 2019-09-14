function sortByPriceAscending(jsonString) {
  let parsed = JSON.parse(jsonString);
  let sorted = parsed.sort((a,b) => {
    if(a.price !== b.price){
      return a.price-b.price;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  return JSON.stringify(sorted);
}

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));