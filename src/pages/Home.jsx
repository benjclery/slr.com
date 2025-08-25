import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <h1 className="h1">Automation that saves time.</h1>
      <p className="p">For car enthusiasts and B2B teams. Data-driven services, privacy-first.</p>
      <div className="grid grid-2">
        <div className="card">
          <h2>Service 1</h2>
          <p>• Bullet point 1</p>
          <p>• Bullet point 2</p>
          <p>• Bullet point 3</p>
        </div>
        <div className="card">
          <h2>Service 2</h2>
          <p>• Bullet point 1</p>
          <p>• Bullet point 2</p>
          <p>• Bullet point 3</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
