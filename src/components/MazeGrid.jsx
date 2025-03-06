// src/components/MazeGrid.jsx
import React from 'react';
import { generateMaze } from '../utils/generateMaze';

const MazeGrid = ({ width = 21, height = 21 }) => {
  const maze = generateMaze(width, height);
  return (
    <div className="grid gap-1 p-4 bg-gray-900 rounded-lg shadow-lg" style={{ gridTemplateColumns: `repeat(${width}, 1rem)` }}>
      {maze.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isStart = rowIndex === 1 && colIndex === 1;
          const isEnd = rowIndex === height - 2 && colIndex === width - 2;
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-4 h-4 border ${cell === 1 ? 'bg-gray-700' : 'bg-white'} 
                ${isStart ? 'bg-green-500' : ''} 
                ${isEnd ? 'bg-red-500' : ''}`}
            ></div>
          );
        })
      )}
    </div>
  );
};

export default MazeGrid;
