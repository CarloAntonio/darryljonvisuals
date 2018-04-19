import React from "react";
import '../App.css';
import logo from '../images/logo.svg';

const sidebar = () => {
  return (
    <div>

        {/* PRELOADER */}
      	<div class="page-loader">
      		<div class="loader">Loading...</div>
      	</div>
      	{/* /PRELOADER */}

      	{/* SIDEBAR */}
      	<div class="sidebar">

      		<nav class="navbar navbar-custom font-alt">
      			<div class="navbar-header">
      				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
      					<span class="sr-only">Toggle navigation</span>
      					<span class="icon-bar"></span>
      					<span class="icon-bar"></span>
      					<span class="icon-bar"></span>
      				</button>

      				{/* YOU LOGO HERE */}
      				<a class="navbar-brand" href="index.html">
      					{/* IMAGE OR SIMPLE TEXT */}
      					<img class="light-logo" src={ logo } width="95" alt=""/>
      				</a>
      			</div>

      			<div class="collapse navbar-collapse" id="custom-collapse">

      				<ul class="nav navbar-nav">

      					<li><a href="/">Home</a></li>
      					<li><a href="/about">About</a></li>

      					<li class="dropdown">
      						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Portfolio</a>
      						<ul class="dropdown-menu" role="menu">
      							<li><a href="portfolio-single.html">Wedding 1</a></li>
      							<li><a href="portfolio-single-2.html">Wedding 2</a></li>
      							<li><a href="portfolio-single-3.html">Corporate 1</a></li>
      							<li><a href="portfolio-single-4.html">Corporate 2</a></li>
      							<li><a href="portfolio-single-5.html">Birthday 1</a></li>
      							<li><a href="portfolio-single-6.html">Birthday 2</a></li>
      						</ul>
      					</li>

      					<li><a href="contact.html">Contact</a></li>

      				</ul>
      			</div>

      		</nav>

      		{/* SOCIAL LINKS */}
      		<div class="copyright">
      			<div class="social-icons m-b-20">
      				<a href="#" target="_blank" class="fa fa-facebook facebook"></a>
      				<a href="#" target="_blank" class="fa fa-twitter twitter"></a>
      				<a href="#" target="_blank" class="fa fa-instagram instagram"></a>
      			</div>

      			<p>Darryl Baello Photography</p>
      		</div>
      		{/* /SOCIAL LINKS */}

      	</div>
      	{/* /SIDEBAR */}

    </div>
  );
}

export default sidebar;
