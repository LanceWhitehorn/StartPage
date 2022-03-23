import { useState, useEffect } from 'react'
import Clock from './components/clock'
import SearchBar from './components/searchbar'
import Typewriter from './components/typewriter'
import Weather from './components/weather/weather'

function App() {
  const name = 'Lance' // Change to your name

  // Type writer effect:
    // <Typewriter custom={true} text="What are you looking for today?" /> will use your custom text
    // <Typewriter custom={false} /> will use randomised quotes
  // Weather:
    // <Weather city='{your city}' />
  return (
    <div className="container">
      <div className="content">
        <h1><Clock /></h1>
        <h1>Hello, <b>{name}.</b></h1>
        <Typewriter custom={false} />
        <SearchBar />
        <Weather city="Sydney" />
      </div>
    </div>
  )
}

export default App
