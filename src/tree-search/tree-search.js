//TODO: Optimisation needed here
const findNodeInTree = (tree, matchingTitle) => {
  let node;
  tree.forEach(element => {
    if (element.title === matchingTitle) {
      node = element;
    } else if (element.children) {
      node = findNodeInTree(element.children, matchingTitle);
    }
  });
  return node;
}

const findNodeInTreeIterative = (tree, matchingTitle) => {
  let stack = [...tree],
    node;

  while (stack.length > 0) {
    node = stack.pop();
    if (node.title === matchingTitle) return node;
    else if (node.children) {
      node.children.forEach(element => {
        stack.push(element);
      });
    }
  }
}

module.exports = {
  findNode: findNodeInTree,
  findNodeIterative: findNodeInTreeIterative
};
