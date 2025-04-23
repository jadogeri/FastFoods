import React from 'react'

const Slides = ({
    src
}) => {
  return (
    <li>
        <img src={src} alt=""/>
        <div className="caption wow bounceIn animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}} >
            <div className="logo">
                <a href="/login">Fast Food</a>
            </div>
            <h3>Restaurant</h3>
        </div>
    </li>
  )
}

export default Slides