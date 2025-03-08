import React, { useState } from "react";
import { solveMazeBFS } from "../algorithms/bfs";
import { solveMazeDFS } from "../algorithms/dfs";
import { solveMazeAStar } from "../algorithms/aStar";
import { maze, start, goal, numRows, numCols } from "../utils/maze";

function MazeCell({ row, col, isWall, isStart, isGoal, isExplored, isPath }) {
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
}

const MazeGrid = ({ algorithm }) => {
  const [explored, setExplored] = useState([]);
  const [path, setPath] = useState([]);
  const [running, setRunning] = useState(false);

  const runAlgorithm = async () => {
    setRunning(true);
    setExplored([]);
    setPath([]);

    let result;
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
        return;
    }

    // Animate explored cells with a 50ms delay each
    for (let i = 0; i < result.explored.length; i++) {
      setExplored((prev) => [...prev, result.explored[i]]);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    // Animate solution path with a 100ms delay each
    if (result.solutionPath) {
      for (let i = 0; i < result.solutionPath.length; i++) {
        setPath((prev) => [...prev, result.solutionPath[i]]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    setRunning(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Maze Grid */}
      <div
        className="grid gap-1 p-4 bg-gray-900 rounded-lg shadow-lg"
        style={{ gridTemplateColumns: `repeat(${numCols}, 2.5rem)` }}
      >
        {maze.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const currentCell = [rowIndex, colIndex];
            const isStart =
              currentCell[0] === start[0] && currentCell[1] === start[1];
            const isGoal =
              currentCell[0] === goal[0] && currentCell[1] === goal[1];
            const isWall = cell === 1;
            const isExplored =
              !isWall &&
              explored.some(
                (e) => e[0] === currentCell[0] && e[1] === currentCell[1]
              );
            const isPath =
              !isWall &&
              path.some(
                (p) => p[0] === currentCell[0] && p[1] === currentCell[1]
              );

            return (
              <MazeCell
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
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
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
      >
        {running ? "Running..." : "Run Algorithm"}
      </button>
      {/* Tables for Explored Path and Solution Path */}
      <div className="w-full max-w-4xl mt-10 space-y-8">
        {/* Explored Path Table */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Explored Path</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-700">Step</th>
                <th className="py-2 px-4 border-b border-gray-700">
                  Coordinates [row, col]
                </th>
              </tr>
            </thead>
            <tbody>
              {explored.map((cell, index) => (
                <tr key={index} className="hover:bg-gray-700 transition-colors">
                  <td className="py-2 px-4 border-b border-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700">
                    [{cell[0]}, {cell[1]}]
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Solution Path Table */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Solution Path</h2>
          {path.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-700">Step</th>
                  <th className="py-2 px-4 border-b border-gray-700">
                    Coordinates [row, col]
                  </th>
                </tr>
              </thead>
              <tbody>
                {path.map((cell, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700 transition-colors"
                  >
                    <td className="py-2 px-4 border-b border-gray-700">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      [{cell[0]}, {cell[1]}]
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400">No solution found.</p>
          )}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default MazeGrid;
