const Triangle = require("../lib/triangle.js");
describe("Triangle class", () => {
  it("verify the return value of render() from Triangle class", () => {
    // Arrange;
    let logocolor = "blue";
    const triangle = new Triangle(logocolor);
    const expectedValue = `<polygon points="60, 150, 240, 150, 140, 10" stroke="black" stroke-width="1" fill="blue" />`;
    //Act
    const actualValue = triangle.render();
    //Acess
    expect(actualValue).toEqual(expectedValue);
  });
});
