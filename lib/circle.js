const Shape = require("./shape");

class Circle extends Shape {
  constructor(logoText, logoTextColor, logoColor) {
    super(logoText, logoTextColor, logoColor);
  }
  render() {
    const returnHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.logoColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
  </svg>`;
    return returnHtml;
  }
}
module.exports = Circle;
