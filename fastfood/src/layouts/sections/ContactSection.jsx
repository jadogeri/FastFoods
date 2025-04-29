import React from 'react'

const ContactSection = () => {
  return (
    <div className="contact-section">
    <div className="container">
        <h3>contact us</h3>
        <div className="contact-grids wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
<div className="col-md-4 contactgrid">
    <input type="text" className="text" value=" name" onFocus={(event)=>{ event.target.value = ''}} onBlur={(event)=>{if (event.target.value  == '') {event.target.value = ' name';}}}/>
    </div>
    <div className="col-md-4 contactgrid">
    <input type="text" className="text" value="email" onFocus={(event)=>{ event.target.value = ''}} onBlur={(event)=>{if (event.target.value  == '') {event.target.value = ' email';}}}/>
    </div>
    <div className="col-md-4 contactgrid">
    <input type="text" className="text" value="phone" onFocus={(event)=>{ event.target.value = ''}} onBlur={(event)=>{if (event.target.value  == '') {event.target.value = ' phone';}}}/>
    </div>
    <div className="col-md-8 contactgrid1">
    {/* <textarea onFocus={(event)=>{if(event.target.value  == 'Your Message') {event.target.defaultValue = '';}}} onBlur={(event)=>{if (event.target.value  == '') {event.target.defaultValue = 'Your Message';}}} >Your Message</textarea> */}
    </div>
    <div className="col-md-4 contactgrid2">
    <input type="button" value="send message"/>
   </div>
   <div className="clearfix"></div>
    </div>
    </div>
    </div>
  )
}

export default ContactSection