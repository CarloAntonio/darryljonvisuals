import React from "react";

const home = () => {

const estate1 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estates/estate1.jpg";
const estate2 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estates/estate2.jpg";
const estate3 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estates/estate3.jpg";
const estate4 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estates/estate4.jpg";
const estate5 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estates/estate5.jpg";
const estate6 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estates/estate6.jpg";
const estate7 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estates/estate7.jpg";

const life1 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyle/life1.jpg";
const life3 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyle/life3.jpg";
const life4 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyle/life4.jpg";
const life5 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyle/life5.jpg";
const life6 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyle/life6.jpg";
const life7 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyle/life7.jpg";
const life9 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyle/life9.jpg";

const social1 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/social/social1.jpg";
const social2 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/social/social2.jpg";
const social3 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/social/social3.jpg";
const social4 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/social/social4.jpg";
const social5 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/social/social5.jpg";
const social6 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/social/social6.jpg";
  
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
