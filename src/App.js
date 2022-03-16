import React from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import Aurora from './components/pages/Aurora';
import Dallas from './components/pages/Dallas';
import Charlotte from './components/pages/Charlotte';
import Sustainability from './components/pages/Sustainability';

function App() {
  /*
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  */
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/sustainability' element={<Sustainability />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/aurora-co' element={<Aurora />} />
        <Route path='/dallas-tx' element={<Dallas />} />
        <Route path='/charlotte-nc' element={<Charlotte />} />
      </Routes>
    </Router>
  );
}

export default App;
