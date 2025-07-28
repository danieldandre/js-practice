//----EX1---//
function removeDuplicates(arr) {
    const a = new Set(arr);
    return a;
}

//console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//----EX2-----//

const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);
const c = new Set([1, 2, 3, 4, 5]);
const d = new Set([5, 6, 7, 8, 9]);

function union(setA, setB) {
    return setA.union(setB);
}
//console.log(union(a, b));


//----EX3-----//

function commonElements(setA, setB) {
    return setA.intersection(setB);
}
//console.log(commonElements(a, b));

//----EX4-----//

function differenceFromSets(setA, setB) {
    return setA.difference(setB);
}
//console.log(differenceFromSets(a, b));

//----EX5-----//

function symmetricDif(setA, setB) {
    return setA.symmetricDifference(setB);
}
//console.log(symmetricDif(a, b));

//----EX6-----//

function checkElementsOfsets(setA, setB) {
    console.log(setA.isSupersetOf(setB));
    console.log(setA.isSubsetOf(setB));
}
//checkElementsOfsets(a, b);


//----EX8-----//

let weakSet = new WeakSet();

let user_1 = { name: "Alice" };
let user_2 = { name: "Bob" };
let num = { number: 42 };

weakSet.add(user_1);
//weakSet.add("pumpkin"); Won't work because primitives don't have a life time, so thye can not be stored in a WeakSet.
weakSet.add(num);

//console.log(weakSet.has(user_1));
// console.log(weakSet.has(num));
// console.log(weakSet);

//user1 = null;



//----EX9-----//

function groupWordsByFirstLetter(words) {
    const map = new Map();

    for (const word of words) {
        const firstLetter = word[0];

        if (!map.has(firstLetter)) {
            map.set(firstLetter, []);
        }
        map.get(firstLetter).push(word);
    }
    return map;
}

//console.table(groupWordsByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]));
//console.log(groupWordsByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]));

//----EX10-----//

function trackApiCalls(logs) {
    const map = new Map();

    for (const log of logs) {
        const key = log.slice(0);
        let count = 1

        if (map.has(key)) {
            map.set(key, count++);
        }
        map.set(key, count);
    }
    return map;
}

const logs = [
    "/login",
    "/profile",
    "/login",
    "/logout",
    "/login",
    "/profile",
    "/dashboard",
    "/logout"
];
//console.table(trackApiCalls(logs));

//----EX11-----//

function mergeDataSources(sources) {
    const map = new Map();

    for (const source of sources) {
        for (const id in source) {
            let total = source[id].score;

            if (map.get(id)) {
                total += map.get(id)
            }
            map.set(id, total);
        }
    }
    return map;
}

const arr = [
    { "id1": { score: 10 }, "id2": { score: 20 } },
    { "id2": { score: 5 }, "id3": { score: 7 } },
    { "id1": { score: 15 }, "id4": { score: 12 } },
    { "id3": { score: 25 }, "id5": { score: 8 } },
    { "id4": { score: 18 }, "id1": { score: 22 } }
];
//console.table(mergeDataSources(arr))

//----EX12-----//
const SessionManager = (() => {
    const map = new WeakMap()

    function setSessionData(user, data) {
        map.set(user, data);
    }

    function getSessionData(user) {
        return map.get(user);
    }
    return { setSessionData, getSessionData };
})();

let user1 = { id: 101, name: "Alice" };
const user2 = { id: 102, name: "Bob" };

SessionManager.setSessionData(user1, { lastLogin: "2025-07-25", token: "abc123" });
SessionManager.setSessionData(user2, { lastLogin: "2025-07-26", token: "xyz456" });

user1 = null;

console.log(SessionManager.getSessionData(user1));
// { lastLogin: "2025-07-25", token: "abc123" }

console.log(SessionManager.getSessionData(user2));
// { lastLogin: "2025-07-26", token: "xyz456" }