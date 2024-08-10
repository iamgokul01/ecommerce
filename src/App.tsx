import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex-col justify-between outline  bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Your Logo</div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
              <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container h-screen mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Our Site</h1>
          <p className="text-xl text-gray-600 mb-8">Discover amazing things with us</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 border  text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Namme Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;