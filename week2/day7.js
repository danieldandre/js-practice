//-----EX 1-----//

function mergeSort(arr) {
    const mid = (Math.floor(arr.length / 2));
    let leftHalf = arr.slice(0, mid);
    let rightHalf = arr.slice(mid);
    let sortedArr = [];

    if (arr.length <= 1) return arr;

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    
    return merge(sortedLeft, sortedRight);

    function merge(sortedLeft, sortedRight) {
        while (sortedLeft.length && sortedRight.length) {
            if (sortedLeft[0] < sortedRight[0]) {
                sortedArr.push(sortedLeft.shift())
            } else {
                sortedArr.push(sortedRight.shift())
            }
        }
        sortedArr.push(...sortedLeft, ...sortedRight);

        return sortedArr;
    }
}
//console.log(mergeSort([12, 8, 9, 3, 11, 5, 4]));
