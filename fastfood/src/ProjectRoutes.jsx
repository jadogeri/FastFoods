import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
/**  ROUTES -- AUTHFLOW **/

import Home from './pages/Home.jsx'
import NoPage from "./pages/NoPage.jsx";


const ProjectRoutes = () => {



  return (


	
	<BrowserRouter >
		<Routes >				
			<Route path="/" element={ <Home />} index /> 

			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>



  )
}



export default ProjectRoutes




