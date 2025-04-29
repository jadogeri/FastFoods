import React from 'react'

const TestsSection = () => {
  return (
    <div className="test-section" id="tests">
    <div className="container">
        <h3>TESTIMONIALS</h3>
        <div className="test-grids ">
          <div className="test-grid1 wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
            <div className="col-md-5 test-left test1">
              <img src="assets/images/p8.jpg" className="img-responsive" alt="" />
              <div className="textbox">
                <p>Aenean nonummyen</p>
                <h4>$ 09.<sup>95</sup></h4>
              </div>
              </div>
              <div className="col-md-7 test-right">
              <h4>"Suspendisse consequat purus</h4>
              <p>Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget elit semper pharetra sollicitudin id nibh. Praesent venenatis lectus ornare, porta risus quis, commodo nulla. Nunc adipiscing ipsum lacinia diam pulvinar aliquet. Mauris sit </p>
              </div>
              <div className="clearfix"> </div>
          </div>
                <div className="test-grid2 wow bounceInLeft animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
               <div className="col-md-7 test-left01">
                <h4>"Cras elementum sed mi sit</h4>
                <p>Vestibulum et consequat justo. Maecenas ultrices malesuada leo porta venenatis. Sed sit amet diam facilisis, interdum tellus nec, dignissim massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse consequat purus est, nec venenatis est sagittis in. </p>
                </div>
               <div className="col-md-5 test-right01 test1">
                <img src="assets/images/p9.jpg" className="img-responsive" alt="" />
                <div className="textbox textbox1">
                <p>Natoque penatibus</p>
                <h4>$ 19.<sup>95</sup></h4>
                </div>
                </div>
                <div className="clearfix"> </div>
                </div>
                <div className="test-grid3 wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
            <div className="col-md-5 test-left test1">
                <img src="assets/images/p10.jpg" className="img-responsive" alt="" />
                <div className="textbox">
                <p>Aenean nonummyen</p>
                <h4>$ 29.<sup>95</sup></h4>
                </div>
                </div>
                <div className="col-md-7 test-right">
                <h4>"Praesent venenatis lectus</h4>
                <p>Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget elit semper pharetra sollicitudin id nibh. Praesent venenatis lectus ornare, porta risus quis, commodo nulla. Nunc adipiscing ipsum lacinia diam pulvinar aliquet. Mauris sit </p>
                </div>
                <div className="clearfix"> </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
  )
}

export default TestsSection