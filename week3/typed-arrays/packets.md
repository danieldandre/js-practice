### Typed Arrays

You’re given a stream of fixed-size binary packets from a device. Each packet contains: a short ASCII signature, a version byte, a flags byte, several numeric fields of mixed integer sizes, and a trailing checksum. Some fields are little-endian, others big-endian (exact mapping is up to you to define—but you must document it and keep it consistent).

You can use the function under `buildPacket.js` to generate a mock packet such as: `44 58 01 05 12 34 15 cd 5b 07 09 29 1f 02 80 0e 29 23 00 00 59 03`
Here is the spec for the bytes from `buildPacket.js`: 

## Packet Layout (Mock Spec)

| Field | Offset | Size | Endianness | Notes |
|-------|-------:|-----:|-----------|-------|
| magic | 0 | 2 | — | ASCII "DX" |
| version | 2 | 1 | — | 0x01 |
| flags | 3 | 1 | — | bit0=active, bit1=lowBatt, bit2=fault (others reserved) |
| deviceId | 4 | 2 | **BE** | Unsigned |
| uptimeMs | 6 | 4 | **LE** | Unsigned milliseconds |
| temperatureC_x100 | 10 | 2 | **BE** | Signed int16 (÷100) |
| humidityPct_x10 | 12 | 2 | **LE** | Unsigned (÷10) |
| voltage_mV | 14 | 2 | **LE** | Unsigned (÷1000 → V) |
| sampleCount | 16 | 4 | **LE** | Unsigned counter |
| checksum | 20 | 2 | **LE** | Sum of bytes 0–19 mod 65536 |
| **Total** |  | **22** |  |  |

--------

Write parsePacket(buffer: ArrayBuffer) that converts a 22-byte device telemetry into a plain JS object. 

#### Requirements
1. Reject bad magic, wrong length, or unknown version.
2. Decode all numeric fields, scale (/100, /10, /1000) and return booleans from the flag byte.
3. Re-compute the checksum and add checksumValid to the result object.

The expected output should be as follows: 
```js
{
  magic: "DX",
  version: 1,
  active: true,
  lowBatt: false,
  fault: true,
  deviceId: 0x1234,          // 4660
  uptimeMs: 123456789,
  temperatureC: 23.45,
  humidityPct: 54.3,
  voltageV: 3.712,
  sampleCount: 9001,
  checksumValid: true
}
```