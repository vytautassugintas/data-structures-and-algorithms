const fibonacci = require("./fibonacci-series");

it("should return number of fibonnaci series", () => {
  expect(fibonacci(6)).toEqual(8);
  expect(fibonacci(7)).toEqual(13);
  expect(fibonacci(8)).toEqual(21);
  expect(fibonacci(9)).toEqual(34);
});
