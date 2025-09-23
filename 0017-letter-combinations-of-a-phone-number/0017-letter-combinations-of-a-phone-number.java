class Solution {
    public static void backtrack_17(String digits, List<String> itog, StringBuilder curr, int key, Map<Character, String> umap) {
        if (curr.length() == digits.length()) {
            itog.add(curr.toString());
            return;
        }

        String letters = umap.get(digits.charAt(key));
        for (int j = 0; j < letters.length(); j++) {
            curr.append(letters.charAt(j));

            backtrack_17(digits, itog, curr, key + 1, umap);

            curr.deleteCharAt(curr.length() - 1);
        }
    }

    public static List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) {
            return new ArrayList<>();
        }

        Map<Character, String> umap = new HashMap<>();
        umap.put('2', "abc");
        umap.put('3', "def");
        umap.put('4', "ghi");
        umap.put('5', "jkl");
        umap.put('7', "pqrs");
        umap.put('6', "mno");
        umap.put('8', "tuv");
        umap.put('9', "wxyz");

        List<String> itog = new ArrayList<>();
        StringBuilder curr = new StringBuilder();

        backtrack_17(digits, itog, curr, 0, umap);
        return itog;
    }
}