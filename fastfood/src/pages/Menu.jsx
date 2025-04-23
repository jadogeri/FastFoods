import React from 'react';

const Menu = ({
  HeaderBottom
}) => {

  return (
    <>
    <HeaderBottom/>
<link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>

    <div className="header-banner head-top" id="head">
    <div className="content">
      <div className="menu-section1">
        <div className="container">
          <h3> featured menu</h3>
          <div
            className="menu-grids wow bounceIn animated"
            data-wow-delay="0.4s"
            style={{ visibility: "visible", WebkitAnimationDelay: 0.4 }}
          >
            <div className="top-menu">
              <div className="col-md-3 menu-grid">
                <img src="assets/images/p4.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $04.<sup>99</sup>
                  </h4>
                  <h5>CUM SOCIIS NATOQUE .</h5>
                </div>
              </div>
              <div className="col-md-3 menu-grid">
                <img src="assets/images/p5.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $05.<sup>99</sup>
                  </h4>
                  <h5>Lorem ipsum dolo .</h5>
                </div>
              </div>
              <div className="col-md-3 menu-grid menu1 ">
                <img src="assets/images/p6.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $06.<sup>99</sup>
                  </h4>
                  <h5>CUM SOCIIS NATOQUE .</h5>
                </div>
              </div>
              <div className="col-md-3 menu-grid menu1 ">
                <img src="assets/images/p7.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $07.<sup>99</sup>
                  </h4>
                  <h5>Lorem ipsum dolo .</h5>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="bottom-menu">
              <div className="col-md-3 menu-grid">
                <img src="assets/images/img1.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $04.<sup>99</sup>
                  </h4>
                  <h5>CUM SOCIIS NATOQUE .</h5>
                </div>
              </div>
              <div className="col-md-3 menu-grid">
                <img src="assets/images/img2.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $09.<sup>99</sup>
                  </h4>
                  <h5>Lorem ipsum dolo .</h5>
                </div>
              </div>
              <div className="col-md-3 menu-grid menu1 ">
                <img src="assets/images/img3.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $19.<sup>99</sup>
                  </h4>
                  <h5>CUM SOCIIS NATOQUE .</h5>
                </div>
              </div>
              <div className="col-md-3 menu-grid menu1 ">
                <img src="assets/images/img4.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                  <h4>
                    $29.<sup>99</sup>
                  </h4>
                  <h5>Lorem ipsum dolo .</h5>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
    {/* <div className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="social-icons">
            <a href="#">
              <i className="icon4" />
            </a>
            <a href="#">
              <i className="icon5" />
            </a>
            <a href="#">
              <i className="icon6" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {" "}
            Copyright ©2015 All rights Reserved | Design by
            <a href="http://w3layouts.com" target="target_blank">
              W3Layouts
            </a>
          </p>
        </div>
        <a
          className="scroll"
          href="#head"
          id="toTop"
          style={{ display: "block" }}
        >
          {" "}
          <span id="toTopHover" style={{ opacity: 1 }}>
            {" "}
          </span>
        </a>
      </div>
    </div> */}
  </div>
  </>
  
  )
}

export default Menu