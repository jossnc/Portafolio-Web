import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home' 
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Service from './components/service/Service'
import Qualification from './components/qualifictation/Qualification'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Work from './components/work/Work'


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App


