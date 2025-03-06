// src/algorithms/aStar.js
import MinHeap from '../utils/MinHeap';
import { getNeighbors, reconstructPath, heuristic } from '../utils/helpers';

export function aStar(grid, start, end) {
  const openSet = new MinHeap();
  const closedSet = new Set();
  const gScore = new Map();
  const fScore = new Map();
  const parentMap = new Map();

  const startKey = `${start.x},${start.y}`;
  gScore.set(startKey, 0);
  fScore.set(startKey, heuristic(start, end));
  openSet.insert({ node: start, cost: fScore.get(startKey) });

  while (!openSet.isEmpty()) {
    const { node } = openSet.extractMin();
    const nodeKey = `${node.x},${node.y}`;

    // If we reached the goal, reconstruct the path.
    if (node.x === end.x && node.y === end.y) {
      return reconstructPath(parentMap, end);
    }

    // If node already processed, skip it.
    if (closedSet.has(nodeKey)) continue;
    closedSet.add(nodeKey);

    const neighbors = getNeighbors(grid, node);
    for (const neighbor of neighbors) {
      const neighborKey = `${neighbor.x},${neighbor.y}`;

      // Skip neighbor if it is in closed set.
      if (closedSet.has(neighborKey)) continue;

      const tentativeGScore = (gScore.get(nodeKey) || Infinity) + 1; // Uniform cost

      if (tentativeGScore < (gScore.get(neighborKey) || Infinity)) {
        parentMap.set(neighborKey, node);
        gScore.set(neighborKey, tentativeGScore);
        const f = tentativeGScore + heuristic(neighbor, end);
        fScore.set(neighborKey, f);
        openSet.insert({ node: neighbor, cost: f });
      }
    }
  }
  // Return empty if no path found.
  return [];
}
