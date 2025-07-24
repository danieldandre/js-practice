// parsePacket.js  — skeleton
export function parsePacket(buffer) {
  // Exception handling in case buffer is not instance of ArrayBuffer or byteLength is not 22

  if (buffer.byteLength !== 22) throw new Error("len");
  const u8 = new Uint8Array(buffer); //Use Uint8Array
  const dv = new DataView(buffer); // Use DataViewer


  // Check Magic number (a magic number is a unique identifier for the packet format) - already implemented
  if (u8[0] !== 0x44 || u8[1] !== 0x58) throw new Error("Bad magic");

  // Check version, only version 1 is supported
  const version = u8[2]; // Use u8[2]
  if (version !== 1) throw new Error(`Unsupported version ${version}`);

  // Flags - already implemented
  const flagsByte = u8[3];
  const flags = {
    active: (flagsByte & 0x01) !== 0,
    lowBatt: (flagsByte & 0x02) !== 0,
    fault: (flagsByte & 0x04) !== 0
  };

  // Numeric fields -> implement
  const deviceId = dv.getUint16(4, false); // Big-endian
  const uptimeMS = dv.getUint32(6, true); // Little-endian
  const temperatureC_x100 = dv.getInt16(10, false); // Big-endian
  const humidityPct_x10 = dv.getUint16(12, true); // Little-endian
  const voltage_mV = dv.getUint16(14, true); // Little-endian
  const sampleCount = dv.getUint32(16, true); // Little-endian

  // Checksum (sum bytes 0-19 mod 65536)
  let sum = 0;
  for (let i = 0; i < 20; i++) sum = (sum + u8[i]) & 0xFFFF;
  const checksum = dv.getUint16(20, true);  // LE checksum

  if (checksum !== sum % 65536) {
    throw new Error("Checksum doesn't match");
  }



  // Return object
  return {
    magic: "DX",
    version: u8[2],
    active: flags.active,
    lowBatt: flags.lowBatt,
    fault: flags.fault,
    deviceId: deviceId,
    uptimeMs: uptimeMS,
    temperatureC: temperatureC_x100 / 100,
    humidityPct: humidityPct_x10 / 10,
    voltageV: voltage_mV / 1000,
    sampleCount: sampleCount,
    checksumValid: true
  };
}