//Testing how to obtain every second elemtn in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let second = []

function SecNumArr (array){
    for( let i = 1; i < array.length; i+=2){
        //console.log(array[i])
    }
}

test = SecNumArr(numbers)


//---Array pop()---//
const fruit = ["orange", "pear", "apple", "kiwi", "banana", "mango", "peach", "pineapple"]
//const usePop = fruit.pop()

//console.log(usePop)  // This method removes the last element of an array and returns the same element as a string, even if it's a const variable
//console.log(fruit)   // 


//---Array push()---/

//const usePush = fruit.push("tomato", "Lime") // This method adds more elements to the original array at the end and returns the new lenght of the array 
//console.log(fruit)
//console.log(usePush)


//---Array shift()---//

//const useShift = fruit.shift()
//console.log(useShift)        //this method removes the first element of an array and returns that same element
//console.log(fruit)           //the array in which the shift method was applied loses it's first element, even though it's a const variable.


//---Array unshift()---//

// const useUnshift = fruit.unshift("blueberries", "pomgranade")
// console.log(fruit)
// console.log(useUnshift)  // This method adds more elements to the original array at the beginning and returns the new lenght of the array 


// How to use .map and the object Math cause why not, it's pretty cool
// The map methods tranforms every array element and returns an entire new array and it's preffered to use over a loop as it's much simpler

//---Squared Root of all Numbers in an array---//
const numbers2 = [4, 9, 16, 25, 36, 49, 64, 81];
const useOfMap = numbers2.map(Math.sqrt)

//console.log(useOfMap)


//---Multiply each number of an array by 10---//
const mapX10 = numbers2.map(MultiplyBy10)

function MultiplyBy10 (numbers){
    return numbers * 10;
}
//console.log(mapX10)


//---Use of Array filter()---//
const ages = [5, 8, 10, 17, 18, 22, 29];
const testAge = ages.filter(CheckAge);

function CheckAge (age){
    return age >= 18;
}
//console.log(testAge)


//---Use of Array find()---//
const useFind = ages.find(CheckAge)  //this method returns the first element which meets the conditions and doesn't change the array
//console.log(useFind)


//---Use of Includes()----//
const useIncludes = ages.includes(18) // This method checks if the element is part of the array or not, True or False
//console.log(useIncludes)
//console.log(ages)


//------Checkerboard-----//

function printBoard (size){
  let board = new Array(size)

  for (let i = 0; i < size; i++){
    board[i] = new Array(8);
  }

  for (let row = 0; row < size; row++){
    for (let col = 0; col < size; col++){
      board[row][col] = (row + col) % 2;
    }
  }

  board.forEach(row => {
    console.log(row.join(' '));
  })

  return board;
}

printBoard(8);