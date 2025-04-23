import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Carousel from "./components/Carousel.jsx";
import HeaderBottom from "./layouts/HeaderBottom.jsx";
/**  ROUTES -- AUTHFLOW **/

import Home from './pages/Home.jsx'
import Event from "./pages/Event.jsx";
import Menu from "./pages/Menu.jsx";
import NoPage from "./pages/NoPage.jsx";
import Footer from "./layouts/Footer.jsx";


const ProjectRoutes = () => {



  return (


	
	<BrowserRouter basename="fastfoods/fastfood" >
		<Carousel/>
		<Routes >				
			<Route path="/" element={ <Home HeaderBottom={HeaderBottom}/>} index /> 
			<Route path="/menu" element={ <Menu  HeaderBottom={HeaderBottom}/>}  /> 
			<Route path="/event" element={ <Event HeaderBottom={HeaderBottom}/>}  /> 
			<Route path="*" element={<NoPage />} />
			
		</Routes>
		<Footer/>
	</BrowserRouter>



  )
}



export default ProjectRoutes




