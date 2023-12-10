const Shape = require("./shape");

class Triangle extends Shape {
  constructor(logoText, logoTextColor, logoColor) {
    super(logoText, logoTextColor, logoColor);
  }
  render() {
    const returnHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,250 400,350 180,70" fill="${this.logoColor}" />
    <text x="180" y="170"  font-size="50" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
   </svg>`;
    return returnHtml;
  }
}
module.exports = Triangle;
