const Circle = require("../lib/circle.js");

function createDocument(logoshape, logotext, logotextcolor, logocolor) {
  switch (logoshape) {
    case "circle":
      //call circle object
      const circle = new Circle(logotext, logotextcolor, logocolor);
      return circle.render();
    case "triangle":
    //call triangle object
    case "square":
    //call square object
  }
}
module.exports = { createDocument };
