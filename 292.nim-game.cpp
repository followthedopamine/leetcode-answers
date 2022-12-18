/*
 * @lc app=leetcode id=292 lang=cpp
 *
 * [292] Nim Game
 */

// @lc code=start
class Solution {
 public:
  bool canWinNim(int n) {
    // Player can remove 1 2 3 stones
    // That means possible ending positions are
    // 6, 5, 4,
    // MATH
    // There's got to be a simple way to do this
    // The problem I'm having is I can't work out if
    // There are any positions that will guaranteed be reached
    // If played optimally
    // I don't even really know what playing optimally entails

    // Say we have 10 stones
    // I take 3 7           I take 3 (7)
    // They take 1 6        They take 3 (4)
    // I take 2 4           They win
    // I win

    // I take 2 (8)         I take 2 (8)
    // They take 1 (7)      They take 3 (5)
    // I take 3 (4)          I take 1 (4)
    // I win                I win

    // Maybe the trick is you only lose going first if you're 4

    // Say we have 6 stones
    // I take 2
    // I win

    // 5 stones
    // I take 1
    // I win
    // I'm going for it YOLO

    // Damn it, so close, it was multiples of 4

    if (n % 4 == 0) return false;
    return true;
  }
};
// @lc code=end
