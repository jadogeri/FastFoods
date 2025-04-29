import React from 'react'

const MenuCard = ({
    className,
    dollar,
    cent,
    title,
    src

}) => {
  return (
    <div className={`col-md-3 menu-grid ${className}`}>
    <img src={src} className="img-responsive" alt="" />
    <div className="menu-info">
      <h4>
        {dollar}<sup>{cent}</sup>
      </h4>
      <h5>{title}</h5>
    </div>
  </div>
  )
}

export default MenuCard