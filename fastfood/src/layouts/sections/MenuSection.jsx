import React from 'react'

const MenuSection = () => {
  return (
    <div className="menu-section">
    <div className="container">
        <h3> featured menu</h3>
        <div className="menu-grids wow bounceIn animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
            <div className="col-md-3 menu-grid">
                <img src="assets/images/p4.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                    <h4>$04.<sup>99</sup></h4>
                    <h5>CUM SOCIIS NATOQUE .</h5>
                    </div>
                </div>
                <div className="col-md-3 menu-grid ">
                <img src="assets/images/p5.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                    <h4>$05.<sup>99</sup></h4>
                    <h5>Lorem ipsum dolo .</h5>
                    </div>
                </div>
                <div className="col-md-3 menu-grid menu1 ">
                <img src="assets/images/p6.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                    <h4>$09.<sup>99</sup></h4>
                    <h5>CUM SOCIIS NATOQUE .</h5>
                    </div>
                </div>
                <div className="col-md-3 menu-grid menu1">
                <img src="assets/images/p7.jpg" className="img-responsive" alt="" />
                <div className="menu-info">
                    <h4>$19.<sup>99</sup></h4>
                    <h5>Lorem ipsum dolo .</h5>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
  )
}

export default MenuSection