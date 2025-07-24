function shuffleRows(buffer, width, heigth) {
    const src = new Uint8Array(buffer);
    const output = new Uint8Array(width * heigth);

    for (let row = 0; row < heigth; row++) {
        for (let col = 0; col < width; col++) {
            if (row % 2 !== 0) {
                output[row * width + col] = src[row * width + width - col - 1];
            } else {
                output[row * width + col] = src[row * width + col];
            }
        }
    }
    return output.buffer;
}

function deshuffleRows(shuffled, width, heigth) {
    const src = new Uint8Array(shuffled);
    const output = new Uint8Array(width * heigth);

    for (let row = 0; row < heigth; row++) {
        for (let col = 0; col < width; col++) {
            if (row % 2 !== 0) {
                output[row * width + col] = src[row * width + width - col - 1];
            } else {
                output[row * width + col] = src[row * width + col];
            }
        }
    }
    return output.buffer;
}

// Example array and implementation

const width = 4, height = 4;
const img = Uint8Array.from([
    0x00, 0x01, 0x02, 0x03,  // row 0
    0x04, 0x05, 0x06, 0x07,  // row 1
    0x08, 0x09, 0x0A, 0x0B,  // row 2
    0x0C, 0x0D, 0x0E, 0x0F   // row 3
]).buffer;

const shuffled = shuffleRows(img, width, height);
console.log([...new Uint8Array(shuffled)]);
// → 00 01 02 03  07 06 05 04  08 09 0A 0B  0F 0E 0D 0C

const restored = deshuffleRows(shuffled, width, height);
console.log([...new Uint8Array(restored)]);
// → original bytes