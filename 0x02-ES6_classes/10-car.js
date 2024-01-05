const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const clonedCar = new this.constructor();

    const privateProperties = Object.getOwnPropertyDescriptors(this);
    const privateSymbols = Object.getOwnPropertySymbols(privateProperties);

    privateSymbols.forEach((symbol) => {
      clonedCar[symbol] = privateProperties[symbol].value;
    });

    return clonedCar;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
