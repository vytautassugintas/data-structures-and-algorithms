const timer = require("../utils/timer");
const insertion = require("./insertion-sort");

const testData = [1, 3, 5, 4, 2];

it("should sort items using insertion sort", () => {
  const t = timer("Insertion sort");
  expect(insertion.sort(testData)).toEqual([1, 2, 3, 4, 5]);
  t.stop();
});
