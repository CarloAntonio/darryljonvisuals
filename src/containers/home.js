import React from "react";

const home = () => {

//estates
const estate2 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estatesMed/estate2.jpg";
const estate3 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estatesMed/estate3.jpg";
const estate4 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estatesMed/estate4.jpg";
const estate5 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estatesMed/estate5.jpg";
const estate6 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estatesMed/estate6.jpg";
const estate7 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/estatesMed/estate7.jpg";

//lifestyle
const carlo = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/life1.jpg";
const life3 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/life3.jpg";
const life4 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/life4.jpg";
const life5 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/life5.jpg";
const life7 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/life7.jpg";
const life9 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/life9.jpg";
const marvkirs = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/marvkirs.jpg";
const johndenise = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/lifestyleMed/johndenise.jpg";

//social
const social1 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/socialMed/social1.jpg";
const social2 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/socialMed/social2.jpg";
const social3 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/socialMed/social3.jpg";
const social4 = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/socialMed/social4.jpg";

//video covers
const hisurfcamper = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/hisurfcamperjpg";
const perfectlocks = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/perfectlocks.jpg";
const donner = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/donner.jpg";
const etonway = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/etonway.jpg";
const gotfrenchie = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/gotfrenchie.jpg";
const johio = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/johio.jpg";
const mustang = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/mustang.jpg";
const shreddy = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/shreddy.jpg";
const wildman = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/wildman.jpg";
const chenin = "https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/cover/chenin.jpg";

  return (
    <div>

        {/* WRAPPER */}
        <div className="wrapper">

          {/* HERO */}
          <section id="hero" className="module-hero bg-dark-30 js-fullheight" data-background="https://s3-us-west-1.amazonaws.com/carlo-central-cdn-bucket/darryljonvisuals/images/drone.jpg">

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
                        <img src={ gotfrenchie } alt=""/>
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
                        <img src={ johio } alt=""/>
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
                        <img src={ carlo } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Carlo Bilbao</h3>
                        <span className="work-category font-serif">Website Assets</span>
                      </div>
                      <a href={ carlo } className="work-link image-popup-vertical-fit"></a>
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

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ shreddy } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">@shreddymurphyband</h3>
                        <span className="work-category font-serif">Artist, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=yCAcPVqYZ7k" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ mustang } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Mustang GT 5.0</h3>
                        <span className="work-category font-serif">Promotional, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=vfOK3NfTUcg" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ etonway } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Eton Way</h3>
                        <span className="work-category font-serif">Promotional, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=EchukbEvdm8" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ marvkirs } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Marvin & Kirsten</h3>
                        <span className="work-category font-serif">Wedding</span>
                      </div>
                      <a href={ marvkirs } className="work-link image-popup-vertical-fit"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item lifestyle">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ johndenise } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">John & Denise</h3>
                        <span className="work-category font-serif">Wedding</span>
                      </div>
                      <a href={ johndenise } className="work-link image-popup-vertical-fit"></a>
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
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ hisurfcamper } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">@HISurfCamper</h3>
                        <span className="work-category font-serif">Promotional, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=GwZW6v1lDK4" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ perfectlocks } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">@perfectlocks</h3>
                        <span className="work-category font-serif">Promotional, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=VkYdWBiYqn0" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ donner } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Donner Summer</h3>
                        <span className="work-category font-serif">Promotional, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=mbRRx2bk0wk" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item smedia video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ wildman } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">@5dimensionalMan</h3>
                        <span className="work-category font-serif">Promotional, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=YrWcVyiTvxg" className="popup-youtube work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article className="work-item estate video">
                    <div className="work-wrapper">
                      <div className="work-thumbnail">
                        <img src={ chenin } alt=""/>
                      </div>
                      <div className="work-caption">
                        <h3 className="work-title font-alt">Chenin</h3>
                        <span className="work-category font-serif">Promotional, Video</span>
                      </div>
                      <a href="https://www.youtube.com/watch?v=hlySv4Kfh7o" className="popup-youtube work-link"></a>
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
