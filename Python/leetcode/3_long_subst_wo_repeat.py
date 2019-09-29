# import pdb


def longestSubstr(s):
  start = longest = 0
  visited = {}

  for i, num in enumerate(s):
    # pdb.set_trace()
    if num in visited and visited[num] >= start:
      start = visited[num] + 1

    visited[num] = i
    longest = max(longest, i - start + 1)
  
  return longest


  # longest = 1

  # while l <= r and r < len(s):
  #   if s[r] in visited:
  #     visited[r] = visited[r] + 1
  #     l = visited[r]
  #   if longest < r - l:
  #     longest = r - l
  #   visited[r] = r
  #   r = r + 1
  
  # return longest


s = 'abcabcbb'
print(longestSubstr(s))