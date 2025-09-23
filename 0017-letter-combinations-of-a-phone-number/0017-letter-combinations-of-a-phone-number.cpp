class Solution {
public:
    void backtrack_17(const string& digits, vector<string>& itog, string& curr, int key, unordered_map<char, string>& umap) {
        if (curr.size() == digits.size()) {
            itog.push_back(curr);
            return;
        }

        for (int j = 0; j < umap[digits[key]].size(); j++) {
            curr += (umap[digits[key]][j]);

            backtrack_17(digits, itog, curr, key + 1, umap);

            curr.pop_back();
        }
    }
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) {
            return {};
        }
        unordered_map<char, string> umap = {
            {'2', "abc"},
            {'3', "def"},
            {'4', "ghi"},
            {'5', "jkl"},
            {'7', "pqrs"},
            {'6', "mno"},
            {'8', "tuv"},
            {'9', "wxyz"},
        };

        vector<string> itog;
        string curr;
        backtrack_17(digits, itog, curr, 0, umap);
        return itog;
    }
};