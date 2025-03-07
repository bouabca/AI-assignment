import { FaGithub, FaRocket, FaPuzzlePiece } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            Visualize Pathfinding Magic
          </h1>
          
          <p className="text-xl text-slate-300 mb-12">
            Watch algorithms dance through labyrinths in real-time
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="/maze" 
              className="flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-lg"
            >
              <FaRocket className="mr-2" />
              Start Exploring
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Moudjib16/AI-assignment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all duration-300 shadow-lg"
            >
              <FaGithub className="mr-2" />
              GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
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
        </motion.div>
      </section>

      {/* Footer Note */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1 }}
        className="text-center pb-8 text-slate-400"
      >
        <p>Built with passion and innovation 🚀</p>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`bg-gradient-to-br ${color} p-px rounded-2xl overflow-hidden shadow-2xl`}
    >
      <div className="bg-slate-900 h-full p-6 rounded-2xl shadow-lg">
        <div className={`mb-4 inline-block p-3 rounded-lg bg-gradient-to-br ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
}
