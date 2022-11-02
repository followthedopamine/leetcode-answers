#include <algorithm>
#include <cctype>
#include <iostream>
#include <string>
#include <vector>
using std::cout;
using std::find;
using std::string;
using std::vector;

class Solution {
 public:
  int missingNumber(vector<int>& nums) {
    int total = 0;
    int totalRange = 0;
    for (int i = 0; i < nums.size(); i++) {
      total += nums[i];
      totalRange += i;
    }
    totalRange += nums.size();
    int res = totalRange - total;
    return res;
  }
};

int main() {
  Solution s;
  vector<int> v;
  v.push_back(3);
  v.push_back(0);
  v.push_back(1);

  vector<int> v2;
  v2.push_back(0);
  v2.push_back(1);

  cout << s.missingNumber(v) << " ";
  cout << s.missingNumber(v2) << " ";
}