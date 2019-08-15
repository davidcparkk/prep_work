Array.prototype.quickSort = function(func) {
  if (this.length <= 1) return this;

  if (!func) {
    func = (x,y) => {
      if (x < y) return -1;
      return 1;
    }
  }

  const pivot = this[0];
  let left = this.slice(1).filter( el => func(el, pivot) === -1);
  let right = this.slice(1).filter ( el => func(el, pivot) !== -1);
  left = left.quickSort(func);
  right = right.quickSort(func);

  return left.concat([pivot]).concat(right);

}

console.log([1,65,2,4,6,3,3].quickSort())

// Best O(nlog(n)) worst O(n^2)
// Space requirement of O(log(n)), extra space are log (n) stack frames