import React from 'react'
import EventInfoCard from '../../components/EventInfoCard'

const EventsSection = () => {
  return (

    <div className="events-section">
    <div className="container">
        <h3>our events</h3>
        <div className="event-grids  wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
            <EventInfoCard
                outerClassName={"col-md-6 event-left"} innerClassName={"even-info"} icon="icon"
                src="assets/images/icon1.png" title={"dolor sit amet conse cterut "}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla "}
            />
            <EventInfoCard
                outerClassName={"col-md-6 event-right"} innerClassName={"even-info1"} icon="icon1"
                src="assets/images/icon2.png" title={"consectetur adipiscing elit "}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla "}
            />
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