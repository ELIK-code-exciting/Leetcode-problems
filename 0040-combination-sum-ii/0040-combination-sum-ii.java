class Solution {
    private void backtrack_40(List<List<Integer>> itog, List<Integer> curr, int[] nums, int start, int target){
        if(target == 0){
            itog.add(new ArrayList<>(curr));
            return;
        }

        if(target < 0){
            return;
        }

        for(int i = start; i < nums.length; i++){
            if(i > start && nums[i] == nums[i-1]){
                continue;
            }

            if(nums[i] > target) return;

            curr.add(nums[i]);

            backtrack_40(itog, curr, nums, i + 1, target - nums[i]);

            curr.remove(curr.size()-1);
        }
    }
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> itog = new ArrayList<>();
        List<Integer> curr = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack_40(itog, curr, candidates, 0, target);
        return itog;
    }
}