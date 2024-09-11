import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import ResultSection from "../components/ResultSection"
const url = process.env.REACT_APP_SERVER_URL;
const PredictionForm = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    RestingBP: '',
    Cholesterol: '',
    FastingBS: '120',
    MaxHR: '',
    ExerciseAngina: '0',
    oldpeak: '',
    coronaryArtery: '',
    sex: 'Male',
    ChestPainType: 'Typical Angina',
    RestingECG: 'Normal',
    ST_Slope: 'Flat',
    Thalassemia: 'Normal',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Use useEffect to handle scrolling when result changes
  useEffect(() => {
    if (result) {
      const resultSection = document.getElementById('result');
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [result]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(url)
      setLoading(true)
      const response = await axios.post(`${url}/find-heart-disease`, formData);
      setResult(response.data);
      
    } catch (error) {
      console.error('Error making prediction:', error);
    }

    setLoading(false)

    //scroll
    // const resultSection = document.getElementById('result');
    // if (resultSection) {
    //   resultSection.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-auto mt-8 max-w-full w-full lg:w-3/4">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Patient Data</h2>
      <form
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
        onSubmit={handleSubmit}
      >
        {/* Input fields */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Age* (Years)</label>
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Age</option>
            {Array.from({ length: 151 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Sex*</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Chest Pain Type*</label>
          <select
            name="ChestPainType"
            value={formData.ChestPainType}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Typical Angina">Typical Angina</option>
            <option value="Atypical Angina">Atypical Angina</option>
            <option value="Non-Anginal Pain">Non-Anginal Pain</option>
            <option value="Asymptomatic">Asymptomatic</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Resting BP* (mm-Hg)</label>
          <select
            name="RestingBP"
            value={formData.RestingBP}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Resting BP</option>
            {Array.from({ length: 171 }, (_, i) => i + 30).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>


        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Cholesterol* (mg/dl)</label>
          <select
            name="Cholesterol"
            value={formData.Cholesterol}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Cholesterol</option>
            <optgroup label="Normal (0 - 150)">
              {Array.from({ length: 151 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </optgroup>
            <optgroup label="High (150 - 240)">
              {Array.from({ length: 91 }, (_, i) => i + 150).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </optgroup>
            <optgroup label="Severe (240 - 400)">
              {Array.from({ length: 161 }, (_, i) => i + 240).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Fasting Blood Sugar* (mg/dL)</label>
          <select
            name="FastingBS"
            value={formData.FastingBS}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Fasting Blood Sugar</option>
            {Array.from({ length: 201 }, (_, i) => {
              let label = "";
              if (i < 100) label = "Normal";
              else if (i >= 100 && i <= 125) label = "Prediabetes";
              else label = "Diabetes";
              return (
                <option key={i} value={i}>
                  {i} mg/dL - {label}
                </option>
              );
            })}
          </select>
        </div>


        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Resting ECG*</label>
          <select
            name="RestingECG"
            value={formData.RestingECG}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Normal">Normal</option>
            <option value="ST-T wave abnormality">ST-T wave abnormality</option>
            <option value="Left ventricular hypertrophy">Left ventricular hypertrophy</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Heart Rate* (bpm)</label>
          <select
            name="MaxHR"
            value={formData.MaxHR}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Heart Rate</option>
            {Array.from({ length: 171 }, (_, i) => i + 30).map((value) => {
              let label = "";
              if (value < 60) label = "Bradycardia";
              else if (value >= 60 && value <= 100) label = "Normal";
              else label = "Tachycardia";
              return (
                <option key={value} value={value}>
                  {value} bpm - {label}
                </option>
              );
            })}
          </select>
        </div>


        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Exercise Induced Angina*</label>
          <select
            name="ExerciseAngina"
            value={formData.ExerciseAngina}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Oldpeak* (mm)</label>
          <select
            name="oldpeak"
            value={formData.oldpeak}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Oldpeak</option>
            {Array.from({ length: 61 }, (_, i) => (i * 0.1).toFixed(1)).map((value) => (
              <option key={value} value={parseFloat(value)}>
                {value} mm
              </option>
            ))}
          </select>
        </div>


        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">ST Slope*</label>
          <select
            name="ST_Slope"
            value={formData.ST_Slope}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Up-sloping">Up-sloping</option>
            <option value="Flat">Flat</option>
            <option value="Down-sloping">Down-sloping</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Number of Major Vessels* (coronaryArtery)</label>
          <select
            name="coronaryArtery"
            value={formData.coronaryArtery}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Number of Major Vessels</option>
            {Array.from({ length: 6 }, (_, i) => (
              <option key={i} value={i}>
                {i} Major Vessel{i !== 1 && 's'}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Thalassemia*</label>
          <select
            name="Thalassemia"
            value={formData.Thalassemia}
            onChange={handleChange}
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="Normal">Normal</option>
            <option value="Fixed Defect">Fixed Defect</option>
            <option value="Reversible Defect">Reversible Defect</option>
          </select>
        </div>
        <button
          type="submit"
          // href="#result"
          className="bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition md:col-span-2"
        >
          Predict
        </button>
      </form>
      {result && (
        <div className="mt-6 text-center">

          {/* <div>
            <h3 className="text-lg font-semibold">Prediction: {result?.prediction}</h3>
            <p className="text-lg">Probability: {result?.probability}%</p>
          </div> */}


        </div>


      )}

      {loading ? ( // Show spinner while loading
        <Spinner />
      ) : (
        result && (
          <div id="result" >
            <ResultSection
              Prediction={result?.prediction}
              probability={result?.probability}
            />
          </div>
        )
      )}
    </div>
  );
};

export default PredictionForm;
