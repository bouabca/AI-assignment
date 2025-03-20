import { numRows, numCols } from "../utils/maze";

// Heuristic table (adjust the values as needed)
const heuristicTable = {
  "0,0": 8, "0,2": 6, "0,3": 6, "0,4": 7, "0,5": 4, "0,6": 12, "0,7": 7, "0,8": 15, "0,9": 18, 
  "1,0": 6, "1,2": 8, "1,5": 6, "1,9": 5, "2,0": 6, "2,1": 4, "2,2": 8, "2,5": 6, "2,7": 3, 
  "2,8": 5, "2,9": 3, "3,0": 5, "3,4": 2, "3,7": 1, "3,9": 0 // Goal at [3,9]
};

function heuristic(coord) {
  return heuristicTable[coord.toString()] ?? Infinity;
}

export function solveMazeAStar(maze, start, goal) {
  const openList = [start];
  const explored = [];
  const parents = {};
  const gScores = { [start.toString()]: 0 };
  const fScores = { [start.toString()]: heuristic(start) };
  
  parents[start.toString()] = null;
  
  while (openList.length > 0) {
    // Sort openList by fScores (lowest first)
    openList.sort((a, b) => fScores[a.toString()] - fScores[b.toString()]);
    const current = openList.shift();
    explored.push(current);
    
    if (current[0] === goal[0] && current[1] === goal[1]) {
      return { explored, solutionPath: reconstructPath(parents, current) };
    }
    
    for (let neighbor of getNeighbors(current, maze)) {
      const tentativeGScore = gScores[current.toString()] + 1;
      const key = neighbor.toString();
      
      if (!(key in gScores) || tentativeGScore < gScores[key]) {
        parents[key] = current;
        gScores[key] = tentativeGScore;
        fScores[key] = tentativeGScore + heuristic(neighbor);
        if (!openList.some(cell => cell.toString() === key)) {
          openList.push(neighbor);
        }
      }
    }
  }
  return { explored, solutionPath: null };
}

function getNeighbors([row, col], maze) {
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];
  const neighbors = [];
  for (let [dr, dc] of directions) {
    const r = row + dr, c = col + dc;
    if (r >= 0 && r < maze.length && c >= 0 && c < maze[0].length && maze[r][c] === 0) {
      neighbors.push([r, c]);
    }
  }
  return neighbors;
}

function reconstructPath(parents, end) {
  const path = [];
  let current = end;
  while (current !== null) {
    path.push(current);
    current = parents[current.toString()];
  }
  return path.reverse();
}
