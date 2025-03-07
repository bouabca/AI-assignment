import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-slate-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Maze Solver</Link>
        
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/maze" className="hover:text-blue-400">Maze Solver</Link>
          <Link to="/docs" className="hover:text-blue-400">Documentation</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-slate-300" />
          </a>
        </div>
      </div>
    </nav>
  );
}