import React from 'react'
import Banner from './components/Banner/Banner'
import Explore from './components/Explore/Explore'
import Information from './components/Information/Information'
// import Footer from './components/Footer/Footer'
import Adventure from './components/Adventure/Adventure'

const Mainpage = () => {

  return (
    <div>
      <Banner/>
      <Explore/>
      <Adventure/>
      <Information/>
      {/* <Footer/> */}
    </div>
  )
}

export default Mainpage
