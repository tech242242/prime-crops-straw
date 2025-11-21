import React from 'react'

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Harvesting",
      description: "From selected crop fields",
      icon: "🌱"
    },
    {
      step: "02",
      title: "Cleaning & Drying",
      description: "Under natural sunlight",
      icon: "☀️"
    },
    {
      step: "03",
      title: "Baling",
      description: "With high-pressure balers",
      icon: "🏗️"
    },
    {
      step: "04",
      title: "Quality Inspection",
      description: "Rigorous quality checks",
      icon: "🔍"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Timely and secure transport",
      icon: "🚚"
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2>Our Quality Process</h2>
          <p>Ensuring premium quality at every step</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
