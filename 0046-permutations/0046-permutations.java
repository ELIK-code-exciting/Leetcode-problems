class Solution {
    public void backtrack_46(List<List<Integer>> itog, List<Integer> curr, boolean[] used, int[] nums) {
        if (nums.length == curr.size()) { 
            itog.add(new ArrayList<>(curr)); 
            return; 
        }

       
        for (int i = 0; i < nums.length; i++) {
            if (!used[i]) {
                curr.add(nums[i]);
                used[i] = true;
                backtrack_46(itog, curr, used, nums);
                used[i] = false;
                curr.remove(curr.size() - 1); 
            }
        }
    }
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> itog = new ArrayList<>();
        List<Integer> curr = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        backtrack_46(itog, curr, used, nums);
        return itog;
    }
}