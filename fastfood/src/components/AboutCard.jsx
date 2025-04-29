import React from 'react'

const AboutCard = ({
    className,
    src,
    title,
    description
}) => {
  return (
    <div className={`view view-fourth ${className}`}>
        <img src={src} />      
        <div className="mask">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default AboutCard