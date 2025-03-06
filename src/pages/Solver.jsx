import React, { useState } from 'react';
import MazeGrid from '../components/MazeGrid';

const Solver = () => {
  const [algorithm, setAlgorithm] = useState('BFS');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Maze Solver</h1>

      <div className="mb-4">
        <label className="mr-2">Choose Algorithm:</label>
        <select
          className="px-2 py-1 border rounded text-black"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="BFS">Breadth-First Search (BFS)</option>
          <option value="DFS">Depth-First Search (DFS)</option>
          <option value="A*">A*</option>
          <option value="Dijkstra">Dijkstra</option>
          <option value="Uniform Cost">Uniform Cost</option>
          
        </select>
      </div>

      <MazeGrid algorithm={algorithm} />
    </div>
  );
};

export default Solver;
