node1 = {
  data: 1,
  left: refToLeftNode,
  right: refToRightNode
};

function preOrderSearch(node) {
  if (node === null) return;

  console.log(node.data);

  preOrderSearch(node.left);
  preOrderSearch(node.right);

}