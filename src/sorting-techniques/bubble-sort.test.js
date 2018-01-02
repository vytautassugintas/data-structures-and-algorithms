const bubble = require("./bubble-sort");
const timer = require("../utils/timer");
const testData = [1, 3, 2, 5, 4, 6, 2, 5];

it("should return sorted array using bubble sort with two loops", () => {
    const t = timer("Bubble sort with two loops");
    expect(bubble.sortWithTwoLoops(testData)).toEqual([1, 2, 2, 3, 4, 5, 5, 6]);
    t.stop();
})

it("should return sorted array using bubble sort with while loop", () => {
    const t = timer("Bubble sort with while");
    expect(bubble.sortWithWhile(testData)).toEqual([1, 2, 2, 3, 4, 5, 5, 6]);
    t.stop();
})

it("should sort array using recursive bubble sort", () => {
    const t = timer("Bubble sort recursive");
    expect(bubble.sortRecursive(testData)).toEqual([1, 2, 2, 3, 4, 5, 5, 6]);
    t.stop();
})
