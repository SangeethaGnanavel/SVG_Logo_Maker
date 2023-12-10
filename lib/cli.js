const inquirer = require("inquirer");
const { createDocument } = require("./document");
const { writeFile } = require("fs/promises");
const { join } = require("path");
class CLI {
  constructor() {
    this.logoText = "";
    this.logoTextColor = "";
    this.logoShape = "";
    this.logoShapeColor = "";
  }
  run() {
    return (
      inquirer
        .prompt([
          {
            type: "list",
            name: "shape",
            message: "Please enter the shape",
            choices: ["circle", "triangle", "square"],
            filter(val) {
              return val.toLowerCase();
            },
          },
        ])
        //assign user inputs to CLI class properties
        .then(({ shape }) => {
          this.logoShape = shape;
        })
        //create svg file
        .then(() => {
          return writeFile(
            join(__dirname, "..", "examples", "logo.svg"),
            createDocument(this.logoShape)
          );
        })
    );
  }
}
module.exports = CLI;
