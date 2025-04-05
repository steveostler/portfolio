import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';



const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Later you’ll add About, Projects, Contact pages */}
        </Routes>
        </div> 
        <Footer />
      </div>
      
    </Router>
  )
}

export default App