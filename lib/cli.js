const inquirer = require("inquirer");
const { createDocument } = require("./document");
const { writeFile } = require("fs/promises");
const { join } = require("path");
class CLI {
  constructor() {
    this.logoText = "";
    this.logoTextColor = "";
    this.logoShape = "";
    this.logoColor = "";
  }
  run() {
    const questions = [
      {
        type: "list",
        name: "shape",
        message: "Please enter the shape",
        choices: ["circle", "triangle", "square"],
        filter(value) {
          return value.toLowerCase();
        },
      },
      {
        type: "input",
        name: "logotext",
        message: "Please enter Only 3 letters for logo",
        filter(value) {
          return value.substring(0, 3).toUpperCase();
        },
      },
      // {
      //   type: "input",
      //   name: "logotext",
      //   message: "Please enter Only 3 letters for logo",
      //   validate(input) {
      //     if (/[\w\d]{1,3}/.test(input)) {
      //       return true;
      //     }
      //     throw Error("Only 1-3 letters allowed.");
      //   },
      // },
      {
        type: "input",
        name: "logotextcolor",
        message: "Please enter color of text",
      },
      {
        type: "input",
        name: "logocolor",
        message: "Please enter color for logo background",
      },
    ];

    inquirer
      .prompt(questions)
      //assign user inputs to CLI class properties
      .then((answers) => {
        this.logoShape = answers.shape;
        this.logoText = answers.logotext;
        this.logoTextColor = answers.logotextcolor;
        this.logoColor = answers.logocolor;
      })
      //   //create svg file
      .then(() => {
        return writeFile(
          join(__dirname, "..", "examples", "logo.svg"),
          createDocument(
            this.logoShape,
            this.logoText,
            this.logoTextColor,
            this.logoColor
          )
        );
      })
      .then(() => {
        console.log("Generated logo.svg");
      });
  }
}

module.exports = CLI;
