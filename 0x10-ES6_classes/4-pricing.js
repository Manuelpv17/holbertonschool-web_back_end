class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* amount setter and getter */
  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /* currency setter and getter */
  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
