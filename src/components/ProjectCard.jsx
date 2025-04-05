import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, tech, github, live, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
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

export default ProjectCard;
