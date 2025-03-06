// src/utils/helpers.js
export function getNeighbors(grid, node) {
    const directions = [
      { x: -1, y: 0 }, // up
      { x: 1, y: 0 },  // down
      { x: 0, y: -1 }, // left
      { x: 0, y: 1 }   // right
    ];
    const neighbors = [];
    for (const dir of directions) {
      const newX = node.x + dir.x;
      const newY = node.y + dir.y;
      // Ensure we're within grid boundaries and the cell is not a wall (0 = path, 1 = wall)
      if (grid[newX] !== undefined && grid[newX][newY] !== undefined && grid[newX][newY] === 0) {
        neighbors.push({ x: newX, y: newY });
      }
    }
    return neighbors;
  }
  
  export function reconstructPath(parentMap, end) {
    const path = [];
    let currentKey = `${end.x},${end.y}`;
    let current = end;
    while (parentMap.has(currentKey)) {
      path.push(current);
      current = parentMap.get(currentKey);
      currentKey = `${current.x},${current.y}`;
    }
    path.push(current); // Include the starting node
    return path.reverse();
  }
  
  export function heuristic(node, goal) {
    // Manhattan distance
    return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
  }
  