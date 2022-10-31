# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        left = 0
        right = 1
        res = 0
        while right < len(prices):
            difference = prices[right] - prices[left]
            res = max(difference, res)
            if prices[right] < prices[left]:
                left = right
            right += 1
        return res


s = Solution()
print(s.maxProfit([1, 2, 5, 3, 6, 7]))  # 5
print(s.maxProfit([7, 6, 4, 3, 1]))  # 0

# To solve this problem we need to find the largest difference in 2 numbers where the largest number follows the smallest number.
# Initial instinct is to store min and max
# We could definitely brute force it by just doing two stacked for loops and storing the max difference but the test cases can be enormous so this isn't going to work
# What if we do something like sum all the numbers and then subtract sliding window style
# Is there a way to calculate all the differences without stacking for loops?
# What if we create a new array that stores the largest? number after each index

# [7,1,5,3,6,4] becomes [7,6,6,6,6,4]

# Now we just loop through again and subtract
# Can't think of any reason this won't work off the top of my head
# Complexity is O(n)


# This is unbelievably slow for some reason... but it uses a lot less memory than most Python solutions. I really don't know why either of those things are true. Is there a way to do it in one loop? Is there some weird Python thing I need to consider here?

# Two pointers makes a lot of sense too, you can do it one loop! I wonder how much faster it is?

# After testing it's more than twice as fast but still not very competitive with top python solutions for some reason. Also uses a little more memory for some reason

# Original solution:
# class Solution:
#     def maxProfit(self, prices: list[int]) -> int:
#         temp = []
#         tempMax = 0  # Prices can't be negative so I don't need -inf
#         for i in range(len(prices) - 1, -1, -1):
#             price = prices[i]
#             if price > tempMax:
#                 tempMax = price
#             temp[:0] = [tempMax]
#         res = 0
#         # Temp is now our list of numbers to subtract from.
#         for i in range(len(prices)):  # Can't remember if this is exactly right
#             difference = temp[i] - prices[i]
#             if difference > res:
#                 res = difference
#         return res
