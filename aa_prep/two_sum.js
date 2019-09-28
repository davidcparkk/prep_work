Array.prototype.twoSum = function() {
  const pairs = [];
  for ( let i = 0 ; i < this.length - 1; i ++) {
    for ( let j = i+1 ; j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          pairs.push([i,j]);
        }
    }
  }
  return pairs;
}



console.log([-3, 1,-1,4,-4,3].twoSum());