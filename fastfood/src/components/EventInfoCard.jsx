import React from 'react';

const EventInfoCard = ({
    outerClassName,
    innerClassName,
    title,
    description,
    src,
    icon,
}) => {
  return (
    <div className={outerClassName}>
    <div className={innerClassName}>
        <div className={icon}>
            <img src={src} className="img-responsive" alt="" />
        </div>
        <div className={innerClassName}>
            <h4>{title} </h4>
            <p>{description}</p>
        </div>
        <div className="clearfix"> </div>
    </div>
</div>
  );
}

export default EventInfoCard;
