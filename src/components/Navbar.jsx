import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Change if you're using a different image

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-10" />
          

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
          <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-blue-600" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col items-center space-y-6 py-6 bg-white border-t shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <li><Link to="/" onClick={closeMenu} className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="hover:text-blue-500">About</Link></li>
            <li><Link to="/projects" onClick={closeMenu} className="hover:text-blue-500">Projects</Link></li>
            <li><Link to="/blog" onClick={closeMenu} className="hover:text-blue-500">Blog</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="hover:text-blue-500">Contact</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
