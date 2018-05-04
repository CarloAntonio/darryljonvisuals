import React from "react";

const footer = () => {
  return (
    <div className="wrapper">

    		<footer className="footer module-overlay-dark-3">
    			<div className="container-fluid container-custom">

    				<div className="row">
    					<div className="col-sm-12">
    						<ul className="contact-info font-alt">
    							<li><a href="mailto:darryl.baello@gmail.com">darryl.baello@gmail.com</a></li>
    							<li><a href="tel:925-285-1000">1 (925) 285 1000</a></li>
    						</ul>
    						<div className="copyright text-center font-alt">
    							Copyright © 2018 <a href="http://www.carlobilbao.com">Carlo Antonio Bilbao</a>. All Rights Reserved.
    						</div>
    					</div>
    				</div>

    				{/*} SCROLLTOP */}
    				<a className="to-top-link" href="#top">
    					<i className="fa fa-angle-up"></i>
    				</a>
    			</div>
    		</footer>

    </div>
  );
}
export default footer;
