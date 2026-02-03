import React from 'react';

const Header = ({subtitle}) => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="brand">Modelling Stats</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </header>
  )
}

export default Header;
