import React, { Component } from "react";

//components
import PortfolioItem from '../components/PortfolioItem/PortfolioItem';

//data
import cover from '../data/cover';
import estate from '../data/estate';
import lifestyle from '../data/lifestyle';
import social from '../data/social';

class Home extends Component {
  
  //Fisher-Yates Shuffle algorithm: http://sedition.com/perl/javascript-fy.html
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render () {

    //combine all data
    const allData = [...cover, ...estate, ...lifestyle, ...social];

    //shuffle data
    const shuffledData = this.shuffle(allData);


    return (
      <div>
  
          {/* WRAPPER */}
          <div className="wrapper">
  
            {/* HERO */}
            <section id="hero" className="module-hero bg-dark-30 js-fullheight" data-background="https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/misc/drone.jpg">
  
              {/* HERO TEXT */}
              <div className="hero-caption">
                <div className="hero-text">
                  <h1 className="m-b-30">Darryl Jon Visuals</h1>
                  <h6 className="m-b-60">Videographer. Content Creater. Photographer. </h6>
                </div>
              </div>
              {/* /HERO TEXT */}
  
              <div className="video-player" data-property="{ videoURL: 'https://www.youtube.com/watch?v=rmpBrEm7vuQ', containment: '#hero', quality: 'large', startAt: 0, autoPlay: true,loop: true, opacity: 1, showControls: false, showYTLogo: false, vol: 0, mute: true }">
              </div>
  
            </section>
            {/* /HERO */}
  
            {/* PORTFOLIO */}
            <section id="portfolio" className="module-sm">
              <div className="container-fluid">
  
                {/* FILTERS */}
                <div className="row">
                  <div className="col-sm-12">
                    <ul id="filters" className="filters font-alt">
                      <li><a href="#" data-filter=".video">Videos</a></li>
                      <li><a href="#" data-filter=".smedia">Social Media</a></li>
                      <li><a href="#" data-filter=".lifestyle">Lifestyle</a></li>
                      <li><a href="#" data-filter=".estate">Real Estate</a></li>
                      <li><a href="#" className="current" data-filter="*">All</a></li>
                    </ul>
                  </div>
                </div>
                {/* /FILTERS */}
  
                <div className="works-grid-wrapper">
  
                  <div id="works-grid" className="works-grid works-grid-gutter">

                    {shuffledData.map(item => {
                      return <PortfolioItem 
                        key={item.full}
                        header={item.header}
                        subheader={item.subheader}
                        thumb={item.thumb}
                        full={item.full}
                        type={item.type}
                        popup={item.popup}/>
                    })}
  
                  </div>
  
                </div>{/* works-grid-wrapper */}
              </div>
            </section>
            {/* /PORTFOLIO */}

            <hr className="divider"/>

            {/* TEAM */}
            <section className="module">
                <div className="container-fluid container-custom">

                  {/* MODULE TITLE */}
                  <div className="row">
                      <div className="col-sm-6 col-sm-offset-3">
                          <h2 className="module-title font-alt">A Short Intro</h2>
                          <p className="module-subtitle">Videographer and photographer from the Bay Area focusing on capturing life moments and creating social media content.</p>
                      </div>
                  </div>
                  {/* /MODULE TITLE */}

                  <div className="row">

                      {/* TEAM MEMBER */}
                      <div className="col-sm-6 col-sm-offset-3">
                          <div className="team-item m-b-sm-40">
                              <img src="https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/misc/intro.jpg" alt="Darryl Jon Baello"/>
                              <div className="team-inner">
                                  <h4 className="team-name font-alt">Darryl Jon Baello</h4>
                                  <span className="team-role font-serif">Videographer and Photographer</span>
                              </div>
                          </div>
                      </div>
                      {/* /TEAM MEMBER */}

                  </div>{/* .row */}

                </div>
            </section>
            {/* /TEAM */}
  
          <hr className="divider"/>


          </div>
      </div>
    );
  }
}

export default Home;
