import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md shadow-md text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Maze Solver
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavItem to="/" text="Home" />
          <NavItem to="/maze" text="Maze Solver" />
          <NavItem to="/docs" text="Documentation" />
          <NavItem to="/contact" text="Contact" />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <SocialIcon link="https://github.com/Moudjib16" icon={<FaGithub />} />
          <SocialIcon link="https://www.instagram.com/moujiiiiiiii" icon={<FaInstagram />} />
          <SocialIcon link="https://discord.gg/Wele_Welo_Weli" icon={<FaDiscord />} />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, text }) {
  return (
    <Link to={to} className="relative group">
      <span className="text-slate-300 group-hover:text-white transition duration-300">{text}</span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function SocialIcon({ link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition duration-300"
    >
      {icon}
    </a>
  );
}
