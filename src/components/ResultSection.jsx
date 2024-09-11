import React, { useState, useEffect } from 'react';


// Function to download results as a text file
// const downloadResults = (results) => {
//   const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'text/plain' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'prediction_results.txt';
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// };

const PredictionResults = (props) => {
  const [prediction, setPrediction] = useState(props.prediction);
  const [probability, setProbility] = useState(props.probabilty);

  // const handleDownload = () => {
  //   if (result) {
  //     downloadResults(result);
  //   }
  // };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 max-w-4xl">
     
      <h2 className="text-2xl font-bold mb-6 text-center">Prediction Results</h2>
      {props ? (
        <div className="space-y-4">
          <p className="text-lg"><strong>Heart Disease :</strong> {props?.Prediction}</p>
          <p className="text-lg"><strong>Heart Disease Risk:</strong> {props?.probability}%</p>
          <p className="text-lg"><strong>Causes of Disease:</strong> {props?.causes?.join(', ')}</p>
          {/* <p className="text-lg"><strong>Potential Cures and Treatments:</strong> {result?.cures?.join(', ')}</p> */}
          <div>
            <p className="text-lg font-semibold">Diet Recommendations:</p>
           
          </div>
          {/* <button
            onClick={handleDownload}
            className="mt-4 bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition"
          >
            Download Results
          </button> */}
        </div>
      ) : (
        <p className="text-center text-lg">Loading results...</p>
      )}
    </div>
  );
};

export default PredictionResults;
