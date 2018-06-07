import React from "react";

import estate1 from "../images/home/estates/estate1.jpg";
import estate2 from "../images/home/estates/estate2.jpg";
import estate3 from "../images/home/estates/estate3.jpg";
import estate4 from "../images/home/estates/estate4.jpg";
import estate5 from "../images/home/estates/estate5.jpg";
import estate6 from "../images/home/estates/estate6.jpg";
import estate7 from "../images/home/estates/estate7.jpg";

import life1 from "../images/home/lifestyle/life1.jpg";
import life3 from "../images/home/lifestyle/life3.jpg";
import life4 from "../images/home/lifestyle/life4.jpg";
import life5 from "../images/home/lifestyle/life5.jpg";
import life6 from "../images/home/lifestyle/life6.jpg";
import life7 from "../images/home/lifestyle/life7.jpg";
import life9 from "../images/home/lifestyle/life9.jpg";

import social1 from "../images/home/social/social1.jpg";
import social2 from "../images/home/social/social2.jpg";
import social3 from "../images/home/social/social3.jpg";
import social4 from "../images/home/social/social4.jpg";
import social5 from "../images/home/social/social5.jpg";
import social6 from "../images/home/social/social6.jpg";


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
                <h1 className="m-b-30">Darryl Jon Visuals</h1>
                <h6 className="m-b-60">Videographer. Content Creater. Photographer. </h6>
              </div>
            </div>
            {/* /HERO TEXT */}

            <div className="video-player" data-property="{ videoURL: 'https://www.youtube.com/watch?v=eHpbIvMcWQ4', containment: '#hero', quality: 'large', startAt: 0, autoPlay: true,loop: true, opacity: 1, showControls: false, showYTLogo: false, vol: 0, mute: true }">
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

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ social6 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">@gotfrenchie</h3>
                        <span className="work-category font-serif">Model, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=0lDSvAVc5i4" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ life6 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Jay & Krystle</h3>
                        <span className="work-category font-serif">Wedding</span>
                      </div>
                      <a href={ life6 } className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ estate2 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Real Estate</h3>
                        <span className="work-category font-serif">Real Estate</span>
                      </div>
                      <a href={ estate2 } className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ social4 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Brother</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ social4 } className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ life3 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Patrick & Maria</h3>
                        <span className="work-category font-serif">Wedding</span>
                      </div>
                      <a href={ life3 } className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ social5 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">@JOhio</h3>
                        <span className="work-category font-serif">Fitness, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=os_vYgTvzuY" className="work-link popup-youtube"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ life1 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Carlo Bilbao</h3>
                        <span className="work-category font-serif">Website Assets</span>
                      </div>
                      <a href={ life1 } className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ estate5 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Real Estate</span>
                      </div>
                      <a href={ estate5 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ estate3 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ estate3 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ social2 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ social2 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ life4 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ life4 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ estate6 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ estate6 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ social3 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ social3 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ life9 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Palmer Maternity</h3>
                        <span className="work-category font-serif">Maternity Shoot</span>
                      </div>
                      <a href={ life9 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ life5 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ life5 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ estate1 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Lisa Ellington</h3>
                        <span className="work-category font-serif">Real Estate, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=EchukbEvdm8"  className="work-link popup-youtube"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ social1 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ social1 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ life7 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ life7 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ estate4 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ estate4 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ estate7 } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Architecture</h3>
                        <span className="work-category font-serif">Fashion</span>
                      </div>
                      <a href={ estate7 }  className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

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

export default home;
