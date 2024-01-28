import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/MainDynamic'
import Places from '../Components/Places'
import Others from '../Components/Others'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
        <Main 
          cName="main"
          mainImage="main.jpg"
          title="Nainital Unveiled"
          desc=""
          url=""
          btnClass="hide"
          btnName=""
        />
    <Places/>
    <Others/>
    <Footer/>
        
    </>
  )
}

export default Home
