import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

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
      <Navbar className='nav' style={navbarStyle} data-bs-theme="dark" expand="lg">
        <div className='m-4 nav-bar d-flex justify-content-between align-items-center'>
          <Navbar.Brand href="/">
            Water Footprints Of India
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/calculator">Calculator</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default AppNavbar;