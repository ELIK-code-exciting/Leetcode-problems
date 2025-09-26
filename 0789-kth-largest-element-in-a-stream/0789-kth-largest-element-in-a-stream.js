class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];

        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * Добавляет новое значение в структуру и возвращает k-й по величине элемент
     * @param {number} val - Значение для добавления.
     * @returns {number} - k-й по величине элемент.
     */
    add(val) {
        if (this.minHeap.length < this.k || this.minHeap[0] < val) {
            this.minHeap.push(val); 
            this.bubbleUp(this.minHeap.length - 1); 

            if (this.minHeap.length > this.k) {
                this.swap(0, this.minHeap.length - 1);
                this.minHeap.pop(); 
                this.bubbleDown(0); 
            }
        }
        return this.minHeap[0];
    }

    /**
     * Перемещает элемент вверх по куче, пока свойство кучи не будет выполнено.
     * @param {number} index - Индекс элемента для перемещения.
     */
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.minHeap[parentIndex] > this.minHeap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Перемещает элемент вниз по куче, пока свойство кучи не будет выполнено.
     * @param {number} index - Индекс элемента для перемещения.
     */
    bubbleDown(index) {
        const lastIndex = this.minHeap.length - 1;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex <= lastIndex && this.minHeap[leftChildIndex] < this.minHeap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex <= lastIndex && this.minHeap[rightChildIndex] < this.minHeap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== index) {
                this.swap(index, smallestIndex);
                index = smallestIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Меняет местами два элемента в массиве.
     * @param {number} i - Индекс первого элемента.
     * @param {number} j - Индекс второго элемента.
     */
    swap(i, j) {
        [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
    }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */