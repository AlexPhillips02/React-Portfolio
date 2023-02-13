import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'

const App = () => {
  return (
    <div>
      <Header/>
      <Nav />
      <About />
      <Experience />
    </div>
  )
}

export default App