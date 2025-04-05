import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600 mb-4 md:mb-0">
          © {new Date().getFullYear()} Stephen Ostler. All rights reserved.
        </p>

        <div className="flex space-x-6 text-gray-600 text-xl">
          <a
            href="https://github.com/steveostler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/stephenostler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:stephenjostler@gmail.com"
            className="hover:text-red-600"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
