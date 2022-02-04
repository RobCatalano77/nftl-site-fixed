import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/why-nft-logistics' component={WhyUs} />
        <Route path='/warehousing' component={Warehousing} />
        <Route path='/our-mission' component={OurMission} />
        <Route path='/office-space' component={OfficeSpace} />
        <Route path='/cross-docking' component={CrossDocking} />
        <Route path='/fulfillment' component={Fulfillment} />
        <Route path='/assembly-services' component={AssemblyServices} />
        <Route path='/wms-system' component={WMSSystem} />
        <Route path='/integration' component={Integration} />
        <Route path='/motion-sensor-lighting' component={MotionSensorLighting} />
        <Route path='/electric-machinery' component={ElectricMachinery} />
        <Route path='/aurora-co' component={Aurora} />
        <Route path='/dallas-tx' component={Dallas} />
        <Route path='/charlotte-nc' component={Charlotte} />
      </Switch>
    </Router>
  );
}

export default App;
