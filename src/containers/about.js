import React, { Component } from "react";

//images assets
import darryl from '../../src/assets/images/misc/darryl.jpg';

class About extends Component {
	render () {
		return (

			<div className="wrapper">

				{/* HERO */}
				<section id="hero" className="module-hero bg-dark-30 js-fullheight" data-background={ darryl }>

					{/* HERO TEXT */}
					<div className="hero-caption">
						<div className="hero-text">
							<h1 className="hero-title">Darryl Jon</h1>
							<p className="hero-subtitle font-serif m-t-40">Videographer and photographer from the Bay Area, California</p>
						</div>
					</div>
					{/* /HERO TEXT */}

				</section>
				{/* /HERO */}

				<hr className="divider"/>
			</div>
		)
	}
}

export default About;
