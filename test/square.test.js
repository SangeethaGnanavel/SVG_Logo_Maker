const Square = require("../lib/square.js");
describe("Square class", () => {
  it("verify the return value of render() from Square class", () => {
    // Arrange;
    let logocolor = "orange";
    const square = new Square(logocolor);
    const expectedValue = `<rect x="75" y="50" width="150" height="100" stroke="black" stroke-width="1" fill="orange" />`;
    //Act
    const actualValue = square.render();
    //Acess
    expect(actualValue).toEqual(expectedValue);
  });
});
