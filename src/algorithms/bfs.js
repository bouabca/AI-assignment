import { maze, numRows, numCols } from "../utils/maze";

// Helper function to get neighbors (ignores weights)
function getNeighbors([row, col]) {
  const neighbors = [];
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];
  for (let [dr, dc] of directions) {
    const r = row + dr, c = col + dc;
    if (r >= 0 && r < numRows && c >= 0 && c < numCols && maze[r][c] === 0) {
      neighbors.push([r, c]);
    }
  }
  return neighbors;
}

export function solveMazeBFS(start, goal) {
  const queue = [start];
  const explored = [];
  const visited = new Set();
  const parents = {};
  visited.add(start.toString());
  parents[start.toString()] = null;

  while (queue.length > 0) {
    const current = queue.shift();
    explored.push(current);

    if (current[0] === goal[0] && current[1] === goal[1]) {
      return { solutionPath: reconstructPath(parents, current), explored };
    }

    for (let neighbor of getNeighbors(current)) {
      const key = neighbor.toString();
      if (!visited.has(key)) {
        visited.add(key);
        parents[key] = current;
        queue.push(neighbor);
      }
    }
  }
  return { solutionPath: null, explored };
}

function reconstructPath(parents, end) {
  const path = [];
  let current = end;
  while (current) {
    path.push(current);
    current = parents[current.toString()];
  }
  return path.reverse();
}
