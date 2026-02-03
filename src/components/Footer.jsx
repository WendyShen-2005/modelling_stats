import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Modelling Stats • Built with React</small>
      </div>
    </footer>
  )
}

export default Footer;
