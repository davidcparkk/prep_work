// Tree.prototoype.traverse = 

node1 = {
  data: 1,
  left: refToLeftNode,
  right: refToRightNode
};

let queue = [];

queue.push(1);
queue.push(2);

function levelOrderSearch(rootNode) {
  if (rootNode === null) {
    return;
  }

  let queue = [];
  queue.push(rootNode);

  while (queue.length > 0) {
    let currNode = queue[0];

    if (currNode.left !== null) {
      queue.push(currNode.left);
    }

    if (currNode.right !== null) {
      queue.push(currNode.right);
    }

    queue.shift();
  }
}