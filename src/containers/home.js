import React from "react";

const home = () => {
  return (
    <div>

        {/* WRAPPER */}
        <div class="wrapper">

          {/* HERO */}
          <section id="hero" class="module-hero bg-dark-30 js-fullheight" data-background="assets/images/module-4.jpg">

            {/* HERO TEXT */}
            <div class="hero-caption">
              <div class="hero-text">
                <h1 class="m-b-30">Andrew Stone</h1>
                <h6 class="m-b-60">Freelance. Designer. Cameraman</h6>
              </div>
            </div>
            {/* /HERO TEXT */}

            <div class="video-player" data-property="{ videoURL: 'https://www.youtube.com/watch?v=9d8wWcJLnFI', containment: '#hero', quality: 'large', startAt: 0, autoPlay: true,loop: true, opacity: 1, showControls: false, showYTLogo: false, vol: 0, mute: true }">
            </div>

          </section>
          {/* /HERO */}

          {/* PORTFOLIO */}
          <section id="portfolio" class="module-sm">
            <div class="container-fluid">

              {/* FILTERS */}
              <div class="row">
                <div class="col-sm-12">
                  <ul id="filters" class="filters font-alt">
                    <li><a href="#" class="current" data-filter="*">All</a></li>
                    <li><a href="#" data-filter=".fashion">Wedding</a></li>
                    <li><a href="#" data-filter=".travel">Corporate</a></li>
                    <li><a href="#" data-filter=".music">Birthday</a></li>
                    <li><a href="#" data-filter=".video">Other</a></li>
                  </ul>
                </div>
              </div>
              {/* /FILTERS */}

              <div class="works-grid-wrapper">

                <div id="works-grid" class="works-grid works-grid-gutter">

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item travel video">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-1.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">Montures</h3>
                        <span class="work-category font-serif"><a href="#">Travel, Video</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item fashion">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-8.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">Rambler & Co</h3>
                        <span class="work-category font-serif"><a href="#">Fashion</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item music">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-2.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">Pink Lips</h3>
                        <span class="work-category font-serif"><a href="#">Music</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item fashion">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-3.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">Brother</h3>
                        <span class="work-category font-serif"><a href="#">Fashion</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item travel">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-4.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">Travel Bags</h3>
                        <span class="work-category font-serif"><a href="#">Travel</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item music">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-5.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">Workshop</h3>
                        <span class="work-category font-serif"><a href="#">Music</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item travel">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-6.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">The Handkerchief</h3>
                        <span class="work-category font-serif"><a href="#">Travel</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                  {/* PORTFOLIO ITEM */}
                  <article class="work-item fashion">
                    <div class="work-wrapper">
                      <div class="work-thumbnail">
                        <img src="assets/images/portfolio-7.jpg" alt=""/>
                      </div>
                      <div class="work-caption">
                        <h3 class="work-title font-alt">Architecture</h3>
                        <span class="work-category font-serif"><a href="#">Fashion</a></span>
                      </div>
                      <a href="portfolio-single-1.html" class="work-link"></a>
                    </div>
                  </article>
                  {/* /PORTFOLIO ITEM */}

                </div>

              </div>{/* works-grid-wrapper */}

              {/* SHOW MORE */}
              <div class="row">
                <div class="col-sm-12">

                  <div class="m-t-70 text-center">
                    <button id="show-more" class="btn btn-dark show-more">More works</button>
                  </div>

                </div>
              </div>
              {/* /SHOW MORE */}

            </div>
          </section>
          {/* /PORTFOLIO */}

          <hr class="divider"/>

        </div>


    </div>
  );
}

export default home;
