// src/algorithms/dijkstra.js
import MinHeap from '../utils/MinHeap';
import { getNeighbors, reconstructPath } from '../utils/helpers';

export function dijkstra(grid, start, end) {
  const pq = new MinHeap();
  const distances = new Map();
  const parentMap = new Map();

  const startKey = `${start.x},${start.y}`;
  distances.set(startKey, 0);
  pq.insert({ node: start, cost: 0 });

  while (!pq.isEmpty()) {
    const { node, cost } = pq.extractMin();

    if (node.x === end.x && node.y === end.y) {
      return reconstructPath(parentMap, end);
    }

    const neighbors = getNeighbors(grid, node);
    for (const neighbor of neighbors) {
      const neighborKey = `${neighbor.x},${neighbor.y}`;
      const newCost = cost + 1; // Assuming uniform cost
      if (newCost < (distances.get(neighborKey) ?? Infinity)) {
        distances.set(neighborKey, newCost);
        parentMap.set(neighborKey, node);
        pq.insert({ node: neighbor, cost: newCost });
      }
    }
  }
  return [];
}
