import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-badge">
                <div className="wheat-icon">🌾</div>
                <span className="logo-text">Prime Crop Straw</span>
              </div>
            </div>
            <p>
              Premium supplier of high-quality wheat straw bales for farms, 
              industries, and exporters.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#about">About Us</a>
              <a href="#products">Products</a>
              <a href="#why-choose">Why Choose Us</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <a href="#products">Wheat Straw Bales</a>
              <a href="#products">Rice Straw</a>
              <a href="#products">Crop Residue</a>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📍 Add your location</p>
              <p>📞 Add your phone</p>
              <p>📧 Add your email</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Prime Crop Straw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
