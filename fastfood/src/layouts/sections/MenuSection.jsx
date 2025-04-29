import React from 'react'
import MenuInfoCard from '../../components/MenuInfoCard'

const MenuSection = () => {
  return (
    <div className="menu-section">
        <div className="container">
            <h3> featured menu</h3>
            <div className="menu-grids wow bounceIn animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
                <MenuInfoCard 
                    src="assets/images/p4.jpg" dollar={"$04."} cent={"99"} name={"CUM SOCIIS NATOQUE ."}            
                />
                <MenuInfoCard 
                    src="assets/images/p5.jpg" dollar={"$05."} cent={"99"} name={"Lorem ipsum dolo ."}            
                />
                <MenuInfoCard 
                    src="assets/images/p6.jpg" dollar={"$09."} cent={"99"} name={"CUM SOCIIS NATOQUE ."} className={"menu1"}           
                />
                <MenuInfoCard 
                    src="assets/images/p7.jpg" dollar={"$19."} cent={"99"} name={"Lorem ipsum dolo ."} className={"menu1"}           
                />
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
  )
}

export default MenuSection