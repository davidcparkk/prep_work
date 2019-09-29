
def twoSum(nums, target):
  hash = {}
  for i, num in enumerate(nums):
    complement = target - num
    if complement in hash:
      return [hash[complement], i]
    else: 
      hash[num] = i

print(twoSum([2,7,11,15], 9))