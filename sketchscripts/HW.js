const hello = 'hello world';
let output = '';
const vowels = 'aeiou';
let counter = 0;

for (let i = 0; i < hello.length; i++){
    if (vowels.includes(hello[i])){
        counter += 1;

    //output += hello[i];
    //console.log(hello[i]); 
    }
}

console.log(counter);