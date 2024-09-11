import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-lg">
          Welcome to [Your Company Name] ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our heart disease prediction application and related services (the "Service"). Please read this policy carefully.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="text-lg">
          We may collect and process the following types of information:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Personal Information:</strong> Information that can identify you personally, such as your name, email address, and any other details you provide through forms or communication with us.</li>
          <li><strong>Health Information:</strong> Information related to your health that you input into our Service, including but not limited to, age, sex, chest pain type, resting blood pressure, cholesterol levels, fasting blood sugar, resting ECG, max heart rate, exercise-induced angina, oldpeak, slope of peak exercise ST segment, number of major vessels, and thalassemia.</li>
          <li><strong>Usage Data:</strong> Information about how you use our Service, including your IP address, browser type, operating system, and other usage statistics.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><strong>To Provide and Maintain Our Service:</strong> To deliver and improve the heart disease prediction service you requested.</li>
          <li><strong>To Personalize Your Experience:</strong> To tailor the content and recommendations based on your input and preferences.</li>
          <li><strong>To Communicate with You:</strong> To respond to your inquiries, provide support, and send you updates about our Service.</li>
          <li><strong>To Analyze and Improve Our Service:</strong> To monitor and analyze usage and performance metrics to enhance our Service.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as analytics or hosting services.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or if we believe in good faith that such action is necessary to comply with legal obligations, protect our rights or the rights of others, or investigate fraudulent activity.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-lg">
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Your Choices</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Access and Update:</strong> You can access and update your personal information by contacting us directly.</li>
          <li><strong>Opt-Out:</strong> You may opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in those communications.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
        <p className="text-lg">
          Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
        <p className="text-lg">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="text-lg">
          If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li><strong>Company Name:</strong> [Your Company Name]</li>
          <li><strong>Address:</strong> [Your Company Address]</li>
          <li><strong>Email Address:</strong> [Your Email Address]</li>
          <li><strong>Phone Number:</strong> [Your Phone Number]</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
