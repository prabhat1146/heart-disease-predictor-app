import React from 'react';
import Header from './components/Header';
import PredictionForm from './components/PredictionForm';
import ResultSection from './components/ResultSection';
import './index.css';
import Footer from './components/Footer';
import HeartDiseaseSafety from './components/HeartDiseaseSafety';
import FeatureDescriptions from './components/FeaturesDescriptions'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b  text-gray-900">
      <Header />
      <main className="flex flex-col items-center p-4">
        <PredictionForm />
        {/* <ResultSection /> */}
      </main>
      <FeatureDescriptions/>
      <HeartDiseaseSafety/>
      <Footer/>
    </div>
  );
}

export default App;
