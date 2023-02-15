import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Hobbies from './components/hobbies/Hobbies'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App