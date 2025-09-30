/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    // Реализуем мин-кучу через массив и вспомогательные функции
    const heap = [];

    const getParent = (i) => Math.floor((i - 1) / 2);
    const getLeft = (i) => 2 * i + 1;
    const getRight = (i) => 2 * i + 2;

    const swap = (i, j) => {
        [heap[i], heap[j]] = [heap[j], heap[i]];
    };

    const bubbleUp = () => {
        let index = heap.length - 1;
        while (index > 0) {
            const parentIndex = getParent(index);
            if (heap[parentIndex] <= heap[index]) break;
            swap(parentIndex, index);
            index = parentIndex;
        }
    };

    const bubbleDown = () => {
        let index = 0;
        while (getLeft(index) < heap.length) {
            let smaller = getLeft(index);
            const right = getRight(index);
            if (right < heap.length && heap[right] < heap[smaller]) {
                smaller = right;
            }
            if (heap[index] <= heap[smaller]) break;
            swap(index, smaller);
            index = smaller;
        }
    };

    const push = (val) => {
        heap.push(val);
        bubbleUp();
    };

    const pop = () => {
        if (heap.length === 0) return null;
        if (heap.length === 1) return heap.pop();

        const min = heap[0];
        heap[0] = heap.pop();
        bubbleDown();
        return min;
    };

    const peek = () => heap[0];
    const size = () => heap.length;

    // Основной алгоритм
    for (const num of nums) {
        push(num);
        if (size() > k) {
            pop();
        }
    }

    return peek();
};