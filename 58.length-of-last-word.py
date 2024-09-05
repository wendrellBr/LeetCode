#
# @lc app=leetcode id=58 lang=python
#
# [58] Length of Last Word
#

# @lc code=start
class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.rstrip()
        
        length = 0
        for char in reversed(s):
            if char == ' ':
                if length > 0:
                    break
            else:
                length += 1
        
        return length
# @lc code=end

