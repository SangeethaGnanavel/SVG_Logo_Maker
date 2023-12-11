const Shape = require("./shape");

class Square extends Shape {
  constructor(logoColor) {
    super(logoColor);
  }
  render() {
    return `<rect x="75" y="50" width="150" height="100" stroke="black" stroke-width="1" fill="${this.logoColor}" />`;
  }
}
module.exports = Square;
