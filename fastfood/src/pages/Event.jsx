import React from 'react';
import EventCard from '../components/EventCard';

const Event = ({
  HeaderBottom
}) => {

  return (
    <>
    <HeaderBottom/>
    <link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>

<div className="header-banner head-top" id="head">

  <div className="content">
    <div className="event-section1">
      <div className="container">
        <h3>upcoming events</h3>
        <div className="event-grids">
          <div
            className="col-md-6 eventleft-grid  wow bounceInRight animated"
            data-wow-delay="0.4s"
            style={{ visibility: "visible", WebkitAnimationDelay: 0.4 }}
          >
            <EventCard
              className={"event-grid1"} src="assets/images/img5.jpg"
              month={"October"} day={"09"} description={"Mullam convallis justo a vestibulum interdum ipsum mauris lobortis urna"}

            />
            <EventCard
              className={"event-grid2"} src="assets/images/img6.jpg"
              month={"January"} day={"10"} description={"Aenean ac leo eget nunc fringilla a non nulla nunc orci mi venenatis quis"}

            />
            <EventCard
              className={"event-grid3"} src="assets/images/img7.jpg"
              month={"June"} day={"29"} description={"Mullam convallis justo a vestibulum interdum ipsum mauris  lobortis urna"}

            />
 
          </div>
          <div
            className="col-md-6 eventright-grid  wow bounceInLeft animated"
            data-wow-delay="0.4s"
            style={{ visibility: "visible", WebkitAnimationDelay: 0.4 }}
          >
            <EventCard
              className={"event-grid1"} src="assets/images/img8.jpg"
              month={"October"} day={"29"} description={`Proin eu purus sapien eu accumsan dolor unc` +
                `iaculis ligula eget massa${" "}`}

            />
            <EventCard
              className={"event-grid2"} src="assets/images/img9.jpg"
              month={"August"} day={"19"} description={"Felis augue dignissim in tempus eget cursus sit"+
                "amet sem cras vehicula"}

            />
            <EventCard
              className={"event-grid3"} src="assets/images/img10.jpg"
              month={"September"} day={"09"} description={`Convallis justo a vestibulum interdum ipsum` +` mauris lobortis urna in fringilla${" "}`}

            />

          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>

</div>
</>

  )
}

export default Event