class Solution {
    public void backtrack_78(List<List<Integer>> itog, List<Integer> curr, int[] nums, int start){
        itog.add(new ArrayList<>(curr));

        for(int i = start; i < nums.length; i++){
            curr.add(nums[i]);

            backtrack_78(itog, curr, nums, i + 1);

            curr.remove(curr.size() - 1);
        }
    }

    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> itog = new ArrayList<>();
        List<Integer> curr = new ArrayList<>();
        backtrack_78(itog, curr, nums, 0);
        return itog;
    }
}