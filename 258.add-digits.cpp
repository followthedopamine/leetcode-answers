/*
 * @lc app=leetcode id=258 lang=cpp
 *
 * [258] Add Digits
 */
#include <string>

using namespace std;

// @lc code=start
class Solution {
 public:
  int addDigits(int num) {
    while (num >= 10) {
      // Is there a simple way to do this without converting to string?
      // E.G. Divide by 100, divide by 10
      // Follow up: Could you do it without any loop/recursion in O(1) runtime?
      // The way to do it is with division by 9
      string digits = to_string(num);
      num = 0;
      for (int i = 0; i < digits.size(); i++) {
        string digit(1, digits[i]);
        num += stoi(digit);
      }
    }
    return num;
  }
};
// @lc code=end
