export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'number') {
      return this._size;
    }
    if (cast === 'string') {
      return this._location;
    }
    return this;
  }
}
