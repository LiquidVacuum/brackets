module.exports = function check(str, bracketsConfig) {
  let bracketPairsCollection = [];
  for (const pair of bracketsConfig) {
    bracketPairsCollection.push(pair.join(''));
  }
  
  let string = str;
  let flag = true;
  
  while (flag) {
    if (string.length == 0) return true; 
    
    flag = false;
    
    for (const pair of bracketPairsCollection) { 
      let pos = string.indexOf(pair);
      if (pos < 0) continue;
      flag = true;
      string = string.slice(0, pos) + string.slice(pos + 2);
    }
  }
  return false;
}
