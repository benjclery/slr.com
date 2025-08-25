import React from 'react';

const TrackMyDreamCar = () => {
  document.title = "Track My Dream Car — Classic Car Listing Finder | Smart Life Radar";
  document.querySelector('meta[name="description"]').setAttribute("content", "We track Bring a Trailer listings for your dream car and alert you fast. No login, no spam.");

  return (
    <div className="container">
      <h1 className="h1">Find your dream car faster — we track listings so you don’t have to.</h1>
      <p>Currently supporting Bring a Trailer. More platforms coming soon.</p>
      <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLScryyuEK0v5ZYwV23vcFbClbzV2ICOXqiwf_NKGuhTCI8PEyw/viewform">Get Started</a>
      <h2>How it works</h2>
      <h2>Why choose us</h2>
      <h2>Privacy & speed</h2>
      <p>Demo image — Coming soon</p>
      <p>Stripe-ready badge placeholder</p>
    </div>
  );
};

export default TrackMyDreamCar;
