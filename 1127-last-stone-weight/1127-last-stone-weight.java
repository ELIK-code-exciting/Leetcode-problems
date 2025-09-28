public class Solution {
    public int lastStoneWeight(int[] stones) {
        MaxHeap maxHeap = new MaxHeap();

        for (int stone : stones) {
            maxHeap.insert(stone);
        }

        while (maxHeap.size() > 1) {
            int y = maxHeap.extractMax(); // самый тяжёлый
            int x = maxHeap.extractMax(); // второй по тяжести

            if (x != y) {
                maxHeap.insert(y - x);
            }
        }

        return maxHeap.size() == 0 ? 0 : maxHeap.peek();
    }
}

class MaxHeap {
    private List<Integer> heap;

    public MaxHeap() {
        this.heap = new ArrayList<>();
    }

    public int peek() {
        return heap.isEmpty() ? 0 : heap.get(0);
    }

    public int size() {
        return heap.size();
    }

    public void insert(int val) {
        heap.add(val);
        bubbleUp(heap.size() - 1);
    }

    private void bubbleUp(int index) {
        while (index > 0) {
            int parentIndex = (index - 1) / 2;
            if (heap.get(parentIndex) < heap.get(index)) {
                swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private void bubbleDown(int index) {
        int lastIndex = heap.size() - 1;
        while (true) {
            int left = 2 * index + 1;
            int right = 2 * index + 2;
            int largest = index;

            if (left <= lastIndex && heap.get(left) > heap.get(largest)) {
                largest = left;
            }
            if (right <= lastIndex && heap.get(right) > heap.get(largest)) {
                largest = right;
            }

            if (largest != index) {
                swap(index, largest);
                index = largest;
            } else {
                break;
            }
        }
    }

    public int extractMax() {
        if (heap.isEmpty()) {
            return 0; // или бросить исключение, но в контексте задачи 0 допустимо
        }
        if (heap.size() == 1) {
            return heap.remove(0);
        }

        int max = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1)); // перемещаем последний элемент в корень
        bubbleDown(0);
        return max;
    }

    private void swap(int i, int j) {
        int temp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, temp);
    }
}