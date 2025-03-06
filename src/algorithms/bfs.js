// src/algorithms/bfs.js
import { getNeighbors, reconstructPath } from '../utils/helpers';

export function bfs(grid, start, end) {
  const queue = [start];
  const visited = new Set();
  const parentMap = new Map();

  while (queue.length) {
    const node = queue.shift();
    if (node.x === end.x && node.y === end.y) {
      return reconstructPath(parentMap, end);
    }
    const nodeKey = `${node.x},${node.y}`;
    if (!visited.has(nodeKey)) {
      visited.add(nodeKey);
      const neighbors = getNeighbors(grid, node);
      for (const neighbor of neighbors) {
        const neighborKey = `${neighbor.x},${neighbor.y}`;
        if (!visited.has(neighborKey)) {
          queue.push(neighbor);
          if (!parentMap.has(neighborKey)) {
            parentMap.set(neighborKey, node);
          }
        }
      }
    }
  }
  return [];
}
