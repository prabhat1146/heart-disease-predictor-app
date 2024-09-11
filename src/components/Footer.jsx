import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-blue-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Heart Disease Predictor</h2>
            <p className="mt-1 text-sm">© 2024 All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <p className="mt-4 text-center">Developer: Prabhat Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
