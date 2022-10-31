// https://leetcode.com/problems/excel-sheet-column-number/

#include <cctype>
#include <iostream>
#include <string>
#include <vector>
using std::cout;
using std::string;
using std::vector;

class Solution {
 public:
  int titleToNumber(string columnTitle) {
    int strLength = columnTitle.length();
    vector<int> c(columnTitle.begin(), columnTitle.end());
    int res = 0;
    for (int i = 0; i < c.size(); i++) {
      int val = c[i] - 64;
      res = res * 26 + val;
    }
    return res;
  }
};

int main() {
  Solution s;
  cout << s.titleToNumber("A") << " ";    // 1
  cout << s.titleToNumber("AB") << " ";   // 28
  cout << s.titleToNumber("BA") << " ";   // 53
  cout << s.titleToNumber("ZY") << " ";   // 701
  cout << s.titleToNumber("ZZ") << " ";   // 702
  cout << s.titleToNumber("AAA") << " ";  // 703
  cout << s.titleToNumber("XFD") << " ";  // 16384

  cout << s.titleToNumber("FXSHRXW");  // 2147483647
}