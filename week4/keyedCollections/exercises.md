### Sets

Sets are objects in Javascript that lets you store unique values of any type. 
Whether primitive values or object references. 

They also are a recall to their math eponymous - it offers methods that work exactly how one would expect in set theory.

![Read more about sets here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

#### Exercise 1

Remove duplicates from the following array using a set.

```
function removeDuplicates(arr) {
    // Use a set to return an array with only unique elements
    ...
}

[1, 2, 2, 3, 4, 4, 5] -> [1, 2, 3, 4, 5]
```

#### Exercise 2

Combine two sets in one with all unique elements.

```
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);

function union(setA, setB) {
    ...
}

// -> Set {1, 2, 3, 4, 5}
```

#### Exercise 3

When given two sets, find their common elements and return them. 

#### Exercise 4

When given two sets, find all elements in A that are not in B and return them.

#### Exercise 5

When given two sets, find all elements present in either set, but not in both. Return them.

#### Exercise 6

When given two sets, check if all elements of set A exist in set B. Return true or false. 

---------

### Weak Sets

#### Exercise 7

Discover what a weak set is. Find a way of explaining it, and its use cases.
![Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

A: A WeakSet is a collections of garbadge-collectables, such as objects and non-registered symbols. The WeakSet is Weak which means that the objects stored in it can be gardbadge collected when no longer in use (no more references). This can not be iterated (opposite to the regular Sets) as it doesn't provide methods for iteration due to weak references. when an object in a WeakSet is no longer referenced elsewhere it is automatically removed from the WeakSet to help avoid memory leaks.

#### Exercise 8

```
let weakSet = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

console.log(weakSet.has(user1));

user1 = null;

```

1. Try adding a primitive (e.g. a number, a string, etc.). Does it work? Why or why not? 
2. Suppose you want to add 42. How would you add it?
3. Try using forEach through the weakset. 
A: that is not possible as WeakSets are not iterable.

4. What are the methods we have available with WeakSet? 
A: WeakSet.prototype.add(value), WeakSet.prototype.has(value) and WeakSet.prototype.delete(value).

-----------

### Maps

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

Keys inserted into maps are unique, much like they are in objects, meaning if you try to add the same key again it will be overwritten. Keys inserted into maps are also ordered according to their insertion order. Objects (JSON) works similar, although with a quirk: string keys will be sorted by insertion order while integers will be sorted in numeric order. 

![Read more about sets here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

#### Exercise 9

Implement a function groupWordsByFirstLetter(words) that takes an array of strings (e.g. `["apple", "banana", "avocado", "blueberry", "cherry"]`) and returns a Map where:
1. Each key is the first letter of a word (lowercase).
2. Each value is an array of words that begin with that letter.

The map should preserve insertion order of the letters as they first appear in the input array.

#### Exercise 10

Write a function trackApiCalls(logs) that accepts an array of endpoint paths (e.g. `["/login", "/profile", "/login", "/logout", "/login"]`) and returns a Map where:
1. Each key is the unique endpoint string.
2. Each value is the number of times that endpoint appears in the input array.

You must use a Map (not a plain object), and preserve the order in which endpoints first appeared.

```js
// Example input
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
```

#### Exercise 11

Create a function mergeDataSources(sources) where sources is an array of objects. Each object has string keys representing IDs and values representing user data:

```
[
  { "id1": { score: 10 }, "id2": { score: 20 } },
  { "id2": { score: 5 }, "id3": { score: 7 } },
  ...
]
```

You should return a Map where:
- Each key is the user ID (id1, id2, etc.)
- Each value is the merged result of all occurrences of that ID across the objects.
- Merging should add up the score values.

---------

### Weakmaps

Discover what a weak set is. Find a way of explaining it, and its use cases.
![Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

#### Exercise 12

Implement a module (or a function) that uses a WeakMap to associate session metadata (like lastLoginTime, authToken, etc.) with user objects, without modifying the user objects directly.

The function should expose two operations:
1. setSessionData(user, data) — associates a session data object with a given user object.
2. getSessionData(user) — retrieves the session data for the given user, or undefined if not found.

The session data must not be stored directly on the user object (i.e., no user.session = ...).

When the user object is no longer referenced elsewhere, it should be eligible for garbage collection — your storage must not prevent that.

```
const user1 = { id: 101, name: "Alice" };
const user2 = { id: 102, name: "Bob" };

setSessionData(user1, { lastLogin: "2025-07-25", token: "abc123" });
setSessionData(user2, { lastLogin: "2025-07-26", token: "xyz456" });

console.log(getSessionData(user1));
// { lastLogin: "2025-07-25", token: "abc123" }

console.log(getSessionData(user2));
// { lastLogin: "2025-07-26", token: "xyz456" }
```

Additional hints: 
- Try not to expose the internal WeakMap outside your *module* - encapsulation is key
- Test what happens when a user object is set to null and observe that its session data is no longer accessible

⸻
