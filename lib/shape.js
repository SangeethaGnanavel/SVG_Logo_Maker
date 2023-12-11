class Shape {
  constructor(logoColor) {
    this.logoColor = logoColor;
  }
  render() {
    throw new Error("Child class must implement render() method");
  }
}
module.exports = Shape;
