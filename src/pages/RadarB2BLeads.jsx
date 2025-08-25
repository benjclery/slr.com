import React from 'react';

const RadarB2BLeads = () => {
  document.title = "Radar B2B Leads — Targeted Google Maps Leads | Smart Life Radar";
  document.querySelector('meta[name="description"]').setAttribute("content", "Get verified, targeted business leads: websites, social media, emails and location. Fast and accurate.");

  return (
    <div className="container">
      <h1 className="h1">Get verified, targeted business leads.</h1>
      <p>Placeholder workflow image card.</p>
      <h2>Request Your Lead Batch</h2>
      <form action="mailto:smartliferadar@gmail.com" method="post" encType="text/plain">
        <input type="text" name="company" placeholder="Company name" required />
        <input type="text" name="contact" placeholder="Contact person (optional)" />
        <input type="email" name="email" placeholder="Email*" required />
        <input type="text" name="type" placeholder="Type of leads" />
        <input type="text" name="city" placeholder="City/zone" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <p>By submitting this form, you agree to our Privacy Policy.</p>
    </div>
  );
};

export default RadarB2BLeads;
