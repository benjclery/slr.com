import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner">
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/track-my-dream-car">Track My Dream Car</Link>
            <Link to="/b2b-leads">Radar B2B Leads</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        <p>Contact: smartliferadar@gmail.com</p>
      </footer>
    </div>
  );
};

export default Layout;
