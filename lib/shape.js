class Shape {
  constructor(logoText, logoTextColor, logoColor) {
    this.logoText = logoText;
    this.logoTextColor = logoTextColor;
    this.logoColor = logoColor;
  }
  render() {
    throw new Error("Child class must implement render() method");
  }
}
module.exports = Shape;
