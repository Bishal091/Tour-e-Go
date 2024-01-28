import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/MainDynamic'
import abimg from '../Assets/4.jpg'
import Footer from '../Components/Footer'

const Signup = () => {
  return (
    <div>
     <Navbar/>
    <Main 
          cName="about"
          mainImage={abimg}
          title="Connect With US"
         
          
          btnClass="hide"
          btnName=""
        />
        
        <Footer/>
    </div>
  )
}

export default Signup
