// https://leetcode.com/problems/valid-palindrome/

#include <cctype>
#include <iostream>
#include <string>
using std::cout;
using std::string;

class Solution {
 public:
  bool isPalindrome(string s) {
    int left = 0;
    int right = s.length();
    while (left < right) {
      if (!isalpha(s[left]) && !isdigit(s[left])) {
        left++;
        continue;
      }
      if (!isalpha(s[right]) && !isdigit(s[right])) {
        right--;
        continue;
      }
      if (tolower(s[left]) != tolower(s[right])) return false;
      left++;
      right--;
    }
    return true;
  }
};

int main() {
  Solution s;
  cout << s.isPalindrome("A man, a plan, a canal: Panama") << " ";  // true
  cout << s.isPalindrome("race a car") << " ";                      // false
  cout << s.isPalindrome(" ") << " ";                               // true
  cout << s.isPalindrome("0P");                                     // false
}