import React from 'react'

const Industries = () => {
  const industries = [
    {
      name: "Dairy & Livestock Farms",
      description: "High-quality feed and bedding solutions",
      icon: "🐄"
    },
    {
      name: "Poultry Bedding",
      description: "Clean and absorbent bedding material",
      icon: "🐔"
    },
    {
      name: "Mushroom Cultivation",
      description: "Perfect substrate for mushroom growth",
      icon: "🍄"
    },
    {
      name: "Biomass & Energy Plants",
      description: "Sustainable biomass fuel source",
      icon: "⚡"
    },
    {
      name: "Straw Boards & Packaging",
      description: "Raw material for eco-friendly products",
      icon: "📦"
    },
    {
      name: "Exporters & Traders",
      description: "Bulk supply for international markets",
      icon: "🌍"
    }
  ]

  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p>Providing solutions across multiple sectors</p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
