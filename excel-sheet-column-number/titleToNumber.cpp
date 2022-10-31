// https://leetcode.com/problems/excel-sheet-column-number/

#include <cctype>
#include <iostream>
#include <string>
using std::cout;
using std::string;

class Solution {
 public:
  int titleToNumber(string columnTitle) {
  }
};

int main() {
  Solution s;
  cout << s.titleToNumber("A");   // 1
  cout << s.titleToNumber("AB");  // 28
  cout << s.titleToNumber("ZY");  // 701
}