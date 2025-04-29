import React from 'react';
import AboutSection from '../layouts/sections/AboutSection';
import MenuSection from '../layouts/sections/MenuSection';
import EventsSection from '../layouts/sections/EventsSection';
import TestsSection from '../layouts/sections/TestsSection';
import ContactSection from '../layouts/sections/ContactSection';

const Home = ({
	HeaderBottom
}) => {

  return (
    <>
		<HeaderBottom />
		<link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>

		<div className="header-banner" id="head">
			<div className="content">
				<div className="service-section" id="service">
					<div className="container">
						<h2>RECEIVE GREAT FOOD AND HIGH QUALITY SERVICE</h2>
						<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						<a href="#" className="button1">learn more</a>
					</div>
				</div>
				<div className="video">
					<iframe src="https://player.vimeo.com/video/33132310" title='video' frameBorder={0}   allowFullScreen></iframe> 
				</div>

				<AboutSection />

				<MenuSection />

				<EventsSection />

				<TestsSection />

				<div className="google" id="location">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52300.033408044306!2d33.999559!3d34.987874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc513650b8f37%3A0x2497459334310f21!2sNapa+Plaza+Hotel!5e0!3m2!1sen!2sin!4v1428737227572"> </iframe>
				</div>

				<ContactSection />

			</div>
      	</div>
   	</>
  );
}

export default Home;
