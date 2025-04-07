import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Use your logo path

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

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
          <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-blue-600" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Sliding Menu */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col items-start p-6 space-y-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <Link to="/" onClick={closeMenu} className="hover:text-blue-500">Home</Link>
              <Link to="/about" onClick={closeMenu} className="hover:text-blue-500">About</Link>
              <Link to="/projects" onClick={closeMenu} className="hover:text-blue-500">Projects</Link>
              <Link to="/blog" onClick={closeMenu} className="hover:text-blue-500">Blog</Link>
              <Link to="/contact" onClick={closeMenu} className="hover:text-blue-500">Contact</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
