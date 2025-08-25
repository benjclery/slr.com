import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TrackMyDreamCar from './pages/TrackMyDreamCar';
import RadarB2BLeads from './pages/RadarB2BLeads';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track-my-dream-car" element={<TrackMyDreamCar />} />
        <Route path="/b2b-leads" element={<RadarB2BLeads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
  );
};

export default App;
