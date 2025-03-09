// MazeGrid.jsx
import React from "react";
import { solveMazeBFS } from "../algorithms/bfs";
import { solveMazeDFS } from "../algorithms/dfs";
import { solveMazeAStar } from "../algorithms/aStar";
import { maze, start, goal, numRows, numCols } from "../utils/maze";

const MazeGrid = ({ algorithm, explored, path, running, setExplored, setPath, setRunning }) => {
  const MazeCell = ({ isWall, isStart, isGoal, isExplored, isPath }) => {
    let bgColor = "bg-white";
    if (isWall) bgColor = "bg-gray-800";
    else if (isStart) bgColor = "bg-blue-500";
    else if (isGoal) bgColor = "bg-red-500";
    else if (isPath) bgColor = "bg-green-500";
    else if (isExplored) bgColor = "bg-yellow-300";

    return (
      <div
        className={`w-10 h-10 border border-gray-300 flex items-center justify-center transition-colors duration-300 ${bgColor}`}
      ></div>
    );
  };

  const runAlgorithm = async () => {
    setRunning(true);
    setExplored([]);
    setPath([]);

    let result;
    try {
      switch (algorithm) {
        case "BFS":
          result = solveMazeBFS(start, goal);
          break;
        case "DFS":
          result = solveMazeDFS(start, goal);
          break;
        case "A*":
          result = solveMazeAStar(start, goal);
          break;
        default:
          throw new Error("Invalid algorithm");
      }

      // Animate explored cells
      for (let i = 0; i < result.explored.length; i++) {
        setExplored(prev => [...prev, result.explored[i]]);
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      // Animate solution path
      if (result.solutionPath) {
        for (let i = 0; i < result.solutionPath.length; i++) {
          setPath(prev => [...prev, result.solutionPath[i]]);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    } catch (error) {
      console.error("Algorithm error:", error);
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
    <div
      className="grid gap-1 mx-auto mb-4"
      style={{ gridTemplateColumns: `repeat(${numCols}, 2.5rem)` }}
    >
        {maze.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const currentCell = [rowIndex, colIndex];
            const isStart = currentCell[0] === start[0] && currentCell[1] === start[1];
            const isGoal = currentCell[0] === goal[0] && currentCell[1] === goal[1];
            const isWall = cell === 1;
            const isExplored = explored.some(
              ([r, c]) => r === rowIndex && c === colIndex
            );
            const isPath = path.some(
              ([r, c]) => r === rowIndex && c === colIndex
            );

            return (
              <MazeCell
                key={`${rowIndex}-${colIndex}`}
                isWall={isWall}
                isStart={isStart}
                isGoal={isGoal}
                isExplored={isExplored}
                isPath={isPath}
              />
            );
          })
        )}
      </div>

      <button
      onClick={runAlgorithm}
      disabled={running}
      className="mx-auto block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-sm"
    >
      {running ? "Visualizing..." : "Start Visualization"}
    </button>
    </div>
  );
};

export default MazeGrid;