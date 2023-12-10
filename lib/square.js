const Shape = require("./shape");

class Square extends Shape {
  constructor(logoText, logoTextColor, logoColor) {
    super(logoText, logoTextColor, logoColor);
  }
  render() {
    const returnHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="150" y="100" width="150" height="150" fill="${this.logoColor}" />
    <text x="220" y="170"  font-size="50" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
    </svg>`;

    return returnHtml;
  }
}
module.exports = Square;
