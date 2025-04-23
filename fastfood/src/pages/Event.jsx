import React from 'react';

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
            <div className="event-grid1">
              <img
                src="assets/images/img5.jpg"
                className="img-responsive wal"
                alt=""
              />
              <div className="event-inform">
                <div className="event-info2">
                  <h4>October</h4>
                  <h5>09</h5>
                </div>
                <div className="event-info3">
                  <p>
                    Mullam convallis justo a vestibulum interdum ipsum mauris
                    lobortis urna
                  </p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="event-grid2">
              <img src="assets/images/img6.jpg" className="img-responsive" alt="" />
              <div className="event-inform">
                <div className="event-info2">
                  <h4>January</h4>
                  <h5>19</h5>
                </div>
                <div className="event-info3">
                  <p>
                    Aenean ac leo eget nunc fringilla a non nulla nunc orci mi
                    venenatis quis
                  </p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="event-grid3">
              <img src="assets/images/img7.jpg" className="img-responsive " alt="" />
              <div className="event-inform">
                <div className="event-info2">
                  <h4>june</h4>
                  <h5>29</h5>
                </div>
                <div className="event-info3">
                  <p>
                    Mullam convallis justo a vestibulum interdum ipsum mauris
                    lobortis urna
                  </p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 eventright-grid  wow bounceInLeft animated"
            data-wow-delay="0.4s"
            style={{ visibility: "visible", WebkitAnimationDelay: 0.4 }}
          >
            <div className="event-grid1">
              <img src="assets/images/img8.jpg" className="img-responsive" alt="" />
              <div className="event-inform">
                <div className="event-info2">
                  <h4>October</h4>
                  <h5>29</h5>
                </div>
                <div className="event-info3">
                  <p>
                    Proin eu purus sapien eu accumsan dolor unc iaculis ligula
                    eget massa{" "}
                  </p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="event-grid2">
              <img src="assets/images/img9.jpg" className="img-responsive" alt="" />
              <div className="event-inform">
                <div className="event-info2">
                  <h4>august</h4>
                  <h5>19</h5>
                </div>
                <div className="event-info3">
                  <p>
                    Felis augue dignissim in tempus eget cursus sit amet sem
                    cras vehicula
                  </p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="event-grid3">
              <img src="assets/images/img10.jpg" className="img-responsive" alt="" />
              <div className="event-inform">
                <div className="event-info2">
                  <h4>september</h4>
                  <h5>09</h5>
                </div>
                <div className="event-info3">
                  <p>
                    Convallis justo a vestibulum interdum ipsum mauris lobortis
                    urna in fringilla{" "}
                  </p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
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