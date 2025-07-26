import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
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
            className={`font-medium transition-colors duration-200 ${
              isActive('/encyclopedia')
                ? 'text-amber-500'
                : 'text-gray-600 hover:text-amber-500'
            }`}
          >
            Encyclopedia
          </button>
          <button
            onClick={() => navigate('/about')}
            className={`font-medium transition-colors duration-200 ${
              isActive('/about')
                ? 'text-amber-500'
                : 'text-gray-600 hover:text-amber-500'
            }`}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;