import React, {Component} from 'react';

export default class Head extends Component {
	render(){
		return(
			<div>
				{/*<!--====== PRELOADER PART START ======-->*/}
    
			    <div className="preloader">
			        <div className="spin">
			            <div className="cube1"></div>
			            <div className="cube2"></div>
			        </div>
			    </div>
    
    			{/*<!--====== PRELOADER PART START ======-->
    			<!--====== HEADER PART START ======-->*/}
    
			    <header className="header-area">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-12">
			                    <nav className="navbar navbar-expand-lg">
			                        <a className="navbar-brand" href="index.html">
			                            <img src="assets/images/logo.png" alt="Logo"/>
			                        </a> {/*<!-- Logo -->*/}
			                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			                            <span className="bar-icon"></span>
			                            <span className="bar-icon"></span>
			                            <span className="bar-icon"></span>
			                        </button>

			                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
			                            <ul id="nav" className="navbar-nav ml-auto">
			                                <li className="nav-item active">
			                                    <a data-scroll-nav="0" href="#home">Home</a>
			                                </li>
			                                <li className="nav-item">
			                                    <a data-scroll-nav="0" href="#product">Products</a>
			                                </li>
			                                <li className="nav-item">
			                                    <a data-scroll-nav="0" href="#service">Services</a>
			                                </li>
			                                <li className="nav-item">
			                                    <a data-scroll-nav="0" href="#showcase">Portfolio</a>
			                                </li>
			                                <li className="nav-item">
			                                    <a data-scroll-nav="0" href="#team">Team</a>
			                                </li>
			                                <li className="nav-item">
			                                    <a data-scroll-nav="0" href="#blog">Blog</a>
			                                </li>
			                                <li className="nav-item">
			                                    <a data-scroll-nav="0" href="#contact">Contact</a>
			                                </li>
			                            </ul> {/*<!-- navbar nav -->*/}
			                        </div>
			                    </nav> {/*<!-- navbar -->*/}
			                </div>
			            </div> {/*<!-- row -->*/}
			        </div> {/*<!-- container -->*/}
			    </header>
    
    			{/*<!--====== HEADER PART ENDS ======-->*/}

    			{/*<!--====== SLIDER PART START ======-->*/}
    
			    <section id="home" className="slider-area pt-100">
			        <div className="container-fluid position-relative">
			            <div className="slider-active">
			                <div className="single-slider">
			                    <div className="slider-bg">
			                        <div className="row no-gutters align-items-center ">
			                            <div className="col-lg-4 col-md-5">
			                                <div className="slider-product-image d-none d-md-block">
			                                    <img src="assets/images/slider/1.jpg" alt="Slider" />
			                                    <div className="slider-discount-tag">
			                                        <p>-50% <br/> OFF</p>
			                                    </div>
			                                </div> {/*<!-- slider product image -->*/}
			                            </div>
			                            <div className="col-lg-8 col-md-7">
			                                <div className="slider-product-content">
			                                    <h1 className="slider-title mb-10" data-animation="fadeInUp" data-delay="0.3s"><span>Sofa</span> and <span>Armchairs</span></h1>
			                                    <p className="mb-25" data-animation="fadeInUp" data-delay="0.9s">One day however a small line of blind text by the name of Lorem Ipsum <br/> decided to leave for the far World of Grammar.</p>
			                                    <a className="main-btn" href="#" data-animation="fadeInUp" data-delay="1.5s">Explore More <i className="lni-chevron-right"></i></a>
			                                </div> {/*<!-- slider product content -->*/}
			                            </div>
			                        </div> {/*<!-- row -->*/}
			                    </div> {/*<!-- container -->*/}
			                </div> {/*<!-- single slider -->*/}

			                <div className="single-slider">
		                        <div className="slider-bg">
		                            <div className="row no-gutters align-items-center">
		                                <div className="col-lg-4 col-md-5">
		                                    <div className="slider-product-image d-none d-md-block">
		                                        <img src="assets/images/slider/3.jpg" alt="Slider"/>
		                                        <div className="slider-discount-tag">
		                                            <p>-20% <br/> OFF</p>
		                                        </div>
		                                    </div> {/*<!-- slider product image -->*/}
		                                </div>
		                                <div className="col-lg-8 col-md-7">
		                                    <div className="slider-product-content">
		                                        <h1 className="slider-title mb-10" data-animation="fadeInUp" data-delay="0.3s"><span>Winter</span> Sale! is <span>Here</span></h1>
		                                        <p className="mb-25" data-animation="fadeInUp" data-delay="0.9s">One day however a small line of blind text by the name of Lorem Ipsum <br/> decided to leave for the far World of Grammar.</p>
		                                        <a className="main-btn" href="#" data-animation="fadeInUp" data-delay="1.5s">Explore More <i class="lni-chevron-right"></i></a>
		                                    </div> {/*<!-- slider product content -->*/}
		                                </div>
		                            </div> {/*<!-- row -->*/}
		                        </div> {/*<!-- container -->*/}
			                </div> {/*<!-- single slider -->*/}

			                <div className="single-slider">
			                        <div className="slider-bg">
			                            <div className="row no-gutters align-items-center">
			                                <div className="col-lg-4 col-md-5">
			                                    <div className="slider-product-image d-none d-md-block">
			                                        <img src="assets/images/slider/2.jpg" alt="Slider"/>
			                                        <div className="slider-discount-tag">
			                                            <p>FREE<br/> QUOTE</p>
			                                        </div>
			                                    </div> {/*<!-- slider product image -->*/}
			                                </div>
			                                <div className="col-lg-8 col-md-7">
			                                    <div className="slider-product-content">
			                                        <h1 className="slider-title mb-10" data-animation="fadeInUp" data-delay="0.3s"><span>Get</span> a Free <span>Quote</span></h1>
			                                        <p className="mb-25" data-animation="fadeInUp" data-delay="0.9s">One day however a small line of blind text by the name of Lorem Ipsum <br/> decided to leave for the far World of Grammar.</p>
			                                        <a className="main-btn" href="#contact" data-animation="fadeInUp" data-delay="1.5s">Contact Us <i className="lni-chevron-right"></i></a>
			                                    </div> {/*<!-- slider product content -->*/}
			                                </div>
			                            </div> {/*<!-- row -->*/}
			                        </div> {/*<!-- container -->*/}
			                </div> {/*<!-- single slider -->*/}
			            </div> {/*<!-- slider active -->*/}
			            <div className="slider-social">
			                <div className="row justify-content-end">
			                    <div className="col-lg-7 col-md-6">
			                        <ul className="social text-right">
			                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
			                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
			                            <li><a href="#"><i className="lni-instagram"></i></a></li>
			                        </ul>
			                    </div>
			                </div>
			            </div>
			        </div> {/*<!-- container fluid -->*/}
			    </section>
    
    			{/*<!--====== SLIDER PART ENDS ======-->*/}

			    {/*<!--====== DISCOUNT PRODUCT PART START ======-->*/}

			    <section id="discount-product" class="discount-product pt-100">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-6">
			                    <div class="single-discount-product mt-30">
			                        <div class="product-image">
			                            <img src="assets/images/discount-product/product-1.jpg" alt="Product"/>
			                        </div> {/*<!-- product image -->*/}
			                        <div class="product-content">
			                            <h4 class="content-title mb-15">High-quality furnitures <br/> For your home</h4>
			                            <a href="#">View Collection <i class="lni-chevron-right"></i></a>
			                        </div>{/* <!-- product content -->*/}
			                    </div>{/* <!-- single discount product -->*/}
			                </div>
			                <div class="col-lg-6">
			                    <div class="single-discount-product mt-30">
			                        <div class="product-image">
			                            <img src="assets/images/discount-product/product-2.jpg" alt="Product"/>
			                        </div> {/*<!-- product image -->*/}
			                        <div class="product-content">
			                            <h4 class="content-title mb-15">Hot Offer <br/> Discount up to 80%</h4>
			                            <a href="#">View Collection <i class="lni-chevron-right"></i></a>
			                        </div> {/*<!-- product content -->*/}
			                    </div> {/*<!-- single discount product -->*/}
			                </div>
			            </div> {/*<!-- row -->*/}
			        </div> {/*<!-- container -->*/}
			    </section>
			    
			    {/*<!--====== DISCOUNT PRODUCT PART ENDS ======-->*/}
    		</div>
			)
	}
}