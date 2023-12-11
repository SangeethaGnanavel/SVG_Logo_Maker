const Shape = require("../lib/shape");

describe("Shape class", () => {
  it("verify that render() throws an error when called directly", () => {
    //Arrange
    const expectedError = new Error(
      "Child class must implement render() method"
    );
    const objshape = new Shape();
    //Act
    //Acess
    expect(() => objshape.render()).toThrowError(expectedError);
  });
});
