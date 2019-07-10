Array.prototype.bsearch = function(target) {
  if (this.length === 0) return null;
  const mid = Math.floor(this.length / 2);

  if (this[mid] === target) {
    return mid;
  } else if(this[mid] > target) {
    return this.slice(0,mid).bsearch(target);
  } else {
    const result = this.slice(mid + 1, this.length).bsearch(target);
    return result === null ? result : mid + 1 + result;
  }
}

console.log([1,2,4,6,7,8,9,10,22,33,44,55,66].bsearch(44));


// time worst: O(log n)