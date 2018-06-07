import React from "react";
import '../App.css';
import logo from '../images/djv2.png';

const sidebar = () => {
  return (
    <div>

        {/* PRELOADER */}
      	<div className="page-loader">
      		<div className="loader">Loading...</div>
      	</div>
      	{/* /PRELOADER */}

      	{/* SIDEBAR */}
      	<div className="sidebar">

      		<nav className="navbar navbar-custom font-alt">
      			<div className="navbar-header">
      				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
      					<span className="sr-only">Toggle navigation</span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      					<span className="icon-bar"></span>
      				</button>

      				{/* YOU LOGO HERE */}
      				<a className="navbar-brand" href="index.html">
      					{/* IMAGE OR SIMPLE TEXT */}
      					<img className="light-logo" src={ logo } width="200" alt=""/>
      				</a>
      			</div>

      			<div className="collapse navbar-collapse" id="custom-collapse">

      				<ul className="nav navbar-nav">

      					<li><a href="/">Home</a></li>
      					<li><a href="/about">About</a></li>

                {/* <li className="dropdown">
      						<a href="/portfolio" className="dropdown-toggle" data-toggle="dropdown">Lifestyle</a>
      						<ul className="dropdown-menu" role="menu">
      							<li><a href="portfolio-single.html">Photography</a></li>
      							<li><a href="portfolio-single-2.html">Videography</a></li>
      						</ul>
      					</li>

                <li className="dropdown">
      						<a href="/portfolio" className="dropdown-toggle" data-toggle="dropdown">Real Estate</a>
      						<ul className="dropdown-menu" role="menu">
                  <li><a href="portfolio-single.html">Photography</a></li>
                  <li><a href="portfolio-single-2.html">Videography</a></li>
      						</ul>
      					</li>

                <li className="dropdown">
      						<a href="/portfolio" className="dropdown-toggle" data-toggle="dropdown">Social Media</a>
      						<ul className="dropdown-menu" role="menu">
                  <li><a href="portfolio-single.html">Photography</a></li>
                  <li><a href="portfolio-single-2.html">Videography</a></li>
      						</ul>
      					</li> */}

      					<li><a href="/contact">Contact</a></li>

      				</ul>
      			</div>

      		</nav>

      		{/* SOCIAL LINKS */}
      		<div className="copyright">
      			<div className="social-icons m-b-20">
      				<a href="https://www.instagram.com/darryljon" target="_blank" rel="noopener noreferrer" className="fa fa-instagram instagram"></a>
      			</div>

      			<p>Darryl Jon Visuals</p>
      		</div>
      		{/* /SOCIAL LINKS */}

      	</div>
      	{/* /SIDEBAR */}

    </div>
  );
}

export default sidebar;
