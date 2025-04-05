import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedProject({ title, description, tech, github, live, image, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2">
        <img src={image} alt={title} className="rounded-xl shadow-md hover:scale-105 transition" />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4"><strong>Tech:</strong> {tech}</p>
        <div className="flex space-x-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black flex items-center">
              <FaGithub className="mr-1" /> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black flex items-center">
              <FaExternalLinkAlt className="mr-1" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
