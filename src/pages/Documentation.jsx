export default function Documentation() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Algorithm Documentation</h2>
          
          <div className="space-y-6">
            <AlgorithmCard 
              title="Breadth-First Search (BFS)"
              complexity="O(V + E)"
              description="Explores all neighbor nodes at the present depth before moving to nodes at the next depth level."
            />
            {/* Add similar cards for DFS and A* */}
          </div>
        </div>
      </div>
    );
  }
  
  function AlgorithmCard({ title, complexity, description }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">Time Complexity: {complexity}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  }