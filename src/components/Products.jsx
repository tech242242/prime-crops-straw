import React from 'react'

const Products = () => {
  const products = [
    {
      icon: "🌾",
      title: "Wheat Straw Bales",
      features: [
        "Clean, dust-controlled, and sun-dried",
        "Uniform bale size and weight",
        "Suitable for dairy farms, cattle feed mixing",
        "Mushroom farming and biomass use",
        "Small, medium, and large compressed options"
      ]
    },
    {
      icon: "🌿",
      title: "Rice Straw & Crop Residue",
      features: [
        "Custom orders based on season",
        "Suitable for mulching and composting",
        "Industrial applications",
        "Eco-friendly solutions"
      ]
    }
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Premium quality agricultural products tailored to your needs</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-outline">Inquire Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
