function heapSort(array, debug = false) {
    let n = array.length;

    function siftDown(array, index, currentHeapSize) {
        let largest = index;
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;

        if (leftChild < currentHeapSize && array[leftChild] > array[largest]) {
            largest = leftChild;
        }
        
        if (rightChild < currentHeapSize && array[rightChild] > array[largest]) {
            largest = rightChild;
        }

        if (largest !== index) {
            [array[index], array[largest]] = [array[largest], array[index]];
            siftDown(array, largest, currentHeapSize);
        }
    }
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        siftDown(array, i, n);
        if (debug) {
            console.log(`Heap: [${array.slice(0, n)}], Sorted: []`);
        }
    }

    for (let end = n - 1; end > 0; end--) {
        [array[0], array[end]] = [array[end], array[0]];
        siftDown(array, 0, end);
        if (debug) {
            console.log(`Heap: [${array.slice(0, end)}], Sorted: [${array.slice(end)}]`);
            
        }
    }
    return array
}

console.log(heapSort([9, 22, 7, 8, 15, 25], true));
