/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = [];

    /**
     * Добавляет элемент в кучу и восстанавливает свойство кучи.
     * @param {number} val - Значение для вставки.
     */
    function insert(val) {
        maxHeap.push(val);
        bubbleUp(maxHeap.length - 1);
    }

    /**
     * Извлекает максимальный элемент из кучи.
     * @returns {number} - Максимальный элемент.
     */
    function extractMax() {
        if (maxHeap.length === 0) return null;
        if (maxHeap.length === 1) return maxHeap.pop();

        const max = maxHeap[0];
        maxHeap[0] = maxHeap.pop(); 
        bubbleDown(0);
        return max;
    }

    /**
     * Возвращает максимальный элемент без удаления.
     * @returns {number}
     */
    function peek() {
        return maxHeap[0];
    }

    /**
     * Перемещает элемент вверх по куче, пока свойство макс-кучи не выполнено.
     * @param {number} index - Индекс элемента.
     */
    function bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (maxHeap[parentIndex] < maxHeap[index]) {
                swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Перемещает элемент вниз по куче, пока свойство макс-кучи не выполнено.
     * @param {number} index - Индекс элемента.
     */
    function bubbleDown(index) {
        const lastIndex = maxHeap.length - 1;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largestIndex = index;

            if (leftChildIndex <= lastIndex && maxHeap[leftChildIndex] > maxHeap[largestIndex]) {
                largestIndex = leftChildIndex;
            }
            if (rightChildIndex <= lastIndex && maxHeap[rightChildIndex] > maxHeap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex !== index) {
                swap(index, largestIndex);
                index = largestIndex;
            } else {
                break;
            }
        }
    }

    /**
     * Меняет местами два элемента в куче.
     * @param {number} i - Индекс первого элемента.
     * @param {number} j - Индекс второго элемента.
     */
    function swap(i, j) {
        [maxHeap[i], maxHeap[j]] = [maxHeap[j], maxHeap[i]];
    }

    for (const stone of stones) {
        insert(stone);
    }

    // Сталкиваем камни, пока не останется 0 или 1
    while (maxHeap.length > 1) {
        const y = extractMax(); 
        const x = extractMax(); 

        if (x !== y) {
            insert(y - x); 
        }
        // если x === y — оба уничтожаются, ничего не добавляем
    }

    return maxHeap.length === 0 ? 0 : peek();
};