function getCount(str) {
  const vowels = 'aeiou';
  let counter = 0;
  
  for(let i = 0; i < str.length; i++){
    if (vowels.includes(str[i]))
        counter += 1;
  }
  
  return counter;
}

let x = getCount('hello world');
console.log(x);