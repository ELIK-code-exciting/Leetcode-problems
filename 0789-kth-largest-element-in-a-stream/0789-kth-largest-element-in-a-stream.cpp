class KthLargest {
private:
    int k;
    priority_queue<int, vector<int>, greater<int>> minHeap; // мин-куча

public:
    KthLargest(int k, vector<int>& nums) : k(k) {
        // Предзаполняем кучу k раз INT_MIN
        for (int i = 0; i < k; ++i) {
            minHeap.push(INT_MIN);
        }
        // Теперь добавляем все реальные числа
        for (int num : nums) {
            add(num);
        }
    }

    int add(int val) {
        if (val > minHeap.top()) {
            minHeap.pop();
            minHeap.push(val);
        }
        return minHeap.top();
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */