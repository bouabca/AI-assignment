import { useState } from 'react';
import { FaCode, FaBook, FaCogs } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const algorithms = [
  {
    id: 'bfs',
    name: 'Breadth-First Search (BFS)',
    complexity: 'O(V + E)',
    description: 'BFS explores all neighbor nodes at the current depth before moving deeper.',
    code: `function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);
  
  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);
    
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`
  },
  {
    id: 'dfs',
    name: 'Depth-First Search (DFS)',
    complexity: 'O(V + E)',
    description: 'DFS explores as far as possible along each branch before backtracking.',
    code: `function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;
  visited.add(start);
  console.log(start);
  
  for (let neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}`
  },
  {
    id: 'a-star',
    name: 'A* (A-Star)',
    complexity: 'O(E)',
    description: 'A* finds the shortest path by combining the benefits of Dijkstra and heuristics.',
    code: `function aStar(start, goal, graph, heuristic) {
  let openSet = [start];
  let cameFrom = new Map();
  let gScore = new Map();
  let fScore = new Map();
  
  gScore.set(start, 0);
  fScore.set(start, heuristic(start, goal));
  
  while (openSet.length > 0) {
    let current = openSet.shift();
    if (current === goal) return reconstructPath(cameFrom, current);
    
    for (let neighbor of graph[current]) {
      let tentativeGScore = gScore.get(current) + graph[current][neighbor];
      if (tentativeGScore < (gScore.get(neighbor) || Infinity)) {
        cameFrom.set(neighbor, current);
        gScore.set(neighbor, tentativeGScore);
        fScore.set(neighbor, tentativeGScore + heuristic(neighbor, goal));
        openSet.push(neighbor);
      }
    }
  }
}`
  }
];

export default function Documentation() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 mt-16">
        <h2 className="text-xl font-bold mb-6">Documentation</h2>
        <nav className="space-y-4">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              className={`w-full text-left p-3 rounded-md ${selectedAlgorithm.id === algo.id ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              onClick={() => setSelectedAlgorithm(algo)}
            >
              {algo.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2 mt-16">
          <FaBook /> {selectedAlgorithm.name}
        </h1>
        <p className="text-gray-300 mb-4">Time Complexity: <span className="text-blue-400">{selectedAlgorithm.complexity}</span></p>
        <p className="text-gray-400 mb-6">{selectedAlgorithm.description}</p>
        
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <FaCode /> Implementation
        </h2>
        <SyntaxHighlighter language="javascript" style={atomDark} className="rounded-lg">
          {selectedAlgorithm.code}
        </SyntaxHighlighter>
      </main>
    </div>
  );
}
