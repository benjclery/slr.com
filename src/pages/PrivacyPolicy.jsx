import React from 'react';

const PrivacyPolicy = () => {
  document.title = "Privacy Policy — Smart Life Radar";
  document.querySelector('meta[name="description"]').setAttribute("content", "How Smart Life Radar collects and protects your data.");

  return (
    <div className="container">
      <h1 className="h1">Privacy Policy</h1>
      <p>Last updated: [today’s date]</p>
      <h2>Introduction</h2>
      <h2>Data Collection</h2>
      <h2>Use of Data</h2>
      <h2>Payment Data</h2>
      <h2>Data Storage</h2>
      <h2>Your Rights</h2>
      <h2>Changes</h2>
    </div>
  );
};

export default PrivacyPolicy;
