import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/MainDynamic'
import serimg from '../Assets/5.jpg'
import Footer from '../Components/Footer'
import Seva from '../Components/Seva'


const Service = () => {
  return (
    <div>
        <Navbar/>
    <Main 
          cName="service"
          mainImage={serimg}
          title="Your Command, My Service !"
         
          
          btnClass="hide"
          btnName=""
        />
        <Seva/>
        <Footer/>
      
    </div>
  )
}

export default Service
