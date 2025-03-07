import { FaGithub, FaRocket, FaPuzzlePiece } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            Visualize Pathfinding Magic
          </h1>
          
          <p className="text-xl text-slate-300 mb-12">
            Watch algorithms dance through labyrinths in real-time
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <a 
              href="/maze" 
              className="flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300"
            >
              <FaRocket className="mr-2" />
              Start Exploring
            </a>
            <a
              href="https://github.com/yourusername/maze-solver"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all duration-300"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <FeatureCard 
              icon={<FaPuzzlePiece className="w-8 h-8" />}
              title="Interactive Mazes"
              description="Craft and solve custom labyrinths with real-time visualization"
              color="from-blue-400 to-emerald-400"
            />
            <FeatureCard 
              icon={<FaRocket className="w-8 h-8" />}
              title="Algorithm Playground"
              description="Compare BFS, DFS, and A* in action"
              color="from-purple-400 to-pink-400"
            />
            <FeatureCard 
              icon={<FaGithub className="w-8 h-8" />}
              title="Open Learning"
              description="Educational resources and community-driven development"
              color="from-amber-400 to-orange-400"
            />
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center pb-8 text-slate-400">
        <p>Built with passion and </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} p-px rounded-2xl overflow-hidden shadow-2xl`}>
      <div className="bg-slate-900 h-full p-6 rounded-2xl">
        <div className={`mb-4 inline-block p-3 rounded-lg bg-gradient-to-br ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}