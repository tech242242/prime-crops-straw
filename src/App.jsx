// App.jsx - Simple version
import React from 'react'
import './styles/index.css'

function App() {
  return (
    <div>
      <header style={{
        padding: '1rem', 
        background: '#2d5016', 
        color: 'white',
        position: 'fixed',
        width: '100%',
        top: 0
      }}>
        <h1>🌾 Prime Crop Straw</h1>
      </header>
      
      <main style={{
        marginTop: '80px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h2>Premium Wheat Straw Bales Supplier</h2>
        <p>Website launching soon...</p>
        <button style={{
          padding: '1rem 2rem',
          background: '#2d5016',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          Contact Us
        </button>
      </main>
    </div>
  )
}

export default App
