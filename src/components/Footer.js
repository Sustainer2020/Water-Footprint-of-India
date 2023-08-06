// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className='static-bottom'>
      <p className='text-center'>&copy; {new Date().getFullYear()} Made with &#10084; </p>
    </footer>
  );
};

export default Footer;
