import React , {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderBottom = ({
	serviceClassName,
	serviceTo,
	aboutClassName,
	aboutTo,
	locationClassName,
	locationTo,
	testsClassName,
	testsTo,
}) => {
  const location = useLocation();

  useEffect(() => {
    // This code will run whenever location.pathname changes
    console.log('Pathname changed:', location.pathname);
    // Perform actions based on the new pathname
  }, [location.pathname]);
  return (
	<div className="header-bottom">
			<div className="fixed-header">
			<div className="container">
				<div className="top-menu">
					<span className="menu"><img src="assets/images/nav.png" alt=""/> </span>
                     <ul>
						<nav className="cl-effect-5">
					 <li><Link  to="/"><span data-hover="Home">home</span></Link></li>
					 <li><a className={serviceClassName} href={serviceTo}><span data-hover="service">service</span></a></li>
					 <li><a className={aboutClassName} href={aboutTo}><span data-hover="about">about</span></a></li>
					 <li><Link to="/menu"><span data-hover="menus">menus</span></Link></li>
					 <li><Link  to="/event"><span data-hover="event">event</span></Link></li>
					 <li><a className={testsClassName} href={testsTo}><span data-hover="Tests">tests</span></a></li>
					 <li><a className={locationClassName} href={locationTo}><span data-hover="location">location</span></a></li>
					 </nav>
				 </ul>
		
			 </div>

				</div>
			</div>
		</div>
  );
}

export default HeaderBottom;
