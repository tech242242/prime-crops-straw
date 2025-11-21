import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <div className="logo-badge">
              <div className="wheat-icon">🌾</div>
              <span className="logo-text">Prime Crop Straw</span>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#why-choose">Why Choose Us</a>
            <a href="#industries">Industries</a>
            <a href="#process">Process</a>
            <a href="#contact" className="cta-button">Contact</a>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
