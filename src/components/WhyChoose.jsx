import React from 'react'

const WhyChoose = () => {
  const reasons = [
    {
      title: "Premium Quality Straw",
      description: "Carefully harvested and processed to ensure the highest standards",
      icon: "⭐"
    },
    {
      title: "Reliable Supply",
      description: "Bulk orders and long-term contracts with consistent delivery",
      icon: "📦"
    },
    {
      title: "Competitive Prices",
      description: "Best value for money without compromising on quality",
      icon: "💰"
    },
    {
      title: "Clean & Well-Packed",
      description: "Easy transport and storage with proper packaging",
      icon: "✨"
    },
    {
      title: "Customer-Focused",
      description: "Fast delivery and professional coordination for your needs",
      icon: "👥"
    },
    {
      title: "Expert Support",
      description: "Technical guidance and support for optimal usage",
      icon: "🔧"
    }
  ]

  return (
    <section id="why-choose" className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Prime Crop Straw?</h2>
          <p>Excellence in every bale, commitment in every delivery</p>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
