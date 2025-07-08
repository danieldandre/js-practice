let arr = [1, 2, 2];
    
function squareSum(numbersArray){
    let powerSum = 0;
    numbersArray.forEach(element => {
       // powerSum = powerSum + element**2;
        powerSum += element**2;
    });
    return powerSum;
}

x = squareSum(arr);
console.log(x)