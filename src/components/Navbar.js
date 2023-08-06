
import React, { useState, useEffect } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './Navbar.css'; // Create a new file Navbar.css
// import logo from "~/public/assets"

const AppNavbar = () => {
  const [navbarStyle, setNavbarStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarStyle({ backgroundColor: 'rgba(255, 255, 255, 0.8)' });
      } else {
        setNavbarStyle({ backgroundColor: 'transparent' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Navbar className='nav' data-bs-theme="dark">
        <div className='m-4 nav-bar'>
        <Navbar.Brand href="/">
        Water Footprints Of India
        </Navbar.Brand>
          <div>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/calculator">Calculator</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
          </Nav>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default AppNavbar;
