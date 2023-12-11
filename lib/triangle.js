const Shape = require("./shape");

class Triangle extends Shape {
  constructor(logoColor) {
    super(logoColor);
  }
  render() {
    return `<polygon points="60, 150, 240, 150, 140, 10" stroke="black" stroke-width="1" fill="${this.logoColor}" />`;
  }
}
module.exports = Triangle;
