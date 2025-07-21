## Day 9

### Exercise 1 - Binary Max-Heap

Build a simple **MaxHeap** class that can quickly give you (and remove) the largest number.


```
Why This Matters

Need the biggest (or smallest) item over and over (e.g. top scores, scheduling, “next most urgent task”)?  
A heap gives you:
- Insert a value: fast (log n)
- Get / remove largest value: fast (log n)
- Look at largest value: instant (O(1))

Read more about it here: https://www.sahinarslan.tech/posts/deep-dive-into-data-structures-using-javascript-heap-binary-heap
```
![Heaps](https://www.sahinarslan.tech/static/33612c8f7085780219124e552494212f/990cb/heap-binary-heap-anatomy.jpg)

---------

| Term | Beginner Meaning |
|------|------------------|
| heapify (bottom-up) | Turn a raw array into a valid heap fast |
| siftUp | Bubble a newly added value *up* until rule holds |
| siftDown | Push a value *down* after removal/replacement until rule holds |
| push | Insert a new value |
| pop | Remove & return the largest value (root) |
| peek | Just look at the largest value |
| size / isEmpty | How many? / Is it empty? |

-----------

*Features to Implement*

Class name: `MaxHeap`  
Internal storage: `this.data` (an Array)  
Constructor may accept an initial array (optional)  

Required methods (no solutions here—just targets):
- `constructor(iterable?)`
- `push(value)`
- `pop()` (extract max)
- `peek()`
- `size()`
- `isEmpty()`

Helper methods (internal/private naming is up to you):
- `_siftUp(index)`
- `_siftDown(index)`

Optional (nice extras):
- `replaceTop(value)`
- Support a custom comparator `(a, b) => number` for objects / min-heap
- `clear()`
- `toArray()`

*If you need more detailed step by step instructions on feature implementation, ask Soren*

### Exercise 2 - Heap Sort

`Heap sort` converts an array into a *max-heap* (largest element at the root) and then repeatedly moves that root to the end of the unsorted region, shrinking the heap until the whole array is sorted (ascending). It runs in O(n log n) time and uses O(1) extra space (in-place), but is not stable.

![Heap Sort Diagram](https://www.boardinfinity.com/blog/content/images/2023/03/Heap-sort-algo.png)

Implement a `heap sort` algorithm. Include a **visual / logging debug mode** (e.g. printing the heap segment and the sorted tail after each extraction) to validate or better understand the logic.

---------

#### Key Ideas

- Complete binary tree stored in an array (indexes: left = 2*i+1, right = 2*i+2, parent = (i-1)//2).
- Max-heap property: each parent ≥ its children → index 0 is current maximum.
- Two phases: (1) bottom-up heapify (build max-heap), (2) repeated extract-max via swap root ↔ end, then sift down.

---------

#### Tasks

1. Heapify: for i = floor(n/2) - 1 down to 0 → siftDown(array, i, n).
2. Sort loop: for end = n-1 down to 1 → swap array[0] & array[end]; siftDown(array, 0, end).
3. Debug mode (toggle): after each siftDown during heapify & extraction, log heap slice `[0..heapSize)` and sorted tail.
4. Validate: final array equals a separately sorted copy; (optional) verify all counts match.
5. Reuse (optional): Adapt `siftDown` and `checkHeap()` from Binary Max-Heap exercise; add alternate version using `MaxHeap.pop()`.
6. Instrument (optional): track comparisons & swaps; compare to merge sort or your other sorts.
7. Reflect (afterwards): memory vs merge sort; lack of adaptivity; heapify vs extraction cost; in-place vs class-based clarity.

---------

