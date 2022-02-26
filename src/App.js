import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import WhyUs from './components/pages/WhyUs';
import OurMission from './components/pages/OurMission';
import Warehousing from './components/pages/Warehousing';
import OfficeSpace from './components/pages/OfficeSpace';
import CrossDocking from './components/pages/CrossDocking';
import Fulfillment from './components/pages/Fulfillment';
import AssemblyServices from './components/pages/AssemblyServices';
import WMSSystem from './components/pages/WMSSystem';
import Integration from './components/pages/Integration';
import MotionSensorLighting from './components/pages/MotionSensorLighting';
import ElectricMachinery from './components/pages/ElectricMachinery';
import Aurora from './components/pages/Aurora';
import Dallas from './components/pages/Dallas';
import Charlotte from './components/pages/Charlotte';

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

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/why-nft-logistics' element={<WhyUs />} />
        <Route path='/warehousing' element={<Warehousing />} />
        <Route path='/our-mission' element={<OurMission />} />
        <Route path='/office-space' element={<OfficeSpace />} />
        <Route path='/cross-docking' element={<CrossDocking />} />
        <Route path='/fulfillment' element={<Fulfillment />} />
        <Route path='/assembly-services' element={<AssemblyServices />} />
        <Route path='/wms-system' element={<WMSSystem />} />
        <Route path='/integration' element={<Integration />} />
        <Route path='/motion-sensor-lighting' element={<MotionSensorLighting />} />
        <Route path='/electric-machinery' element={<ElectricMachinery />} />
        <Route path='/aurora-co' element={<Aurora />} />
        <Route path='/dallas-tx' element={<Dallas />} />
        <Route path='/charlotte-nc' element={<Charlotte />} />
      </Routes>
    </Router>
  );
}

export default App;
