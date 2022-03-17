exports.calc = {

  // Value, entry, clearing
  entry: 0,
  value: 0,
  clearEntry() {
    this.entry = 0;
  },
  clearValue() {
    this.value = 0;
  },

  // Arithmetic
  add() {
    this.value = this.value + this.entry;
    return this.value;
  },
  sub() {
    this.value = this.value - this.entry;
    return this.value;
  },
  mult() {
    this.value = this.value * this.entry;
    return this.value;
  },
  div() {
    this.value = this.value / this.entry;
    return this.value;
  }
};
