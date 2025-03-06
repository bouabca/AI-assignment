// src/utils/MinHeap.js
class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(item) {
      this.heap.push(item);
      // Sorting the heap after each insertion (for simplicity). For larger datasets, consider a more efficient heap implementation.
      this.heap.sort((a, b) => a.cost - b.cost);
    }
  
    extractMin() {
      return this.heap.shift();
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  export default MinHeap;
  