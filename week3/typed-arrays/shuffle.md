### Exercise 1

A grayscale image is stored as raw bytes in row-major order (width × height bytes, 0–255). Write two functions:
1. shuffleRows(buffer, width, height)
- buffer: ArrayBuffer containing exactly width*height bytes.
- Return a new Uint8Array where even-indexed rows are left unchanged and odd-indexed rows are reversed (mirrored).
2. deshuffleRows(buffer, width, height)
- Take the shuffled buffer and restore the original order (prove round-trip integrity).

Rules
- Use Typed Arrays only (Uint8Array, DataView if you prefer).
- No per-pixel push/concat—work with offsets or set() slices.
- Must allocate at most one extra ArrayBuffer equal to the original size.

```js
// Example array and implementation

const width = 4, height = 4;
const img = Uint8Array.from([
  0x00,0x01,0x02,0x03,  // row 0
  0x04,0x05,0x06,0x07,  // row 1
  0x08,0x09,0x0A,0x0B,  // row 2
  0x0C,0x0D,0x0E,0x0F   // row 3
]).buffer;

const shuffled = shuffleRows(img, width, height);
console.log([...new Uint8Array(shuffled)]);
// → 00 01 02 03  07 06 05 04  08 09 0A 0B  0F 0E 0D 0C

const restored = deshuffleRows(shuffled, width, height);
console.log([...new Uint8Array(restored)]);
// → original bytes
```

