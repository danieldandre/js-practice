class MaxHeap {
    constructor(array = []) {
        this.data = array;
    }

    push(value) {
        this.data.push(value);
        this._siftUp(this.data.length - 1);
    }

    peek() {
        const maxValue = this.data[0];
        return `Max value is ${maxValue}`;
    }

    pop() {
        const max = this.data[0];
        max.pop();
        this._siftDown(0);
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length == 0;
    }

    replaceTopValue(value) {
        if (this.isEmpty()) {
            this.push(value);
            return;
        }

        this.data[0] = value;
        this._siftDown(0);
    }

    clear() {
        this.data = [];
    }

    toArray() {
        return this.data;
    }

    _siftUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.data[parent] >= this.data[index]) {
                break;
            }

            this._swap(parent, index);
            index = parent;
        }
    }

    _siftDown(index) {
        while (index < this.data.length - 1) {
            const leftChild = 2 * index + 1; 
            const rightChild = 2 * index + 2;
            const largest = index;

            if (this.data[leftChild] > this.data[largest]) {
                largest = leftChild;
            }

            if (this.data[rightChild] > this.data[largest]) {
                largest = rightChild;
            }

            if (largest == index) break;

            this._swap(largest, index);
            index = largest;
        }
    }

    _swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
}

