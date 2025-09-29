class Solution {
    public int[][] kClosest(int[][] points, int key){
        Arrays.sort(points, (a,b) -> {
            int distA = a[0] * a[0] + a[1] * a[1];
            int distB = b[0] * b[0] + b[1] * b[1];
            return Integer.compare(distA, distB);
        });
        return Arrays.copyOfRange(points, 0, key);
    }
}