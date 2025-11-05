import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardManagement from './components/DashboardManagement'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DashboardManagement />
      <Features />
      <HowItWorks />
      <UseCases />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App

