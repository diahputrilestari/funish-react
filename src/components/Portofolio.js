import React,{Component} from 'react';

export default class Portfolio extends Component {
	render(){
		return(
			<div>
				{/*<!--====== SHOWCASE PART START ======-->*/}
    
			    <section id="showcase" className="showcase-area pt-100 pb-130">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-4">
			                    <div className="showcase-title pt-25">
			                        <h2 className="title">Showcase</h2>
			                    </div> {/*<!-- showcase title -->*/}
			                </div> 
			                <div className="col-lg-6">
			                    <div className="showcase-title pt-25">
			                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.</p>
			                    </div> {/*<!-- showcase title -->*/}
			                </div>
			            </div> {/*<!-- row -->*/}
			            <div className="row">
			                <div className="col-lg-12">
			                    <div className="showcase-active mt-65">
			                        <div className="single-showcase">
			                            <img src="assets/images/showcase/t-1.jpg" alt="Testimonial"/>
			                            <a href="#" className="main-btn">Full Preview</a>
			                        </div> {/*<!-- single showcase -->*/}
			                        <div className="single-showcase">
			                            <img src="assets/images/showcase/t-2.jpg" alt="Testimonial"/>
			                            <a href="#" className="main-btn">Full Preview</a>
			                        </div> {/*<!-- single showcase -->*/}
			                    </div> {/*<!-- showcase active -->*/}
			                </div>
			            </div> {/*<!-- row -->*/}
			        </div> {/*<!-- container -->*/}
			    </section>
			    
			    {/*<!--====== SHOWCASE PART ENDS ======-->*/}
			</div>
		)
	}
}