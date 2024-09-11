import React from 'react';
// import heartImage from '/assets/heart.png'; // Add a relevant heart image in the assets folder

const Header = () => {
  return (
    <header className="w-full flex justify-center p-6 bg-teal-500 shadow-md">
      <img src='/assets/heart.png' alt="Heart Logo" className="w-12 h-12 mr-3" />
      <h1 className="text-3xl font-bold text-white">Heart Disease Predictor</h1>
    </header>
  );
};

export default Header;
