const tree = require("./tree-search");

const data = [
  {
    title: "topNode",
    children: [
      {
        title: "node1",
        children: [
          {
            title: "randomNode_1"
          },
          {
            title: "node2",
            children: [
              {
                title: "randomNode_2",
                children: [
                  {
                    title: "node2",
                    children: [
                      {
                        title: "randomNode_3"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

it("should return object with matching title", () => {
  expect(tree.findNodeInTree(data, "randomNode_3")).toEqual({
    title: "randomNode_3"
  });
});

it("should return undefined if matching title is not found", () => {
  expect(tree.findNodeInTree(data, "title that doesn't exist")).toEqual(
    undefined
  );
});

it("should return object with matching title, but in iterative way", () => {
  expect(tree.findNodeInTreeIterative(data, "randomNode_3")).toEqual({
    title: "randomNode_3"
  });
});

it("should return undefined if title doesn't exist, but in iterative way", () => {
  expect(
    tree.findNodeInTreeIterative(data, "title that doesn't exist")
  ).toEqual(undefined);
});
