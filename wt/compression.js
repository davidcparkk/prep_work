function compression(word, K) {
    for (let i = 0; i &lt; word.length ; i++){
    let char = word[i];
    if(checkRepeat(i, K)){
      word = word.slice(0,i).concat(word.slice(i+K));
    }
    }
    return word;

    function checkRepeat(start, length){
      // let length = start - end;
      let substr = word.slice(start, start+length);
      let count = {};
      let substrStart = substr[0];
      count[substrStart] = 1;
      for(let j = 1; j &lt; length; j++){
        let char = substr[j];
        
        count[char]++;
      }
      if (count[substrStart] === length){
        return true;
      } else {
        return false;
      }
    }
  }