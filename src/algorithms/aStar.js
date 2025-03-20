import { maze, numRows, numCols } from "../utils/maze";

// Heuristic values based on the provided table (adjust as needed)
const heuristicTable = {
  "0,0": 8, "0,2": 6, "0,3": 6, "0,4": 7, "0,5": 4, "0,6": 12, "0,7": 7, "0,8": 15, "0,9": 18, 
  "1,0": 6, "1,2": 8, "1,5": 6, "1,9": 5, "2,0": 6, "2,1": 4, "2,2": 8, "2,5": 6, "2,7": 3, 
  "2,8": 5, "2,9": 3, "3,0": 5, "3,4": 2, "3,7": 1, "3,9": 0 // Goal at [3,9]
};

// Helper function to get valid neighbors
function getNeighbors([row, col]) {
  const neighbors = [];
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];
  for (let [dr, dc] of directions) {
    const r = row + dr, c = col + dc;
    if (r >= 0 && r < numRows && c >= 0 && c < numCols && maze[r][c] === 0) {
      neighbors.push([r, c]);
    }
  }
  return neighbors;
}

// Heuristic function using the predefined table
function heuristic(state) {
  return heuristicTable[state.toString()] ?? Infinity; // Default to high value if not found
}

//test

// A* Algorithm Implementation
export function solveMazeAStar(start, goal) {
  const openList = [start];
  const gScores = { [start.toString()]: 0 };
  const fScores = { [start.toString()]: heuristic(start) };
  const explored = [];
  const parents = {};
  parents[start.toString()] = null;

  while (openList.length > 0) {
    // Sort openList by fScores, smallest first
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
        fScores[key] = tentativeGScore + heuristic(key);
        if (!openList.some(cell => cell.toString() === key)) {
          openList.push(neighbor);
        }
      }
    }
  }
  return { solutionPath: null, explored };
}

// Reconstruct path from goal to start
function reconstructPath(parents, end) {
  const path = [];
  let current = end;
  while (current) {
    path.push(current);
    current = parents[current.toString()];
  }
  return path.reverse();
}
