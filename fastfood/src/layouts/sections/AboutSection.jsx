import React from 'react'
import AboutCard from '../../components/AboutCard'

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
        <div className="container">
            <h3>about us </h3>
            <div className="main wow bounceInLeft animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
                <AboutCard
                    src="assets/images/p1.jpg" title="Break Fast"
                    description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
                />
                <AboutCard
                    src="assets/images/p2.jpg" title="Lunch" className="view1"
                    description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
                />
                <AboutCard
                    src="assets/images/p3.jpg" title="Desserts"
                    description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
                />
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection