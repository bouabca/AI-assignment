import { maze, numRows, numCols, start, goal } from "../utils/maze";

// Helper function to get neighbors
function getNeighbors([row, col]) {
  const neighbors = [];
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];
  for (let [dr, dc] of directions) {
    const r = row + dr, c = col + dc;
    if (r >= 0 && r < numRows && c >= 0 && c < numCols && maze[r][c] !== 1) { // avoid walls
      neighbors.push([r, c]);
    }
  }
  return neighbors;
}

export function solveMazeUniformCost(start, goal) {
  const pq = [start]; // Priority queue
  const gScores = { [start.toString()]: 0 }; // Distance from start
  const explored = [];
  const parents = {};
  parents[start.toString()] = null;

  while (pq.length > 0) {
    // Sort pq by gScores, smallest gScore first
    pq.sort((a, b) => gScores[a.toString()] - gScores[b.toString()]);
    const current = pq.shift();
    explored.push(current);

    if (current[0] === goal[0] && current[1] === goal[1]) {
      return { solutionPath: reconstructPath(parents, current), explored };
    }

    for (let neighbor of getNeighbors(current)) {
      // Calculate the gScore based on the weight of the cell
      const tentativeGScore = gScores[current.toString()] + maze[neighbor[0]][neighbor[1]];
      const key = neighbor.toString();

      if (!(key in gScores) || tentativeGScore < gScores[key]) {
        parents[key] = current;
        gScores[key] = tentativeGScore;
        if (!pq.some(cell => cell.toString() === key)) {
          pq.push(neighbor);
        }
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
