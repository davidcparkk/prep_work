def isValid(str):
  parens = {
    "{": "}",
    "[": "]",
    "(": ")",
  }
  stack = []

  for paren in str:
    if paren in parens:
      stack.append(paren)
    else:
      top_of_stack = stack[len(stack) - 1]
      if parens[top_of_stack] == paren:
        stack.pop()
      else:
        stack.append(paren)

  return len(stack) == 0



parens = '{[()]}'
print(isValid(parens))