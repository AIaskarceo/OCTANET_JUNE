// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-950 shadow z-50">
        <div className="max-w-10xl  px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white  bg-teal-400 rounded-4xl p-2 pr-3 pl-3" id="logo">M</h1>
            <ul className="flex space-x-6 text-sm">
              <li><a href="#home" className="hover:text-teal-300 transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-teal-300 transition duration-300">About</a></li>
              <li><a href="#contact" className="hover:text-teal-300 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6 pt-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white td-black-glow">Welcome to My Project</h2>
          <p className="text-gray-300 max-w-xl mx-auto green td-black-glow">
            "Experiential learning is one of the most effective approaches to gaining knowledge and skills."
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-teal-400 mb-6">About This Page</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
           <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 td-box-glow">
              <h4 className="text-xl font-bold mb-2">Modern Design</h4>
              <p className="text-gray-300 text-sm">Clean dark theme layout with sleek visuals and animations.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl sshadow hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 td-box-glow">
              <h4 className="text-xl font-bold mb-2">Responsive</h4>
              <p className="text-gray-300 text-sm">Fully responsive UI built with Tailwind and React for all devices.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 td-box-glow">
              <h4 className="text-xl font-bold mb-2">No Backend</h4>
              <p className="text-gray-300 text-sm">Front-end only project suitable for frontend submission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-teal-400 text-center mb-8">Contact Me</h3>
          <form className="bg-gray-800 p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-400 px-6 py-2 rounded text-white font-semibold transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-950 text-gray-400 text-sm">
        © {new Date().getFullYear()} Landing Page. Built with ❤️ using React + Vite.
      </footer>
    </div>
  );
}

export default App;
