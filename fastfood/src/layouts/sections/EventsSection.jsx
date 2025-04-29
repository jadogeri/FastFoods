import React from 'react'

const EventsSection = () => {
  return (

    <div className="events-section">
    <div className="container">
        <h3>our events</h3>
        <div className="event-grids  wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
            <div className="col-md-6 event-left">
                <div className="even-info">
                <div className="icon">
                    <img src="assets/images/icon1.png" className="img-responsive" alt="" />
                    </div>
                    <div className="event-info">
                        <h4>dolor sit amet conse cterut </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla </p>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                </div>
                <div className="col-md-6 event-right">
                <div className="even-info1">
                <div className="icon1">
                    <img src="assets/images/icon2.png" className="img-responsive" alt="" />
                    </div>
                    <div className="event-info1">
                        <h4>consectetur adipiscing elit </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla </p>
                        </div>
                        <div className="clearfix"> </div>
                        </div>
                </div>
                <div className="clearfix"></div>
        </div>
        <div className="butt">
        <a href="event.html" className="button2">veiw all events</a>
        </div>
    </div>
</div>
  )
}

export default EventsSection