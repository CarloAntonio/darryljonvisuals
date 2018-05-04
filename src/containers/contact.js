import React from "react";

const contact = () => {
  return (

  	<div className="wrapper">

  		{/* GOOGLE MAP */}
  		<section className="module-map">
  			{/* ADD YOUR ADDRESS HERE */}
  			<div id="map" data-address="3 Golden Shore Long Beach, CA 90802, US"></div>
  		</section>
  		{/* /GOOGLE MAP */}

  		{/* CONTACT */}
  		<section className="module">
  			<div className="container-fluid container-custom">

  				{/* MODULE TITLE */}
  				<div className="row">
  					<div className="col-sm-6 col-sm-offset-3">
  						<h2 className="module-title font-alt">Let’s talk</h2>
  						<p className="module-subtitle">A collection of textile samples lay spread out on the table – Samsa was a travelling salesman – and above it there hung a picture that he had recently cut.</p>
  					</div>
  				</div>
  				{/* /MODULE TITLE */}

  				<div className="row">

  					<div className="col-sm-8">

  						<form id="contact-form" novalidate>
  							<div className="form-group">
  								<label className="sr-only" for="cname">Name</label>
  								<input type="text" id="name" className="form-control" name="cname" placeholder="Name*" required="" data-validation-required-message="Please enter your name."/>
  								<p className="help-block text-danger"></p>
  							</div>
  							<div className="form-group">
  								<label className="sr-only" for="cemail">Your Email</label>
  								<input type="email" id="email" name="cemail" className="form-control" placeholder="Your E-mail*" required="" data-validation-required-message="Please enter your email address."/>
  								<p className="help-block text-danger"></p>
  							</div>
  							<div className="form-group">
  								<textarea className="form-control" id="message" name="cmessage" rows="7" placeholder="Message*" required="" data-validation-required-message="Please enter your message."></textarea>
  								<p className="help-block text-danger"></p>
  							</div>
  							<div className="text-center">
  								<button type="submit" className="btn btn-block btn-round btn-dark">Submit</button>
  							</div>
  						</form>

  						{/* Ajax response */}
  						<div id="contact-response" className="ajax-response font-alt"></div>

  					</div>{/* .col-* */}

  					<div className="col-sm-4">

  						<div className="iconbox iconbox-left m-t-0 m-t-sm-40">
  							<div className="iconbox-icon">
  								<span className="icon-megaphone"></span>
  							</div>
  							<div className="iconbox-header">
  								<h4 className="iconbox-title font-alt">Say Hello</h4>
  							</div>
  							<div className="iconbox-content">
  								<p>Email: somecompany@example.com<br/>Phone: +1 234 567 89 10</p>
  							</div>
  						</div>

  						<div className="iconbox iconbox-left">
  							<div className="iconbox-icon">
  								<span className="icon-map"></span>
  							</div>
  							<div className="iconbox-header">
  								<h4 className="iconbox-title font-alt">Where to meet</h4>
  							</div>
  							<div className="iconbox-content">
  								<p>Stone Company<br/> 23 Greate Street<br/> Los Angeles, 12345 LS</p>
  							</div>
  						</div>

  					</div>{/* .col-* */}

  				</div>

  			</div>
  		</section>
  		{/* /CONTACT */}

  		<hr className="divider"/>

    </div>
  );
}

export default contact;
