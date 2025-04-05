function Contact() {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
  
        <p className="text-center text-gray-600 mb-8">
          Feel free to reach out by email or through the form below.
        </p>
  
        <form
          action="https://formspree.io/f/meoarybe"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
  
        <p className="text-center text-sm text-gray-500 mt-6">
          Or email me directly at:{" "}
          <a
            href="mailto:yourname@example.com"
            className="text-blue-600 underline"
          >
            yourname@example.com
          </a>
        </p>
      </div>
    );
  }
  
  export default Contact;
  