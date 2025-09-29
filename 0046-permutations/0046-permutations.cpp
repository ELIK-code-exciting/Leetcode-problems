class Solution {
public:
    void backtrack_46(vector<int>& nums, vector<vector<int>>& itog, vector<bool>& used, vector<int>& curr) {
        if (curr.size() == nums.size()) {
            itog.push_back(curr);
            return;
        }

        for (int i = 0; i < nums.size(); i++) {
            if (!used[i]) {
                curr.push_back(nums[i]);
                used[i] = true;

                backtrack_46(nums, itog, used, curr);

                used[i] = false;
                curr.pop_back();
            }
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> itog;
        vector<bool> used(nums.size(), false);
        vector<int> curr;
        backtrack_46(nums, itog, used, curr);
        return itog;
    }
};