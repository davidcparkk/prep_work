Array.prototype.mergeSort = function(func) {
  if (this.length <= 1) return this;

  if (!func) func = (left, right) => {
    return left < right ? -1 : left > right ? 1 : 0;
  }

  const mid = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, mid).mergeSort(func);
  const sortedRight = this.slice(mid).mergeSort(func);

  return sortedLeft.merge(sortedRight, func);
}

Array.prototype.merge = function (arr, func) {
  let merged = [];

  while (this.length && arr.length) {
    switch(func(this[0], arr[0])) {
      case -1:
        merged.push(this.shift());
        break;
      case 0:
        merged.push(this.shift());
        break;
      case 1:
        merged.push(arr.shift());
        break;      
    }
  }
  merged = merged.concat(this);
  merged = merged.concat(arr);

  return merged;
}

console.log([1,65,2,4,6,3,3].mergeSort());

// time complexity (nlogn), need to iterate through entire input (n) and it is halved each time (O(n))
// space ((n))