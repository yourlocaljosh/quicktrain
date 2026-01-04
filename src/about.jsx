import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">About</h1>
          <p className="text-gray-600 text-center">Thank you for using quicktrain!</p>
          <p className="text-gray-300 text-center">Side note: I (was) looking for an artist to create muscle and exercise sprites for the Encyclopedia</p>
          <p className="text-blue-600 text-center"><a href="https://www.joshsw.me">Created by "me".</a></p>
        </div>
      </main>
    </div>
  );
};

export default About;
