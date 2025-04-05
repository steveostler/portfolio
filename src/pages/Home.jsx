function Home() {
    return (
      <div className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Steve</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
          I’m a web developer with 10+ years’ experience in development, QA, and technical support.
          After retraining in React, Node.js and Python, I’m now ready for freelance, part-time or full-time opportunities.
        </p>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          View My Work
        </a>
      </div>
    );
  }
  
  export default Home;
  