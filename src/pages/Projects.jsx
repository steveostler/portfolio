import FeaturedProject from "../components/FeaturedProject";
import todoImage from "../assets/placeholder.png";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <FeaturedProject
        title="To-Do List App"
        description="A simple CRUDgg app for managing tasks."
        tech="React, Node.js, MongoDB"
        github="https://github.com/yourusername/todo-app"
        live=""
        image={todoImage}
      />

      <FeaturedProject
        title="Modern Portfolio Site"
        description="A sleek personal website built with React and Tailwind, featuring smooth navigation and responsive layout."
        tech="React, Tailwind CSS, Vite"
        github="https://github.com/yourusername/portfolio"
        live="https://yourportfolio.netlify.app"
        image={todoImage}
        reverse
      />
    </div>
  );
}

export default Projects;
