// Use the maze passed as a parameter
export function solveMazeBFS(maze, start, goal) {
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
      return { explored, solutionPath: reconstructPath(parents, current) };
    }
    
    for (let neighbor of getNeighbors(current, maze)) {
      const key = neighbor.toString();
      if (!visited.has(key)) {
        visited.add(key);
        parents[key] = current;
        queue.push(neighbor);
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
    const r = row + dr;
    const c = col + dc;
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
