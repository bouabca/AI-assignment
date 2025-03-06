// src/algorithms/dfs.js
import { getNeighbors, reconstructPath } from '../utils/helpers';

export function dfs(grid, start, end) {
  const stack = [start];
  const visited = new Set();
  const parentMap = new Map();

  while (stack.length) {
    const node = stack.pop();
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
          stack.push(neighbor);
          // Set parent only if not already set to keep the first path found.
          if (!parentMap.has(neighborKey)) {
            parentMap.set(neighborKey, node);
          }
        }
      }
    }
  }
  return [];
}
