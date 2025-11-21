import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Prime Crop Straw</h2>
          <p>Your trusted partner for premium agricultural solutions</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Prime Crop Straw is a trusted supplier of high-quality wheat straw bales 
              for farms, industries, and exporters. We specialize in providing clean, 
              sun-dried, tightly-packed bales sourced from fertile crop fields.
            </p>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">🌾</div>
                <h3>Premium Quality</h3>
                <p>Carefully harvested and processed wheat straw</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🚚</div>
                <h3>Reliable Supply</h3>
                <p>Bulk orders and long-term contracts available</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💰</div>
                <h3>Competitive Prices</h3>
                <p>Best value for your investment</p>
              </div>
              <div className="feature">
                <div className="feature-icon">📦</div>
                <h3>Well-Packed</h3>
                <p>Easy transport and storage solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
