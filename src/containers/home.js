import React from "react";
import test from "../images/social/target.jpg";

const home = () => {
  return (
    <div>

        {/* WRAPPER */}
        <div className="wrapper">

          {/* HERO */}
          <section id="hero" className="module-hero bg-dark-30 js-fullheight" data-background="assets/images/module-4.jpg">

            {/* HERO TEXT */}
            <div className="hero-caption">
              <div className="hero-text">
                <h1 className="m-b-30">Darryl Baello</h1>
                <h6 className="m-b-60">Freelance. Photographer. Videographer</h6>
              </div>
            </div>
            {/* /HERO TEXT */}

            <div className="video-player" data-property="{ videoURL: 'https://www.youtube.com/watch?v=1x3QBgWmCgE', containment: '#hero', quality: 'large', startAt: 0, autoPlay: true,loop: true, opacity: 1, showControls: false, showYTLogo: false, vol: 0, mute: true }">
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
                  </ul>
                </div>
              </div>
              {/* /FILTERS */}

              <div className="works-grid-wrapper">

                <div id="works-grid" className="works-grid works-grid-gutter">

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ test } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Montures</h3>
                        <span className="work-category font-serif"><a href="#">Travel, Video</a></span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=0lDSvAVc5i4" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item fashion">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src="assets/images/portfolio-8.jpg" alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Rambler & Co</h3>
                        <span className="work-category font-serif"><a href="#">Fashion</a></span>
                      </div>
                      <a href="portfolio-single-1.html" className="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item music">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src="assets/images/portfolio-2.jpg" alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Pink Lips</h3>
                        <span className="work-category font-serif"><a href="#">Music</a></span>
                      </div>
                      <a href="portfolio-single-1.html" className="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item fashion">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src="assets/images/portfolio-3.jpg" alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Brother</h3>
                        <span className="work-category font-serif"><a href="#">Fashion</a></span>
                      </div>
                      <a href="portfolio-single-1.html" className="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item travel">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src="assets/images/portfolio-4.jpg" alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Travel Bags</h3>
                        <span className="work-category font-serif"><a href="#">Travel</a></span>
                      </div>
                      <a href="portfolio-single-1.html" className="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item music">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src="assets/images/portfolio-5.jpg" alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Workshop</h3>
                        <span className="work-category font-serif"><a href="#">Music</a></span>
                      </div>
                      <a href="portfolio-single-1.html" className="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item travel">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src="assets/images/portfolio-6.jpg" alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">The Handkerchief</h3>
                        <span className="work-category font-serif"><a href="#">Travel</a></span>
                      </div>
                      <a href="portfolio-single-1.html" className="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item fashion">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src="assets/images/portfolio-7.jpg" alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif"><a href="#">Fashion</a></span>
                      </div>
                      <a href="portfolio-single-1.html" className="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                </div>

              </div>{/* works-grid-wrapper */}

              {/* SHOW MORE */}
              <div className="row">
                <div className="col-sm-12">

                  <div className="m-t-70 text-center">
                    <button id="show-more" className="btn btn-dark show-more">More works</button>
                  </div>

                </div>
              </div>
              {/* /SHOW MORE */}

            </div>
          </section>
          {/* /PORTFOLIO */}

          <hr className="divider"/>

        </div>


    </div>
  );
}

export default home;
