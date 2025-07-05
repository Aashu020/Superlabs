import React from 'react'
import Navbar from '../components/Navbar'
import Mainsec from '../components/Mainsec'
import Videoplay from '../components/Videoplay'
import Desc from '../components/Desc'
import Content from '../components/Content'
import About from '../components/About'
import Connection from '../components/Connection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className='md:px-[3rem]'>
      <Navbar />
      </div>
      <Mainsec/>
      <Videoplay/>
      <Desc/>
      <Content/>
      <About/>
      <Connection/>
      <Footer/>
    </div>
  )
}

export default Home