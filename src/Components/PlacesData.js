import React from "react";
import "./places.css";


const PlacesData = (props) => {
  return (
   
        <div className={props.reversecName}>
          <div className="p1-text">
            <h1>{props.heading}</h1>
            <p className="prprpr">
            {props.text}
            </p>
          </div>
          <div className="imgs">
            <img src={props.image1}  alt="" />
            <img src={props.image2} alt=""  />
          </div>
        </div>
      
  )
}

export default PlacesData
