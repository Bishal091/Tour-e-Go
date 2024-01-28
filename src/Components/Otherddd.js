import './others.css';
import React from 'react'
import './Others';
const Otherddd = (props) => {
  return (
  
    <div className="o-card">
        <div className="o-image">
            <img src={props.oimg} alt="//" />
        </div>
       <h3>{props.ohead}</h3>
       <p>{props.otext}</p>
    </div>
  
  )
}

export default Otherddd
