import React from 'react'

const EventCard = ({
    src,
    month,
    day,
    className,
    description


}) => {
  return (
    <div className={className}>
    <img
      src={src}
      className="img-responsive wal"
      alt=""
    />
    <div className="event-inform">
      <div className="event-info2">
        <h4>{month}</h4>
        <h5>{day}</h5>
      </div>
      <div className="event-info3">
        <p>
          {description}
        </p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
  )
}

export default EventCard