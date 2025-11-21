import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            Premium Wheat Straw Supplier
          </div>
          <h1 className="hero-title">
            Premium Quality
            <span className="highlight"> Wheat Straw Bales</span>
          </h1>
          <p className="hero-description">
            Trusted supplier of high-quality, clean, sun-dried wheat straw bales for farms, 
            industries, and exporters. Delivering consistency, purity, and reliable supply.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Quote
            </a>
            <a href="#products" className="btn btn-secondary">
              View Products
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Clean & Pure</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
            <div className="stat">
              <div className="stat-number">Bulk</div>
              <div className="stat-label">Orders</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="wheat-pattern"></div>
      </div>
    </section>
  )
}

export default Hero
