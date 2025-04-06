import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Steve Ostler</h1>

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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-6 bg-white border-t">
          <li><Link to="/" onClick={closeMenu} className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="hover:text-blue-500">About</Link></li>
          <li><Link to="/projects" onClick={closeMenu} className="hover:text-blue-500">Projects</Link></li>
          <li><Link to="/blog" onClick={closeMenu} className="hover:text-blue-500">Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="hover:text-blue-500">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
