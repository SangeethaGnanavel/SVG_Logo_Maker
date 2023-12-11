const Circle = require("../lib/circle.js");
describe("Circle class", () => {
  it("verify the return value of render() from Circle class", () => {
    // Arrange;
    let logocolor = "green";
    const circle = new Circle(logocolor);
    const expectedValue = `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="1" fill="green" />`;
    //Act
    const actualValue = circle.render();
    //Acess
    expect(actualValue).toEqual(expectedValue);
  });
});
