def longestPal(s):
  result = ""
  for i,ch in enumerate(s):
    substr = expandAroundCenter(i,i,s)
    if len(substr) > len(result):
      result = substr

    substr = expandAroundCenter(i,i+1,s)
    if len(substr) > len(result):
      result = substr

  return result
    
def expandAroundCenter(i,j, s):
  while i >= 0 and j < len(s) and s[i] == s[j]:
    i = i - 1
    j = j + 1
  return s[i+1:j]

s = 'babad'
print(longestPal(s))

# T: O(n^2)
# S: O(n)