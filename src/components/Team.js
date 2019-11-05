import React, {Component} from 'react';

export default class Team extends Component {
	render(){
		return(
				<div>
					{/*<!--====== TEAM PART START ======-->*/}
				    
				    <section id="team" className="team-area pt-125 pb-130">
				        <div className="container">
				            <div className="row justify-content-center">
				                <div className="col-lg-6">
				                    <div className="section-title text-center pb-25">
				                        <h3 className="title mb-15">Our Expert Team</h3>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua.</p>
				                    </div> {/*<!-- section title -->*/}
				                </div>
				            </div> {/*<!-- row -->*/}
				            <div className="row justify-content-center">
				                <div className="col-lg-3 col-md-6 col-sm-8">
				                    <div className="single-temp text-center mt-30">
				                        <div className="team-image">
				                            <img src="assets/images/team/t-1.jpg" alt="Team"/>
				                        </div>
				                        <div className="team-content mt-30">
				                            <h4 className="title mb-10"><a href="#">Celina Gomez</a></h4>
				                            <span>FOUNDER</span>
				                            <ul className="social mt-15">
				                                <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
				                                <li><a href="#"><i className="lni-twitter-original"></i></a></li>
				                                <li><a href="#"><i className="lni-instagram"></i></a></li>
				                            </ul>
				                        </div>
				                    </div>{/* <!-- single temp -->*/}
				                </div>
				                <div className="col-lg-3 col-md-6 col-sm-8">
				                    <div className="single-temp text-center mt-30">
				                        <div className="team-image">
				                            <img src="assets/images/team/t-2.jpg" alt="Team" />
				                        </div>
				                        <div className="team-content mt-30">
				                            <h4 className="title mb-10"><a href="#">Patric Green</a></h4>
				                            <span>Consultant</span>
				                            <ul className="social mt-15">
				                                <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
				                                <li><a href="#"><i className="lni-twitter-original"></i></a></li>
				                                <li><a href="#"><i className="lni-instagram"></i></a></li>
				                            </ul>
				                        </div>
				                    </div> {/*<!-- single temp -->*/}
				                </div>
				                <div className="col-lg-3 col-md-6 col-sm-8">
				                    <div className="single-temp text-center mt-30">
				                        <div className="team-image">
				                            <img src="assets/images/team/t-3.jpg" alt="Team"/>
				                        </div>
				                        <div className="team-content mt-30">
				                            <h4 className="title mb-10"><a href="#">Mark Parker</a></h4>
				                            <span>Business Manager</span>
				                            <ul className="social mt-15">
				                                <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
				                                <li><a href="#"><i className="lni-twitter-original"></i></a></li>
				                                <li><a href="#"><i className="lni-instagram"></i></a></li>
				                            </ul>
				                        </div>
				                    </div> {/*<!-- single temp -->*/}
				                </div>
				                <div className="col-lg-3 col-md-6 col-sm-8">
				                    <div className="single-temp text-center mt-30">
				                        <div className="team-image">
				                            <img src="assets/images/team/t-4.jpg" alt="Team"/>
				                        </div>
				                        <div className="team-content mt-30">
				                            <h4 className="title mb-10"><a href="#">Daryl Dixon</a></h4>
				                            <span>Marketing Manager</span>
				                            <ul className="social mt-15">
				                                <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
				                                <li><a href="#"><i className="lni-twitter-original"></i></a></li>
				                                <li><a href="#"><i className="lni-instagram"></i></a></li>
				                            </ul>
				                        </div>
				                    </div>{/* <!-- single temp -->*/}
				                </div>
				            </div> {/*<!-- row -->*/}
				        </div> {/*<!-- container -->*/}
				    </section>
				    
				    {/*<!--====== TEAM PART ENDS ======-->*/}

			        {/*<!--====== TESTIMONIAL PART START ======-->*/}
    
				    <section id="testimonial" className="testimonial-area pt-200">
				        <div className="testimonial-bg bg_cover"></div>
				        <div className="container">
				            <div className="row">
				                <div className="col-lg-5 col-md-8">
				                    <div className="testimonial-content">
				                        <div className="testimonial-active">
				                            <div className="single-testimonial">
				                                <i className="lni-quotation"></i>
				                                <p className="mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
				                                <h6 className="title">Roma De Suza</h6>
				                                <span>- CEO, Tesla</span>
				                            </div> {/*<!-- single testimonial -->*/}
				                            <div className="single-testimonial">
				                                <i className="lni-quotation"></i>
				                                <p className="mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
				                                <h6 className="title">Lisa White</h6>
				                                <span>- Designer, Walmart</span>
				                            </div> {/*<!-- single testimonial -->*/}
				                        </div> {/*<!-- testimonial active -->*/}
				                    </div> {/*<!-- testimonial content -->*/}
				                </div>
				                <div className="col-lg-7 col-md-4">
				                    <div className="testimonial-play text-right d-none d-md-block">
				                        <a className="Video-popup" href="https://www.youtube.com/watch?v=l8ccw7BMrMA"><i className="lni-play"></i></a>
				                    </div> {/*<!-- testimonial play -->*/}
				                </div>
				            </div> {/*<!-- row -->*/}
				        </div> {/*<!-- container -->*/}
				    </section>
				    
				    {/*<!--====== TESTIMONIAL PART ENDS ======-->*/}
				</div>
			)
	}
}