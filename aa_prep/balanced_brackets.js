function balancedParens(string){
  let parens = '[]{}()',
      stack = [],
      i,  // index of string
      c;  // character in string

  for (i = 0; i < string.length ; i++) {
    let position = parens.indexOf(string[i]);
    let type;

    if (position === -1) {
      continue;
    }

    // type = position % 2 ? 'closed' : 'open';

    if (position % 2 === 0) {
      stack.push(position + 1); // push next expected brace position
    } else {
      if (stack.length === 0 || stack.pop() !== position) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log('{}([]) true', balancedParens('{}([])'));
console.log('{{ false', balancedParens('{{'));
console.log('[(] false', balancedParens('[(])'));
console.log('{}([]) true', balancedParens('{}([])'));