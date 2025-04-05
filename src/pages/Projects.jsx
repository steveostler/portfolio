import FeaturedProject from "../components/FeaturedProject";
import todoImage from "../assets/placeholder.png";
import mailImage from "../assets/form.jpg";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <FeaturedProject
        title="Newsletter Sign Up"
        description="A form for subscribing to a mail list."
        tech="CSS, HTML, Javascript"
        github="https://github.com/steveostler/newsletter-sign-up"
        live="https://steveostler.github.io/newsletter-sign-up/"
        image={mailImage}
      />

      <FeaturedProject
        title="To-Do List App"
        description="A simple CRUD app for managing tasks."
        tech="React, Node.js, MongoDB"
        github="https://github.com/yourusername/todo-app"
        live="https://steveostler.netlify.app/"
        image={todoImage}
        reverse
      />

      <FeaturedProject
        title="Modern Portfolio Site"
        description="A sleek personal website built with React and Tailwind, featuring smooth navigation and responsive layout."
        tech="React, Tailwind CSS, Vite"
        github="https://github.com/steveostler/portfolio"
        live="https://steveostler.netlify.app/"
        image={todoImage}
        
      />
    </div>
  );
}

export default Projects;
