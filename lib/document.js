const Circle = require("../lib/circle.js");
const Triangle = require("../lib/triangle.js");
const Square = require("../lib/square.js");

function createDocument(logoshape, logotext, logotextcolor, logocolor) {
  switch (logoshape) {
    case "circle":
      const circle = new Circle(logocolor);
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${circle.render()}
    <text x="150" y="120"  font-size="50" text-anchor="middle" fill="${logotextcolor}">${logotext}</text>
    </svg>`;
    case "triangle":
      const triangle = new Triangle(logocolor);
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${triangle.render()}
    <text x="150" y="120"  font-size="50" text-anchor="middle" fill="${logotextcolor}">${logotext}</text>
    </svg>`;
    case "square":
      const square = new Square(logocolor);
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${square.render()}
      <text x="150" y="120"  font-size="50" text-anchor="middle" fill="${logotextcolor}">${logotext}</text>
      </svg>`;
  }

  //  const returnHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.render()}
  // <text x="150" y="120"  font-size="50" text-anchor="middle" fill="${logotextcolor}">${logotext}</text>
  // </svg>`;
  // return returnHtml;
}
module.exports = { createDocument };
