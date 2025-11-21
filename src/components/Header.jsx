import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <div className="logo-badge">
              <div className="wheat-icon">🌾</div>
              <span className="logo-text">Prime Crop Straw</span>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#why-choose" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
            <a href="#industries" onClick={() => setIsMenuOpen(false)}>Industries</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="#contact" className="cta-button" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
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
