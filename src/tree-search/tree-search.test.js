const data = require("./test-data");
const tree = require("./tree-search");

it("should return object with matching title", () => {
  expect(tree.findNode(data, "randomNode_3")).toEqual({
    title: "randomNode_3"
  });
});

it("should return undefined if matching title is not found", () => {
  expect(tree.findNode(data, "title that doesn't exist")).toEqual(
    undefined
  );
});

it("should return object with matching title, but in iterative way", () => {
  expect(tree.findNodeIterative(data, "randomNode_3")).toEqual({
    title: "randomNode_3"
  });
});

it("should return undefined if title doesn't exist, but in iterative way", () => {
  expect(
    tree.findNodeIterative(data, "title that doesn't exist")
  ).toEqual(undefined);
});
