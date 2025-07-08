let test = [];

function findAverage(array){
    let sum = 0;

    if (array.length === 0){
        return 0;
    }
    else{        
        array.forEach(element => {
            sum += element;
        })
        return sum / array.length;
    }
}

let output = findAverage(test);
console.log(output);