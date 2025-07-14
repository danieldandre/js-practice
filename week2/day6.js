//-------Ex 1 -----//

function factorial(num) {
    let result = 0;

    if (num < 0) return undefined;
    if (num === 0 || num === 1) return 1;
    result = num * factorial(num - 1);
    return result;
}

//console.log(factorial(4));

//----EX 2----?//
function deepSum(arr) {
    let result = 0

    for (const element of arr) {
        if (typeof element === 'number') {
            result += element;
        } else if (Array.isArray(element)) {
            result += deepSum(element);
        }
    }
    return result
}

//console.log(deepSum([1,[2, 3],[4,[5, 6]]]))

//-------EX 3.1------//

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    isSquare() {
        return this.width === this.height;
    }
}

// const rec1 = new Rectangle(4,3)
// console.log(rec1.isSquare())

//------EX 3.2 -----//

class Counter {
    #count = 0;
    #max = Infinity;
    static #totalInstances = 0;

    constructor(count, max) {
        this.#count = count;
        this.#max = max;
        Counter.#totalInstances += 1;
    }

    increment() {
        if (this.#count < this.#max) {
            return ++this.#count
        }
    }

    decrement() {
        return --this.#count;
    }

    reset() {
        return this.#count = 0;
    }

    getValue() {
        return this.#count;
    }

    setMax(newMax) {
        if (newMax >= this.#count) {
            this.#max = newMax
        }
        return `New max: ${newMax}`
    }
}
const counterTest1 = new Counter(1, 10)
const counterTest2 = new Counter(1, 20)
const counterTest3 = new Counter(1, 30)
// console.log(counterTest1.increment())
// console.log(counterTest1.getValue())
// console.log(counterTest2.decrement())
// console.log(counterTest3.reset())
// console.log(counterTest3.increment())
// console.log(counterTest3.setMax(10))
// console.log(counterTest3.increment())

//------EX 3.3-------//
class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = (typeof age === 'number' && Number.isFinite(age) && age >= 0) ? age : 0;
        this.type = type;
        Animal.totalAnimals++
    }
    #energy = 100
    static totalAnimals = 0;

    makeSound() {
        return `*animal sound*`
    }

    sleep(hours) {
        const max = 100;
        if (this.#energy < 100) {
            this.#energy = 10 * hours;
            if (this.#energy > max) this.#energy = max; //can't exceed 100 (91 + 10 < 100)
        }
    }

    play(minutes) {
        if (this.#energy > 10) {
            this.#energy = this.#energy - minutes;
            return `You played with ${this.name} for ${minutes} minutes.`;
        } else {
            throw new Error(`${this.name}'s energy is too low.`);
        }
    }

    getEnergy() {
        return `Your animal has: ${this.#energy}/100 energy`;
    }

    action(value) {
        this.#energy -= value;
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age, "Dog");
    }

    makeSound() {
        return `${this.name}: Woof!`
    }

    fetch() {
        this.action(20)
        return `${this.name} runs to fetch the ball!`
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age, "Cat");
    }

    makeSound() {
        return `${this.name}: Meow💅.`
    }

    scratch() {
        this.action(10)
        return `${this.name} scratches the furniture!`
    }
}

// Examples
// const dog = new Dog("Fido", 3);
// dog.play(20);
// console.log(dog.makeSound()); // ➞ "Woof!"
// console.log(dog.fetch());     // ➞ "Fido runs to fetch the ball!"
// console.log(dog.getEnergy()); // ➞ shows updated energy

// const cat = new Cat("Luna", 2);
// cat.sleep(3);
// console.log(cat.makeSound());  // ➞ "Meow."
// console.log(cat.scratch());    // ➞ "Luna scratches the furniture!"
// console.log(Animal.totalAnimals); // ➞ 2

//------EX 4-------//

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let e = i + 1; e < arr.length; e++) {
            if (arr[e] < arr[i]) {
                min = e;
                [arr[i], arr[min]] = [arr[min], arr[i]];
            }
        }
    }
    return arr;
}

console.log(selectionSort([45, 3, 17, 3, 1, 16]));