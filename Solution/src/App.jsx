import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import { Solution, HowItWorks, UseCases, Results, CTABand, Contact, Footer } from './components/Sections'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <UseCases />
      <Results />
      <CTABand />
      <Contact />
      <Footer />
    </>
  )
}
