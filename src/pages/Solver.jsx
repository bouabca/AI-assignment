import React from 'react';
import MazeGrid from '../components/MazeGrid';

const Solver = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-4">Maze Solver</h1>
      <MazeGrid width={21} height={21} />
    </div>
  );
};

export default Solver;
