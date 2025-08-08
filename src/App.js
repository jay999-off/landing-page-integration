// import ContactUs from "./components/contact-us";
// import React from 'react';  
import Home from "./components/home";
import ContactUs from "./components/contact-us";  
import AboutUs from "./components/about-us";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      
    </Router>
  );
} 
export default App; 