import React from 'react'
import "./main.css"


const Main = (props) => {
  return (
    <div className={props.cName}>
    <img src={props.mainImage} style={{ width: '100%', height: '100%',objectFit:'cover' }} alt="Error Loading" />
    <div className="main-text">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <a href={props.url} className={props.btnClass}>{props.btnName}</a>
    </div>
      
    </div>
  )
}

export default Main
