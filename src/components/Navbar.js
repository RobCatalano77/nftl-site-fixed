import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ServicesMenuItems, AboutUsMenuItems, LocationMenuItems } from './MenuItems';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownServices, setServicesDropdown] = useState(false);
  const [dropdownAboutUs, setAboutUsDropdown] = useState(false);
  const [dropdownLocations, setLocationsDropdown] = useState(false);
  const [scrolled, setScrolled]= useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      console.log("scrolled");
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (component) => {
    switch (component) {
      case "services":
        window.innerWidth < 960 ? setServicesDropdown(false) : setServicesDropdown(true);
        break;
      case "about-us":
        window.innerWidth < 960 ? setAboutUsDropdown(false) : setAboutUsDropdown(true);
        break;
      case "locations":
        window.innerWidth < 960 ? setLocationsDropdown(false) : setLocationsDropdown(true);
        break;
      default:
        console.log("invalid onMouseEnter call, default case hit.");
        break;
    }
    
  };

  const onMouseLeave = (component) => {
    switch (component) {
      case "services":
        setServicesDropdown(false);
        break;
      case "about-us":
        setAboutUsDropdown(false);
        break;
      case "locations":
        setLocationsDropdown(false);
        break;
      default:
        console.log("invalid onMouseLeave call, default case hit.");
        break;
    }
  };

  let navbarClasses=['navbar'];
  let navlogoClasses=['navbar-logo'];
  if(scrolled){
    navbarClasses.push('scrolled');
    navlogoClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(" ")}>
        <Link to='/' className={navlogoClasses.join(" ")} onClick={closeMobileMenu}>
          NFT Logistics
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li
            className='nav-item'
            onMouseEnter={() => onMouseEnter("about-us")}
            onMouseLeave={() => onMouseLeave("about-us")}
          >
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {dropdownAboutUs && <Dropdown ddList={AboutUsMenuItems} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => onMouseEnter("services")}
            onMouseLeave={() => onMouseLeave("services")}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdownServices && <Dropdown ddList={ServicesMenuItems}/>}
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => onMouseEnter("sustainability")}
            onMouseLeave={() => onMouseLeave("sustainability")}
          >
            <Link
              to='/sustainability'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sustainability
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => onMouseEnter("locations")}
            onMouseLeave={() => onMouseLeave("locations")}
          >
            <Link
              to='/locations'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Locations <i className='fas fa-caret-down' />
            </Link>
            {dropdownLocations && <Dropdown ddList={LocationMenuItems}/>}
          </li>
          <li>
            <Link
              to='/contact-us'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
