export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new DataView(buffer, 0, length);

  int8Array.setInt8(position, value);

  return int8Array;
}
