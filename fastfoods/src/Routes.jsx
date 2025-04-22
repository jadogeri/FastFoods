import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Index from './pages/Index';
import Menu from './pages/Menu';
import Event from './pages/Event';
import NoPage from './pages/NoPage';


const ProjectRoutes = () => {
  return (
	<BrowserRouter >
		<Routes >				
			<Route path="/" element={<Index/>} index /> 
			<Route path="/menu" element={ <Menu />} /> 
			<Route path="/event" element={ <Event />} /> 
			<Route path="*" element={ <NoPage />} /> 

		</Routes>
	</BrowserRouter>
  );
}

export default ProjectRoutes;
