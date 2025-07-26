import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-start">
          <h1
            className="text-2xl font-bold text-gray-900 cursor-pointer flex-shrink-0"
            onClick={() => navigate('/')}
          >
            <span className="text-gray-900">quick</span>
            <span className="text-amber-500">train</span>
          </h1>
          <nav className="flex space-x-4 ml-6 mt-1.5">
            <button
              onClick={() => navigate('/encyclopedia')}
              className="text-gray-600 hover:text-amber-500 transition-colors duration-300 font-medium"
            >
              Encyclopedia
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-amber-500 font-medium"
            >
              About
            </button>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">About QuickTrain</h1>
          <p className="text-gray-600 text-center">Thank you for using quicktrain!</p>
        </div>
      </main>
    </div>
  );
};

export default About;