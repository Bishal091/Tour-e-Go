import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/MainDynamic'
import contactimg from '../Assets/3.jpg'
import Footer from '../Components/Footer'

import ContactPage from '../Components/ContactPage'

const Contact = () => {
  return (
    <div>
            <Navbar/>
    <Main 
          cName="contact"
          mainImage={contactimg}
          title="Contact Page"
         
          
          btnClass="hide"
          btnName=""
        />
        <ContactPage/>
        <Footer/>
    </div>
  )
}

export default Contact
