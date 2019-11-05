import React, {Component} from 'react';

export default class Products extends Component {
	render(){
		return(
			<div>
				{/*<!--====== PRODUCT PART START ======-->*/}
			    <section id="product" className="product-area pt-100 pb-130">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-3 col-md-4">
			                    <div className="collection-menu text-center mt-30">
			                        <h4 className="collection-tilte">OUR COLLECTION</h4>
			                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			                            <a className="active" id="v-pills-furniture-tab" data-toggle="pill" href="#v-pills-furniture" role="tab" aria-controls="v-pills-furniture" aria-selected="true">Furniture</a>
			                            <a id="v-pills-decorative-tab" data-toggle="pill" href="#v-pills-decorative" role="tab" aria-controls="v-pills-decorative" aria-selected="false">Decorative</a>
			                            <a id="v-pills-lighting-tab" data-toggle="pill" href="#v-pills-lighting" role="tab" aria-controls="v-pills-lighting" aria-selected="false">Lighting</a>
			                            <a id="v-pills-outdoor-tab" data-toggle="pill" href="#v-pills-outdoor" role="tab" aria-controls="v-pills-outdoor" aria-selected="false">Outdoor</a>
			                            <a id="v-pills-storage-tab" data-toggle="pill" href="#v-pills-storage" role="tab" aria-controls="v-pills-storage" aria-selected="false">Storage</a>
			                        </div> {/*<!-- nav -->*/}
			                    </div> {/*<!-- collection menu -->*/}
			                </div>
			                <div className="col-lg-9 col-md-8">
			                    <div className="tab-content" id="v-pills-tabContent">
			                        <div className="tab-pane fade show active" id="v-pills-furniture" role="tabpanel" aria-labelledby="v-pills-furniture-tab">
			                            <div className="product-items mt-30">
			                                <div className="row product-items-active">
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Fibre Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$49.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-20%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$129.00</span>
			                                                <span className="discount-price">$159.00</span>
			                                            </div>
			                                        </div>{/* <!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-3.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-10%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">ClassNameic Wardrobe</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$89.00</span>
			                                                <span className="discount-price">$129.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                </div> {/*<!-- row -->*/}
			                            </div> {/*<!-- product items -->*/}
			                        </div> {/*<!-- tab pane -->*/}

			                        <div className="tab-pane fade" id="v-pills-decorative" role="tabpanel" aria-labelledby="v-pills-decorative-tab">
			                            <div className="product-items mt-30">
			                                <div className="row product-items-active">
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-3.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div>{/* <!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div>{/* <!-- single product items -->*/}
			                                    </div>
			                                </div> {/*<!-- row -->*/}
			                            </div>{/* <!-- product items -->*/}
			                        </div>{/* <!-- tab pane -->*/}

			                        <div className="tab-pane fade" id="v-pills-lighting" role="tabpanel" aria-labelledby="v-pills-lighting-tab">
			                            <div className="product-items mt-30">
			                                <div className="row product-items-active">
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-3.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                </div> {/*<!-- row -->*/}
			                            </div> {/*<!-- product items -->*/}
			                        </div> {/*<!-- tab pane -->*/}

			                        <div className="tab-pane fade" id="v-pills-outdoor" role="tabpanel" aria-labelledby="v-pills-outdoor-tab">
			                            <div className="product-items mt-30">
			                                <div className="row product-items-active">
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-3.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                </div> {/*<!-- row -->*/}
			                            </div> {/*<!-- product items -->*/}
			                        </div> {/*<!-- tab pane -->*/}

			                        <div className="tab-pane fade" id="v-pills-storage" role="tabpanel" aria-labelledby="v-pills-storage-tab">
			                            <div className="product-items mt-30">
			                                <div className="row product-items-active">
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-3.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-1.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                    <div className="col-md-4">
			                                        <div className="single-product-items">
			                                            <div className="product-item-image">
			                                                <a href="#"><img src="assets/images/product/p-2.jpg" alt="Product"/></a>
			                                                <div className="product-discount-tag">
			                                                    <p>-60%</p>
			                                                </div>
			                                            </div>
			                                            <div className="product-item-content text-center mt-30">
			                                                <h5 className="product-title"><a href="#">Touchwood Chair</a></h5>
			                                                <ul className="rating">
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                    <li><i className="lni-star-filled"></i></li>
			                                                </ul>
			                                                <span className="regular-price">$59.00</span>
			                                                <span className="discount-price">$69.00</span>
			                                            </div>
			                                        </div> {/*<!-- single product items -->*/}
			                                    </div>
			                                </div> {/*<!-- row -->*/}
			                            </div> {/*<!-- product items -->*/}
			                        </div> {/*<!-- tab pane -->*/}
			                    </div>{/* <!-- tab content --> */}
			                </div>
			            </div> {/*<!-- row -->*/}
			        </div> {/*<!-- container -->*/}
			    </section>
			    
			    {/*<!--====== PRODUCT PART ENDS ======-->*/}
			</div>
			)
	}
}