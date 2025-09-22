class Solution {
public:
    bool isPaLinDrom(string s, int left, int right) { // function is checking for palnidroms.
        while (left < right) {
            if (s[left] != s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    void backtrack_131(vector<vector<string>>& palindromes, vector<string>& curr, string& s, int start) {
        if (start == s.size()) {
            palindromes.push_back(curr);
            return;
        }

        for (int end = start; end < s.size(); end++) {
            if (isPaLinDrom(s, start, end)) { // We go into recursion to check the remaining symbols/combinations of symbols.
                curr.push_back(s.substr(start, end - start + 1));
                backtrack_131(palindromes, curr, s, end + 1);
                curr.pop_back();
            }
        }
    }
    vector<vector<string>> partition(string s) {
        vector<vector<string>> palindromes;
        vector<string> curr;
        backtrack_131(palindromes, curr, s, 0);
        return palindromes;
    }
};
