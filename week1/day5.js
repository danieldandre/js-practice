//------Exercise 1.2------//

function ScoreGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        throw new TypeError('Score must be a number between 0 and 100');
    }

    if (score >= 90) {
        return 1;
    } else if (score >= 70) {
        return 2;
    } else if (score >= 50) {
        return 'Good';
    } else if (score >= 20) {
        return 'Bad';
    } else {
        return 'Very bad';
    }

}

// try {
//     console.log(ScoreGrade(105));
// } catch (err) {
//     console.error('Caught an error:', err.name, '-', err.message);
// }

//------Exercise 1.3------//

// try {
//   const input = ScoreGrade('word');
//   console.log('Grade:', input);
// } catch (err) {
//   console.warn('Error, wrong input:', err.message);
// } finally {
//   console.log('Something important that should run regardless');
// }

//------Exercise 1.4------//

function throwMany(type) {
    try {
        switch (type) {
            case 'type':
                throw new TypeError("Wrong type");
            case 'range':
                throw new RangeError("Index out of range");
            case 'reference':
                throw new ReferenceError("Variable off scope or non-existing");
            case 'syntax':
                //throw new SyntaxError("Syntax error");
                eval('"Hello');
                break;
            case 'URI':
                //throw new URIError("URI error");
                decodeURIComponent('%');
                break;
            default:
                throw new Error("Something bad :(");
        }
    } catch (err) {
        if (err instanceof TypeError) {
            console.error('TypeError:', err.message);
        } else if (err instanceof RangeError) {
            console.error('RangeError', err.message);
        } else if (err instanceof ReferenceError) {
            console.error('ReferenceError', err.message);
        } else if (err instanceof SyntaxError) {
            console.error('SyntaxError', err.message);
        } else if (err instanceof URIError) {
            console.error('URIError', err.message);
        } else {
            console.error('Other Error', err.message);
        }
    };
}

//['range','reference','type','syntax','URI','foo'].forEach(throwMany);

//------Exercise 1.5------//

class MyError extends Error {
    constructor(message) {
        super(message)
        // Initialize properties
    }
}

// function insertNumber(number) {
//     if (typeof number !== 'number') {
//         throw new MyError("Has to be a number");
//     }
// }
// try {
//     insertNumber('potato')
// } catch (MyError) {
//     console.log(MyError.message)
// }

//------Exercise 2.4------//

class TodoItem {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }
}

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTodo(task) {
        let temp = new TodoItem(task)
        this.tasks.push(temp);
    }

    completeTodo(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        }
    }

    removeTodo(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }

    listTodo() {
        this.tasks.forEach((task, index) => console.log(`${index + 1}: ${task.task} ${task.completed ? "✔️" : "❌"}`))
    }
}

// const list = new TodoList();
// list.addTodo("Buy milk");
// list.addTodo("Clean room");
// list.completeTodo(0);
// list.listTodo();


//------Exercise 3------//

function cleanSentence(sentence) {
    sentence = sentence.replace(/[^A-Za-z0-9\s]+/g, '').replace(/\s+/g, ' ').trim();
    console.log(sentence);
}

//cleanSentence("  Hello!!!   This   is ##a test. ")


//------Exercise 4------//


function breakCamelCase(sentence) {
    sentence = sentence.replace(/([A-Z])/g, ' $1').trim();
    console.log(sentence);
}
//breakCamelCase("camelCaseSentence")

//------Exercise 5------//

function bubbleSort(arr) {
    let stop = true

    while (stop) {
        stop = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                stop = true
            }
        }
        console.log(arr);
    }
}

bubbleSort([9, 2, 5, 7, 1, 3])
