const Shape = require("./shape");

class Circle extends Shape {
  constructor(logoColor) {
    super(logoColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="1" fill="${this.logoColor}" />`;
  }
}
module.exports = Circle;
