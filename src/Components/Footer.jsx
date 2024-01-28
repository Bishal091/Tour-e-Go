import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="top-footer">
        <div>
            <h1>TOUR-E-GO</h1>
            <p>Wander Often, Wonder Always.</p>
        </div>
        <div>
          <a href="/" target='new'> <i className='fa-brands fa-facebook-square'></i></a>
          
          <a href="mailto:bishalsinghbangari@gmail.com" target='new' > <i className='fa fa-envelope'></i></a>
          <a href="https://github.com/Bishal091" target='new'> <i className='fa-brands fa-github-square'></i></a>
          <a href="https://www.linkedin.com/in/bishal-singh-797129203/"  target='new' > <i class="fa-brands fa-linkedin" ></i></a>
        </div>
    </div>
    <div className="bottom-footer">
      <div>
        <h4>Project</h4>
        <a href="/">Blog</a>
        <a href="/">Any Link</a>
        <a href="/">Any Link</a>
        <a href="/">Liscense</a>
      </div>
      <div>
        <h4>Community</h4>
        <a href="/">Blog</a>
        <a href="/">Any Link</a>
        <a href="/">Any Link</a>
        <a href="/">Liscense</a>
      </div>
      <div>
        <h4>Help</h4>
        <a href="/">Blog</a>
        <a href="/">Any Link</a>
        <a href="/">Any Link</a>
        <a href="/">Liscense</a>
      </div>
      <div>
        <h4>Others</h4>
        <a href="/">Blog</a>
        <a href="/">Any Link</a>
        <a href="/">Any Link</a>
        <a href="/">Liscense</a>
      </div>
      
      
    </div>
    <div className='laste'><span >&copy; 2023 by Bishal Singh . All Rights Reserved &reg;</span></div>
    
      
    </div>
  )
}

export default Footer
