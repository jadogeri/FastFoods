import React from 'react';
import MenuCard from '../components/MenuCard';

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
              <MenuCard 
                src="assets/images/p4.jpg" dollar={"$04."} cent={"99"} title={"CUM SOCIIS NATOQUE ."}
              />
              <MenuCard 
                src="assets/images/p5.jpg" dollar={"$05."} cent={"99"} title={"Lorem ipsum dolo ."}
              />
              <MenuCard 
                src="assets/images/p6.jpg" dollar={"$06."} cent={"99"} title={"CUM SOCIIS NATOQUE ."} className={"menu1"}
              />
              <MenuCard 
                src="assets/images/p7.jpg" dollar={"$07."} cent={"99"} title={"Lorem ipsum dolo ."} className={"menu1"}
              />

              <div className="clearfix" />
            </div>
            <div className="bottom-menu">
              <MenuCard 
                src="assets/images/img1.jpg" dollar={"$04."} cent={"99"} title={"CUM SOCIIS NATOQUE ."} 
              />
              <MenuCard 
                src="assets/images/img2.jpg" dollar={"$09."} cent={"99"} title={"Lorem ipsum dolo ."} 
              />
              <MenuCard 
                src="assets/images/img3.jpg" dollar={"$19."} cent={"99"} title={"CUM SOCIIS NATOQUE ."} className={"menu1"}
              />
              <MenuCard 
                src="assets/images/img4.jpg" dollar={"$29."} cent={"99"} title={"Lorem ipsum dolo ."} className={"menu1"}
              />

              <div className="clearfix" />
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

export default Menu