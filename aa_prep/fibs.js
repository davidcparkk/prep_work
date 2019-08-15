const fibonacciIter = num => {
  if (num === 0) return [];
  if (num === 1) return [0];

  let fibs = [0,1];
  while (fibs.length < num) {
    fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
  }

  return fibs;

}

const fibonacciRec = num => {
  if (num === 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0,1];

  let prev_fibs = fibonacciRec(num-1); // [0,1]
  prev_fibs.push(prev_fibs[prev_fibs.length-1] + prev_fibs[prev_fibs.length-2])

  return prev_fibs;
  
}

console.log(fibonacciIter(5));
console.log(fibonacciRec(5));