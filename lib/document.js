const Circle = require("../lib/circle.js");
const Triangle = require("../lib/triangle.js");
const Square = require("../lib/square.js");

function createDocument(logoshape, logotext, logotextcolor, logocolor) {
  switch (logoshape) {
    case "circle":
      //call circle object
      const circle = new Circle(logotext, logotextcolor, logocolor);
      return circle.render();
    case "triangle":
      //call triangle object
      const triangle = new Triangle(logotext, logotextcolor, logocolor);
      return triangle.render();
    case "square":
      //call square object
      const square = new Square(logotext, logotextcolor, logocolor);
      return square.render();
  }
}
module.exports = { createDocument };
