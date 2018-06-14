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
  
              <div className="video-player" data-property="{ videoURL: 'https://www.youtube.com/watch?v=rmpBrEm7vuQ https://www.youtube.com/watch?v=rmpBrEm7vuQ', containment: '#hero', quality: 'large', startAt: 0, autoPlay: true,loop: true, opacity: 1, showControls: false, showYTLogo: false, vol: 0, mute: true }">
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
                      <li><a href="#" className="current" data-filter="*">All</a></li>
                      <li><a href="#" data-filter=".lifestyle">Lifestyle</a></li>
                      <li><a href="#" data-filter=".estate">Real Estate</a></li>
                      <li><a href="#" data-filter=".smedia">Social Media</a></li>
                      <li><a href="#" data-filter=".video">Videos</a></li>
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
                        subheader={item.header}
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
  
          </div>
      </div>
    );
  }
}

export default Home;
