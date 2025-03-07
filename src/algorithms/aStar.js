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

// Manhattan distance heuristic
function heuristic([row, col], goal) {
  return Math.abs(row - goal[0]) + Math.abs(col - goal[1]);
}

export function solveMazeAStar(start, goal) {
  const openList = [start];
  const gScores = { [start.toString()]: 0 };
  const fScores = { [start.toString()]: heuristic(start, goal) };
  const explored = [];
  const parents = {};
  parents[start.toString()] = null;

  while (openList.length > 0) {
    // Sort openList by fScores, smallest fScore first
    openList.sort((a, b) => fScores[a.toString()] - fScores[b.toString()]);
    const current = openList.shift();
    explored.push(current);

    if (current[0] === goal[0] && current[1] === goal[1]) {
      return { solutionPath: reconstructPath(parents, current), explored };
    }

    for (let neighbor of getNeighbors(current)) {
      const tentativeGScore = gScores[current.toString()] + 1;
      const key = neighbor.toString();

      if (!(key in gScores) || tentativeGScore < gScores[key]) {
        parents[key] = current;
        gScores[key] = tentativeGScore;
        fScores[key] = tentativeGScore + heuristic(neighbor, goal);
        if (!openList.some(cell => cell.toString() === key)) {
          openList.push(neighbor);
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
