import { useEffect, useState } from 'react';
import ProjectRoutes from './ProjectRoutes';
import './App.css';
import "./styles/global.css"
import React from 'react';
import $ from "jquery"
import WOW from 'wow.js';

function App() {
  const [isSlider , setIsSlider] = useState(false)
	useEffect(() => {
		if(!isSlider){
			window.slider()
			setIsSlider(true)

		}
	
		window.scrollFunction()
		window.swipebox()


		$(document).ready(function($) {
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
			});
		});
  
		new WOW().init();
		var navoffeset=$(".header-bottom").offset().top;
		console.log("value of offset ==== ", navoffeset)
		$(window).scroll(function(){
		 var scrollpos=$(window).scrollTop(); 
		 if(scrollpos >=navoffeset){
		   $(".header-bottom").addClass("fixed");
		 }else{
		   $(".header-bottom").removeClass("fixed");
		 }
		});

	})

  return (
    <ProjectRoutes />


  );
}

export default App;
