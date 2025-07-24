function buildPacket({
  magic = "DX",
  version = 1,
  flags = { active: true, lowBatt: false, fault: true },
  deviceId = 0x1234,
  uptimeMs = 123456789,
  temperatureC = 23.45,
  humidityPct = 54.3,
  voltageV = 3.712,
  sampleCount = 9001
} = {}) {
  const buf = new ArrayBuffer(22);
  const u8 = new Uint8Array(buf);
  const dv = new DataView(buf);

  u8[0] = magic.charCodeAt(0);
  u8[1] = magic.charCodeAt(1);
  u8[2] = version;

  let f = 0;
  if (flags.active) f |= 1 << 0;
  if (flags.lowBatt) f |= 1 << 1;
  if (flags.fault) f |= 1 << 2;
  u8[3] = f;

  dv.setUint16(4, deviceId, false);        // BE
  dv.setUint32(6, uptimeMs, true);         // LE
  dv.setInt16(10, Math.round(temperatureC * 100), false); // BE
  dv.setUint16(12, Math.round(humidityPct * 10), true);    // LE
  dv.setUint16(14, Math.round(voltageV * 1000), true);     // LE
  dv.setUint32(16, sampleCount, true);     // LE

  let sum = 0;
  for (let i = 0; i < 20; i++) sum = (sum + u8[i]) & 0xFFFF;
  dv.setUint16(20, sum, true);             // LE checksum

  return buf;
}

// Example usage:
const packet = buildPacket();
console.log(
  Array.from(new Uint8Array(packet))
    .map(b => b.toString(16).padStart(2, '0'))
    .join(' ')
);

import { parsePacket } from "./parsePacket.js";

const test = parsePacket(packet);
console.log(test);
