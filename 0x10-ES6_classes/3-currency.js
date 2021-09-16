class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* code setter and getter */
  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  /* code setter and getter */
  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
