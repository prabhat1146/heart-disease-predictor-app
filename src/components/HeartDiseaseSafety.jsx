import React from 'react';

const HeartDiseaseSafety = () => {
  const tips = [
    {
      title: "Maintain a Healthy Diet",
      points: [
        "Balanced Diet: Include a variety of fruits, vegetables, whole grains, lean proteins (like poultry, fish, and legumes), and healthy fats (such as avocados, nuts, and olive oil).",
        "Reduce Saturated and Trans Fats: These fats can raise LDL (bad) cholesterol levels. Choose healthier fats like those found in fish and nuts instead.",
        "Limit Cholesterol and Salt: High cholesterol and sodium levels can contribute to heart disease. Opt for low-sodium options and avoid processed foods high in cholesterol and salt.",
        "Avoid Added Sugars: Excess sugar intake can lead to weight gain and increased risk of heart disease. Read labels to avoid high sugar content in foods and beverages."
      ],
      images: [
        "https://via.placeholder.com/150?text=Balanced+Diet",
        "https://via.placeholder.com/150?text=Healthy+Fats",
        "https://via.placeholder.com/150?text=Limit+Salt"
      ]
    },
    {
      title: "Exercise Regularly",
      points: [
        "Aerobic Activity: Activities like walking, running, swimming, or cycling improve cardiovascular health. Aim for at least 150 minutes of moderate exercise or 75 minutes of vigorous exercise per week.",
        "Strength Training: Incorporate exercises that build muscle strength, such as lifting weights or using resistance bands, at least twice a week.",
        "Consistency: Regular physical activity helps maintain a healthy weight, lowers blood pressure, and improves cholesterol levels."
      ],
      images: [
        "https://via.placeholder.com/150?text=Walking",
        "https://via.placeholder.com/150?text=Running",
        "https://via.placeholder.com/150?text=Cycling"
      ]
    },
    {
      title: "Avoid Smoking and Limit Alcohol",
      points: [
        "Quit Smoking: Smoking damages blood vessels, raises blood pressure, and increases heart disease risk. Seek support or cessation programs if needed.",
        "Limit Alcohol: Excessive alcohol intake can lead to high blood pressure, heart failure, and stroke. Moderation is key; for women, this means up to one drink per day, and for men, up to two drinks per day."
      ],
      images: [
        "https://via.placeholder.com/150?text=No+Smoking",
        "https://via.placeholder.com/150?text=Limit+Alcohol"
      ]
    },
    {
      title: "Manage Stress",
      points: [
        "Stress Reduction Techniques: Engage in activities that help reduce stress such as meditation, mindfulness, deep breathing exercises, and progressive muscle relaxation.",
        "Hobbies and Leisure: Pursue hobbies or activities that bring joy and relaxation, such as reading, gardening, or spending time with loved ones."
      ],
      images: [
        "https://via.placeholder.com/150?text=Meditation",
        "https://via.placeholder.com/150?text=Gardening",
        "https://via.placeholder.com/150?text=Reading"
      ]
    },
    {
      title: "Regular Health Check-ups",
      points: [
        "Monitor Key Metrics: Regularly check blood pressure, cholesterol levels, and blood sugar. These metrics are critical for detecting and managing heart disease risk.",
        "Routine Screenings: Schedule regular visits with your healthcare provider for comprehensive evaluations and follow their recommendations for preventive care."
      ],
      images: [
        "https://via.placeholder.com/150?text=Blood+Pressure",
        "https://via.placeholder.com/150?text=Cholesterol",
        "https://via.placeholder.com/150?text=Blood+Sugar"
      ]
    },
    {
      title: "Maintain a Healthy Weight",
      points: [
        "Healthy Weight Range: Aim to stay within a healthy BMI range. Being overweight or obese increases the risk of heart disease.",
        "Waist Circumference: Monitor waist size as excess abdominal fat is linked to higher heart disease risk. Men should aim for a waist circumference of less than 40 inches, and women should aim for less than 35 inches."
      ],
      images: [
        "https://via.placeholder.com/150?text=BMI",
        "https://via.placeholder.com/150?text=Waist+Circumference"
      ]
    },
    {
      title: "Control Medical Conditions",
      points: [
        "Manage Hypertension: Follow prescribed treatments and lifestyle changes to keep blood pressure within healthy ranges.",
        "Cholesterol Management: Use medications if needed and maintain a diet low in saturated fats to keep cholesterol levels in check.",
        "Diabetes Management: Monitor blood sugar levels and follow dietary and medical recommendations to control diabetes."
      ],
      images: [
        "https://via.placeholder.com/150?text=Hypertension",
        "https://via.placeholder.com/150?text=Cholesterol",
        "https://via.placeholder.com/150?text=Diabetes"
      ]
    },
    {
      title: "Stay Informed",
      points: [
        "Know the Risks: Understand the risk factors for heart disease, including family history, lifestyle factors, and personal health conditions.",
        "Recognize Symptoms: Be aware of symptoms of heart disease, such as chest pain, shortness of breath, or unusual fatigue, and seek medical attention promptly if they occur."
      ],
      images: [
        "https://via.placeholder.com/150?text=Heart+Disease+Risks",
        "https://via.placeholder.com/150?text=Symptoms"
      ]
    },
    {
      title: "Get Adequate Sleep",
      points: [
        "Quality Sleep: Aim for 7-9 hours of restful sleep per night. Poor sleep quality can contribute to obesity, high blood pressure, and increased heart disease risk.",
        "Sleep Hygiene: Maintain a regular sleep schedule, create a comfortable sleep environment, and avoid stimulants like caffeine close to bedtime."
      ],
      images: [
        "https://via.placeholder.com/150?text=Quality+Sleep",
        "https://via.placeholder.com/150?text=Sleep+Hygiene"
      ]
    },
    {
      title: "Stay Hydrated",
      points: [
        "Water Intake: Drink plenty of water throughout the day to support overall cardiovascular function and maintain optimal blood volume and circulation.",
        "Limit Sugary Drinks: Avoid excessive consumption of sugary or caffeinated beverages, which can contribute to weight gain and increased heart disease risk."
      ],
      images: [
        "https://via.placeholder.com/150?text=Hydration",
        "https://via.placeholder.com/150?text=Limit+Sugary+Drinks"
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Heart Disease Safety Tips</h1>
      {tips.map((tip, index) => (
        <div key={index} className="mb-6 p-4 border border-gray-100 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">{tip.title}</h2>
          <ul className="list-disc pl-5 space-y-3 mb-4 text-lg">
            {tip.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-4">
            {tip.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`${tip.title}  ${i + 1}`}
                className="w-24 h-24 object-cover rounded-lg border border-gray-50"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeartDiseaseSafety;
