class TreeNode(object):
  def __init__(self, x):
    self.val = x
    self.right = self.left = None

def isBalanced(root):
  def check(node):
    if not node:
      return 0
    left = check(node.left)
    right = check(node.right)
    if left == -1 or right == -1 or abs(left-right) > 1:
      return -1
    return 1 + max(left, right)

  return check(root) != -1