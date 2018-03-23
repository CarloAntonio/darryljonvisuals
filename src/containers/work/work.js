import React from "react";

const home = () => {
  return (
    <div>

        {/* start countdown section */}
        <section className="no-padding full-screen cover-background" style ={ { backgroundImage: "url('http://placehold.it/1920x1100')" } }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="position-relative full-screen">
                            <div className="slider-typography text-center xs-overflow-auto">
                                <div className="slider-text-middle-main padding-ten-tb">
                                    <div className="slider-text-middle bg-black-opacity xs-padding-15px-all">
                                        <div className="margin-eight-bottom xs-margin-30-bottom"><img src="images/logo-white.png" data-at2x="images/logo-white@2x.png" alt="" /></div>
                                        <h6 className="font-weight-300 text-white margin-30px-bottom test width-45 center-col sm-width-60 xs-width-100">Updating, check back soon!</h6>
                                        <div data-enddate="2017/12/01 12:30:00" className="countdown text-center text-white counter-box-5"></div>
                                        <div className="col-md-12 text-center social-icon-style-10 margin-six-top xs-margin-30px-top xs-no-padding">
                                            <ul className="large-icon no-margin-bottom">
                                                <li><a className="text-white accent-bg-hover" href="http://facebook.com" target="_blank"><i className="fa fa-facebook"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="http://twitter.com" target="_blank"><i className="fa fa-twitter"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="http://google.com" target="_blank"><i className="fa fa-google"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="http://google.com" target="_blank"><i className="fa fa-dribbble"></i><span></span></a></li>
                                                <li><a className="text-white accent-bg-hover" href="http://linkedin.com" target="_blank"><i className="fa fa-linkedin "></i><span></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* start countdown section */}

    </div>
  );
}

export default home;
