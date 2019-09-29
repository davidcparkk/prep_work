class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None

def removeNthEnd(head, n):
  slow = fast = dummyHead = { next: head }
  for i in range(n):
    fast = fast.next

  while fast and fast.next:
    slow = slow.next
    fast = fast.next

  slow.next = slow.next.next
  return dummyHead

