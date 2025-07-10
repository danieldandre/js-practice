//----While-loop----//
function useWhile(){
    let i = 0;
    text = "";

    while (i <= 10){
        text = "The number is " + i;
        i++;
        console.log(text);
    }
}
//useWhile()


//----For-of-----//
function useForOf(){
    const colors = ['blue', 'orange', 'red', 'green'];

    for(const color of colors){
        console.log(color);
    }
}
//useForOf()


//----For-in----//
function useForIn(){
    const person = {
        name: "John",
        age: 24,
        city: "Lisbon"
    };

    for (const property in person){
        console.log(`${property}: ${person[property]}`);
    }
}


//--------Exercise 2-----------//

function ex2() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
    for(const prop of arr){
        if (prop % 2 == 0){
            console.log(prop);
        }
    }
}
//ex2()

//--------Exercise 3 and 4-----------//
function ex3(min, max) {
    const size = RandomNumber(min, max);
    let arr =[];
    let maxNum = 0;
    let position = 0;

    function RandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    for (let i = 0; i < size; i++){
        arr.push(RandomNumber(min,max));
    }
    console.log("Array generated:", arr)

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxNum){
            maxNum = arr[i];
            position = i;
        }
    }
    console.log("The highest number is ", maxNum, "in the position", position)
}

//ex3(1, 20)

//--------Exercise 5-----------//
function ex5 (){
    const obj = {
        name: "Jane",
        age: 25
    };

    for (prop in obj){
        console.log(`${prop}: ${obj[prop]}`);
    }
}

//ex5()
