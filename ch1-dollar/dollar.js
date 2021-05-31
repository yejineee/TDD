export default class Dollar {
  dollar;

  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    this.amount *= multiplier;
  }
}
