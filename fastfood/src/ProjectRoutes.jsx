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
	const HomeHeader
	= () => <HeaderBottom 
		testsClassName={"scroll"} testsTo={"#tests"} aboutClassName={"scroll"} aboutTo={"#about"}
		locationClassName={"scroll"} locationTo={"#location"} serviceClassName={"scroll"} serviceTo={"#service"}					  
		/>
	const OtherHeader
	= () =><HeaderBottom 
		testsClassName={""} testsTo={"/"} aboutClassName={""} aboutTo={"/"}
		locationClassName={""} locationTo={"/"} serviceClassName={""} serviceTo={"/"}					  
		/>

  return (


	
	<BrowserRouter >
		<Carousel/>
		<Routes >				
			<Route path="/" element={ <Home HeaderBottom={HomeHeader}/>} index /> 
			<Route path="/menu" element={ <Menu  HeaderBottom={OtherHeader}/>}  /> 
			<Route path="/event" element={ <Event HeaderBottom={OtherHeader}/>}  /> 
			<Route path="*" element={<NoPage />} />
			
		</Routes>
		<Footer/>
	</BrowserRouter>



  )
}



export default ProjectRoutes




