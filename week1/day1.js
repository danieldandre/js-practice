var x = 2 // x is 2
var x = 3 // now x is 3

// const y = 2 
// const y = 3 -> same can not be done with const or let as they don't allow redeclaration in the same scope


var x = 1
x = 2 

let a = 1
a = 2      // var and let can be reassigned

// const b = 1
// b = 2       //TypeError: however const are constant binding variables which means they can not be reassigned

//---------------------------------------------------------------------------------//
// this is regarding scopes

function testVar() {
  if (true) {
    var x = 1;
  }
  console.log(x); // x is still accessible here as var variables are function-scoped, meaning they are accessible anywhere inside a function
}


function testLetConst() {
  if (true) {
    let  y = 2;
    const z = 3;
  }
  // console.log(y); // ReferenceError a/b is not defined | both y and z are not accessible here 
  console.log(z); // however the same cannot be said about let or const as they are block-scoped which means that they are only accessible inside the current block of code like {}, [], loops and so on...
}


// In resume:
// - Function Scopes are variables declared with var or function parameteers and they are only accessible inside the the entire function.
// - Block Scopes are very restricted variables declared with let or const accessible only in the current {...} block, they can't be accessed outside this blocks.
// - Global Scopes are variables declared outside any function or block being accessible throughout the entire program.


const varTheory = [
    'never start naming variables with anything else but letters, _ or $',
    'other characters can be used but only after the first character being a letter, _ or $',
    'JS is case sensitive so thisVar and THISVar are different',
    'there can be no spcaes or punctuiation on variable names',
    'always be descriptive but not over descriptive naming variables such as "num" to refer as a number, user_id  for the user identification number, etc...',
    'avoid using single letter names for variables'
] 

//------------------------------CONCATNATION---------------------------------------------//

//concatnation is the merge os string. The method concat always returns a new string

let string1 = "This is"
let string2 = "cool"

let result = string1.concat(" ", string2) // (string1, string2, string3, stringX....)

//console.log(result)

//-----------------------------STRING INDEXING-------------------------------//

let words = "peaches are great" 
//console.log(words[0])            // we can also return the character in a certain position of a string

words.charAt(0) // method ChartAt doesn't throw an exception if you call for a string out of bons
words.charAt(10) // returns ""

words.slice(0, 6) // method slice : literaly slices a string between the indexes that we want too this will slice betwee index 0 and 6 which will return "peaches" 
words.slice(7, 17) // "are greate"
words.slice(-9) // "are great" negative indices are used to start counting from the end

let animals = ["wolf", "dog", "fox", "cat", "panther"]
animals.slice(2) // "fox" same can be used with arrays
animals.slice(-1) // "panther"
animals.slice(2, -1) // "fox, panther"

let test = words.indexOf("are") // method indexOf returns the position of the first occurence of a value in a string
//console.log(test)

const dog = "dogs"

for(const letter of dog){  // simple for loop where each character is printed
  //console.log(letter)      // if nthis was an array it would return each member of the array
}

for (let i = 0; i < dog.length; i++){ // The console.log will return the current indexed character of each loop [i]. 
  //console.log(dog[i]);                // The cycle repeats while the lenght of the variable dog is smaller than the number of the index i.
}

//--------------TEMPLATE LITERALS---------------------------------//
//Template literals are literals delimited with ` which allow multi-line strings, string interpolation with expressions

//example without literals:
const names = "Dog"
const age = 12
const phrase = "The " + names + " is " + age + " old and he is cool"
console.log(phrase)

//with literals:
const phrase1 = `The ${names} is ${age} and he is cool` // it's simply better lol

