// PathTables.jsx
import React from 'react';
import { FaSearch, FaRoute, FaChartBar } from 'react-icons/fa';

const PathTables = ({ explored, path }) => {
  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row gap-4 justify-around">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-1">
              <FaSearch className="text-lg" />
              <span className="text-sm font-semibold">Explored Nodes</span>
            </div>
            <p className="text-2xl font-bold">{explored.length}</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-green-400 mb-1">
              <FaRoute className="text-lg" />
              <span className="text-sm font-semibold">Path Length</span>
            </div>
            <p className="text-2xl font-bold">{path.length}</p>
          </div>
        </div>
      </div>

      {/* Detailed Tables */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Explored Path Table */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4 text-yellow-400">
            <FaSearch className="text-xl" />
            <h2 className="text-xl font-bold">Explored Path</h2>
          </div>
          <div className="max-h-96 overflow-y-auto thin-scrollbar">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                  <th className="pb-2">Step</th>
                  <th className="pb-2">Coordinates</th>
                </tr>
              </thead>
              <tbody>
                {explored.map((cell, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="py-2 text-sm font-mono">{index + 1}</td>
                    <td className="py-2 text-sm font-mono">[{cell[0]}, {cell[1]}]</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Solution Path Table */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4 text-green-400">
            <FaRoute className="text-xl" />
            <h2 className="text-xl font-bold">Solution Path</h2>
          </div>
          {path.length > 0 ? (
            <div className="max-h-96 overflow-y-auto thin-scrollbar">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                    <th className="pb-2">Step</th>
                    <th className="pb-2">Coordinates</th>
                  </tr>
                </thead>
                <tbody>
                  {path.map((cell, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="py-2 text-sm font-mono">{index + 1}</td>
                      <td className="py-2 text-sm font-mono">[{cell[0]}, {cell[1]}]</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex items-center justify-center h-32 text-gray-400">
              <FaChartBar className="mr-2" />
              No solution path found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PathTables;