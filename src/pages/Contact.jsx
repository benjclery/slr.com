import React from 'react';

const Contact = () => {
  document.title = "Contact — Smart Life Radar";
  document.querySelector('meta[name="description"]').setAttribute("content", "Contact Smart Life Radar for services, collaborations, or support.");

  return (
    <div className="container">
      <h1 className="h1">Contact Us</h1>
      <form action="mailto:smartliferadar@gmail.com" method="post" encType="text/plain">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Smart Life Radar is a digital service provider. All services are delivered online. No physical office.</p>
    </div>
  );
};

export default Contact;
