import React, { useState } from 'react';
import MazeGrid from '../components/MazeGrid';

const Solver = () => {
  const [algorithm, setAlgorithm] = useState('BFS');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] bg-clip-text text-transparent mb-4">
          Pathfinding Visualizer
        </h1>
        <p className="text-lg text-[rgb(var(--color-text)/0.8)]">
          Watch {algorithm} algorithm navigate through the maze
        </p>
      </div>

      <div className="w-full max-w-4xl mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-[rgb(var(--color-surface))] p-4 rounded-xl shadow-md">
          <label className="text-sm font-medium">Algorithm:</label>
          <select
            className="px-4 py-2 bg-[rgb(var(--color-bg))] rounded-lg border dark:border-slate-700 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="BFS">Breadth-First Search</option>
            <option value="DFS">Depth-First Search</option>
            <option value="A*">A* Algorithm</option>
          </select>
        </div>
      </div>

      <MazeGrid algorithm={algorithm} />
    </div>
  );
};

export default Solver;