//------Ex 1.2 ------//

function createArrayIterator(arr) {
    let index = 0;
    return {
        next() {
            if (index < arr.length) {
                return { value: arr[index++], done: false };
            }
            return { done: true };
        }
    };
}
const gen = createArrayIterator([1, 2, 3]);

// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
//------Ex 1.3 ------//

const myIterator = {
    data: [10, 20, 30],
    index: 0,
    next() {
        if (this.index < this.data.length) {
            return { value: this.data[this.index++], done: false }
        }
        return { done: true }
    }
};

// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());


//------Ex 1.4 ------//
function createReverseIterator(arr) {
    let index = arr.length - 1;
    return {
        next() {
            if (index >= 0) {
                return { value: arr[index--], done: false };
            }
            return { done: true };
        }
    }
}

// const test = createReverseIterator([1, 2, 3, 4, 5])
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());

//------Ex 2.1 ------//

function* fibonacciGenerator(limit) { // [1, 1, 2, 3, 5, 8, 13]
    let a = 1;
    let b = 1;

    while (a < limit) {
        yield a;
        [a, b] = [b, a + b];
    }
}

//console.log([...fibonacciGenerator(14)]);

//------Ex 2.2 ------//

function* paginate(pages) {
    for (const page of pages) {
        yield* page;
    }
}

const items = paginate([['a', 'b'], ['c'], ['d', 'e']]);
// console.log([...items]); // ['a', 'b', 'c', 'd', 'e']


//------Ex 2.3 ------//

async function fetchUsers(page) {
    const pages = {
        1: ['alice', 'bob'],
        2: ['carol'],
        3: []
    };

    await new Promise(r => setTimeout(r, 100)); // simulate delay
    return pages[page] || [];
}

async function* getAllUsers() {
    let pageNum = 1
    let page;

    do {
        page = await fetchUsers(pageNum);

        yield* page;
        pageNum++;
    } while (page.length > 0);
}

// for await (const user of getAllUsers()) {
//     console.log(user); // alice, bob, carol
// }


//------Ex 3 ------//
function ShellSort(arr) {
    let size = arr.length;

    for (let gap = Math.floor(size / 2); gap > 0; gap = Math.floor(gap / 2)) {
        console.log(`Gap: ${gap}`);

        for (let i = gap; i < size; i++) {
            let temp = arr[i];  
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        console.log(arr.join(', '));
    }
    return arr;
}

console.log(ShellSort([12, 4, 3, 9, 18, 7, 2, 17, 13, 1, 5, 6]));
