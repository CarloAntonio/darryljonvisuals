import React from "react";

const about = () => {

	const darryl = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/misc/darryl.jpg"

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
  	);
}

export default about;
