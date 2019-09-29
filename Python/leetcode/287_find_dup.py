def findDup1(nums):
  nums.sort()
  for i in range(1, len(nums)):
    if nums[i] == nums[i-1]:
      return nums[i]

nums = [1,3,4,2,2]
print(findDup1(nums))

# O(nlogn) time
# O(1)

def findDup2(nums):
  visited = set()
  for num in nums:
    if num in visited:
      return num
    visited.add(num)

print(findDup2(nums))

# O(n) time
# O(n)