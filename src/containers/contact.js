import React from "react";

const contact = () => {
  return (

  	<div class="wrapper">

  		{/* GOOGLE MAP */}
  		<section class="module-map">
  			{/* ADD YOUR ADDRESS HERE */}
  			<div id="map" data-address="3 Golden Shore Long Beach, CA 90802, US"></div>
  		</section>
  		{/* /GOOGLE MAP */}

  		{/* CONTACT */}
  		<section class="module">
  			<div class="container-fluid container-custom">

  				{/* MODULE TITLE */}
  				<div class="row">
  					<div class="col-sm-6 col-sm-offset-3">
  						<h2 class="module-title font-alt">Let’s talk</h2>
  						<p class="module-subtitle">A collection of textile samples lay spread out on the table – Samsa was a travelling salesman – and above it there hung a picture that he had recently cut.</p>
  					</div>
  				</div>
  				{/* /MODULE TITLE */}

  				<div class="row">

  					<div class="col-sm-8">

  						<form id="contact-form" novalidate>
  							<div class="form-group">
  								<label class="sr-only" for="cname">Name</label>
  								<input type="text" id="name" class="form-control" name="cname" placeholder="Name*" required="" data-validation-required-message="Please enter your name."/>
  								<p class="help-block text-danger"></p>
  							</div>
  							<div class="form-group">
  								<label class="sr-only" for="cemail">Your Email</label>
  								<input type="email" id="email" name="cemail" class="form-control" placeholder="Your E-mail*" required="" data-validation-required-message="Please enter your email address."/>
  								<p class="help-block text-danger"></p>
  							</div>
  							<div class="form-group">
  								<textarea class="form-control" id="message" name="cmessage" rows="7" placeholder="Message*" required="" data-validation-required-message="Please enter your message."></textarea>
  								<p class="help-block text-danger"></p>
  							</div>
  							<div class="text-center">
  								<button type="submit" class="btn btn-block btn-round btn-dark">Submit</button>
  							</div>
  						</form>

  						{/* Ajax response */}
  						<div id="contact-response" class="ajax-response font-alt"></div>

  					</div>{/* .col-* */}

  					<div class="col-sm-4">

  						<div class="iconbox iconbox-left m-t-0 m-t-sm-40">
  							<div class="iconbox-icon">
  								<span class="icon-megaphone"></span>
  							</div>
  							<div class="iconbox-header">
  								<h4 class="iconbox-title font-alt">Say Hello</h4>
  							</div>
  							<div class="iconbox-content">
  								<p>Email: somecompany@example.com<br/>Phone: +1 234 567 89 10</p>
  							</div>
  						</div>

  						<div class="iconbox iconbox-left">
  							<div class="iconbox-icon">
  								<span class="icon-map"></span>
  							</div>
  							<div class="iconbox-header">
  								<h4 class="iconbox-title font-alt">Where to meet</h4>
  							</div>
  							<div class="iconbox-content">
  								<p>Stone Company<br/> 23 Greate Street<br/> Los Angeles, 12345 LS</p>
  							</div>
  						</div>

  					</div>{/* .col-* */}

  				</div>

  			</div>
  		</section>
  		{/* /CONTACT */}

  		<hr class="divider"/>

    </div>
  );
}

export default contact;
