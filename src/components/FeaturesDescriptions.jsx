import React from 'react';

const HeartDiseaseFeatures = () => {
  const features = [
    {
      title: "Chest Pain Type",
      description: "Indicates the type of chest pain experienced.",
      image: "/assets/featuresDescriptions/21209-chest-pain.jpg",
      ranges: [
        "Normal: No chest pain or discomfort",
        "Abnormal: Mild chest pain or discomfort",
        "Severe: Intense chest pain or discomfort"
      ]
    },
    {
      title: "Resting Blood Pressure (mm Hg)",
      description: "Measures blood pressure while at rest.",
      image: "/assets/featuresDescriptions/Heart-Rate-Blood-Pressure-1479112100-770x533-1_jpg.webp",
      ranges: [
        "Normal: Below 120/80 mm Hg",
        "Abnormal: 120/80 to 139/89 mm Hg",
        "Severe: 140/90 mm Hg or higher"
      ]
    },
    {
      title: "Cholesterol",
      description: "Total cholesterol level in the blood.",
      image: "/assets/featuresDescriptions/normal-cholesterol-level.jpg",
      ranges: [
        "Normal: Below 200 mg/dL",
        "Abnormal: 200 to 239 mg/dL",
        "Severe: 240 mg/dL or higher"
      ]
    },
    {
      title: "Fasting Blood Sugar",
      description: "Blood sugar levels after fasting for at least 8 hours.",
      image: "/assets/featuresDescriptions/fasting-blood-sugar-test.jpeg",
      ranges: [
        "Normal: Below 100 mg/dL",
        "Abnormal: 100 to 125 mg/dL",
        "Severe: 126 mg/dL or higher"
      ]
    },
    {
      title: "Resting ECG",
      description: "Electrocardiogram results while at rest.",
      image: "/assets/featuresDescriptions/resting-ecg.webp",
      ranges: [
        "Normal: No abnormalities detected",
        "Abnormal: Minor abnormalities detected",
        "Severe: Significant abnormalities detected"
      ]
    },
    {
      title: "Max Heart Rate Achieved",
      description: "The maximum heart rate achieved during exercise.",
      image: "/assets/featuresDescriptions/HR_Zone_Graphic_030722.png",
      ranges: [
        "Normal: 60% to 85% of your age-predicted maximum heart rate (which is calculated as 220 minus your age)",
        "Abnormal: 50% to 59% of your age-predicted maximum heart rate",
        "Severe: Below 50% of your age-predicted maximum heart rate"
      ]
    },
    {
      title: "Exercise-Induced Angina",
      description: "Chest pain or discomfort induced by exercise.",
      image: "/assets/featuresDescriptions/Angina.jpg",
      ranges: [
        "Normal: No angina during exercise",
        "Abnormal: Mild angina during exercise",
        "Severe: Severe angina during exercise"
      ]
    },
    {
      title: "Oldpeak",
      description: "Depression of the ST segment in the ECG during exercise compared to rest.",
      image: "/assets/featuresDescriptions/ST_depression_illustration.jpg",
      ranges: [
        "Normal: No depression or minimal depression",
        "Abnormal: Moderate depression",
        "Severe: Significant depression"
      ]
    },
    {
      title: "Slope of Peak Exercise ST Segment",
      description: "The slope of the ST segment during peak exercise.",
      image: "/assets/featuresDescriptions/st-slope.png",
      ranges: [
        "Normal: Up-sloping",
        "Abnormal: Flat",
        "Severe: Down-sloping"
      ]
    },
    {
      title: "Number of Major Vessels (0-3) Colored by Fluoroscopy",
      description: "Number of major coronary vessels showing significant narrowing.",
      image: "/assets/featuresDescriptions/thi-coronary-arteries.jpg",
      ranges: [
        "Normal: 0 to 1 vessel narrowed",
        "Abnormal: 2 vessels narrowed",
        "Severe: 3 vessels narrowed"
      ]
    },
    {
      title: "Thalassemia",
      description: "Presence of thalassemia condition.",
      image: "/assets/featuresDescriptions/nutrition-thalassemia.webp",
      ranges: [
        "Normal: No thalassemia",
        "Abnormal: Fixed defect",
        "Severe: Reversible defect"
      ]
    }
  ];

  return (
    <div className="container mx-auto p-1 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">Heart Disease Risk Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-sm rounded-lg p-6 border border-gray-50 flex flex-col space-x-6 md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
            <img src={feature.image} alt={feature.title} className="h-24 mx-auto  md:h-36  object-cover rounded-lg border border-gray-50" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h2>
              <p className="mb-4 text-lg text-gray-600">{feature.description}</p>
              <ul className="list-disc pl-6 space-y-2">
                {feature.ranges.map((range, i) => (
                  <li key={i} className="text-lg text-gray-700">{range}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeartDiseaseFeatures;
