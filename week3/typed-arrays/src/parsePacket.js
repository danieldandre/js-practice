// parsePacket.js  — skeleton
export function parsePacket(buffer) {
  // Exception handling in case buffer is not instance of ArrayBuffer or byteLength is not 22

  if (buffer.byteLength !== 22) throw new Error("len");
  const u8 = ... //Use Uint8Array
  const dv  = ... // Use DataViewer


  // Check Magic number (a magic number is a unique identifier for the packet format) - already implemented
  if (u8[0] !== 0x44 || u8[1] !== 0x58) throw new Error("Bad magic");

  // Check version, only version 1 is supported
  cons version = ... // Use u8[2]
  if (condition) throw new Error(`Unsupported version ${version}`);

  // Flags - already implemented
  const flagsByte = u8[3];
  const flags = {
    active:  (flagsByte & 0x01) !== 0,
    lowBatt: (flagsByte & 0x02) !== 0,
    fault:   (flagsByte & 0x04) !== 0
  };

  // Numeric fields -> implement
  const deviceId = dv.getUint16(4, false); // Big-endian
  ... 


  // Checksum (sum bytes 0-19 mod 65536)
  let sum = 0;
  ... 



  // Return object
  return {
    magic: "DX",
    version: u8[2],
    active: ...
    lowBatt: ...
    fault: ...
    deviceId: ...
    uptimeMs: ...
    temperatureC: ...
    humidityPct: ...
    voltageV: ...
    sampleCount: ...
    checksumValid: ...
  };
}