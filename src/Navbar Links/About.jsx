import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/MainDynamic'
import abimg from '../Assets/4.jpg'
import Footer from '../Components/Footer'
import History from '../Components/History'
const About = () => {
  return (
    <div>
    <Navbar/>
    <Main 
          cName="about"
          mainImage={abimg}
          title="History & Present of Nainital"
         
          
          btnClass="hide"
          btnName=""
        />
        <History/>
        <Footer/>
      
    </div>
  )
}

export default About
