import React, { useEffect, useRef } from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import { all_routes } from "../router/all_routes";

const listingDetails = () => {
  const { id } = useParams();
  const routes = all_routes;
  const bigImgSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  const bigImgSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <i className="fa-chevron-right" />,
    prevArrow: <i className="fa-chevron-left" />,
  };

  const thumbnailSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: bigImgSliderRef.current,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  };

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (bigImgSliderRef.current && thumbnailSliderRef.current) {
      bigImgSliderRef.current.slickGoTo(0);
      thumbnailSliderRef.current.slickGoTo(0);
    }
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Chevrolet Camaro" subtitle="Listings" />
      <section className="product-detail-head">
        <div className="container">
          <div className="detail-page-head">
            <div className="detail-headings">
              <div className="star-rated">
                <div className="list-rating">
                  <span className="year">2023</span>
                  <i className="fas fa-star filled me-1"></i>
                  <i className="fas fa-star filled me-1"></i>
                  <i className="fas fa-star filled me-1"></i>
                  <i className="fas fa-star filled me-1"></i>
                  <i className="fas fa-star filled me-1"></i>
                  <span className="d-inline-block average-list-rating">
                    {" "}
                    5.0{" "}
                  </span>
                </div>
                <div className="camaro-info">
                  <h3>Chevrolet Camaro</h3>
                  <div className="camaro-location">
                    <div className="camaro-location-inner">
                      <i className="feather icon-map-pin me-2"></i>
                      <span className="me-2">
                        {" "}
                        <b>Location :</b> Miami St, Destin, FL 32550, USA{" "}
                      </span>
                    </div>
                    <div className="camaro-locations-inner">
                      <i className="feather icon-eye me-2"></i>
                      <span>
                        <b>Views :</b> 250{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-btn">
              <Link to="#">
                {" "}
                <ImageWithBasePath
                  src="assets/img/git-compare.svg"
                  alt="img"
                />{" "}
                Compare
              </Link>
              <Link to="#">
                <i className="feather icon-heart"></i> Wishlist
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="detail-product">
                <Slider className="detail-bigimg" {...bigImgSettings}>
                  <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-01.jpg" alt="Slider" />
                  </div>
                  <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-02.jpg" alt="Slider" />
                  </div>
                  <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-03.jpg" alt="Slider" />
                  </div>
                  <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-04.jpg" alt="Slider" />
                  </div>
                  <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-05.jpg" alt="Slider" />
                  </div>
                </Slider>
                <Slider
                  {...thumbnailSettings}
                  className="slider slider-nav-thumbnails"
                >
                  <div>
                    <ImageWithBasePath
                      src="assets/img/cars/slider-thum-01.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <ImageWithBasePath
                      src="assets/img/cars/slider-thum-02.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <ImageWithBasePath
                      src="assets/img/cars/slider-thum-03.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <ImageWithBasePath
                      src="assets/img/cars/slider-thum-04.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <ImageWithBasePath
                      src="assets/img/cars/slider-thum-05.jpg"
                      alt="product image"
                    />
                  </div>
                </Slider>
              </div>
              <div className="review-sec extra-service">
                <div className="review-header">
                  <h4>Extra Service</h4>
                </div>
                <span>Baby Seat - $10</span>
              </div>
              {/*Listing Features Section*/}
              <div className="review-sec specification-card ">
                <div className="review-header">
                  <h4>Specifications</h4>
                </div>
                <div className="card-body">
                  <div className="lisiting-featues">
                    <div className="row">
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-1.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Body </span>
                          <h6> Sedan</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-2.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Make </span>
                          <h6> Nisssan</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-3.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Transmission </span>
                          <h6> Automatic</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-4.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Fuel Type </span>
                          <h6> Diesel</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-5.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Mileage </span>
                          <h6>16 Km</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-6.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Drivetrian </span>
                          <h6>Front Wheel</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-7.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Year</span>
                          <h6> 2018</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-8.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>AC </span>
                          <h6> Air Condition</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-9.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>VIN </span>
                          <h6> 45456444</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-10.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Door </span>
                          <h6> 4 Doors</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-11.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Brake </span>
                          <h6> ABS</h6>
                        </div>
                      </div>
                      <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                        <div className="feature-img">
                          <ImageWithBasePath
                            src="assets/img/specification/specification-icon-12.svg"
                            alt
                          />
                        </div>
                        <div className="featues-info">
                          <span>Engine (Hp) </span>
                          <h6> 3,000</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-sec listing-feature">
                <div className="review-header">
                  <h4>Car Features</h4>
                </div>
                <div className="listing-description">
                  <div className="row">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Multi-zone A/C
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Heated front seats
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Andriod Auto
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Navigation system
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Premium sound system
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Bluetooth
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Keyles Start
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Memory seat
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          6 Cylinders
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Adaptive Cruise Control
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          Intermittent wipers
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-check-double" />
                          </span>
                          4 power windows
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*/Listing Features Section*/}
              <div className="review-sec extra-service mb-0">
                <div className="review-header">
                  <h4>Description of Listing</h4>
                </div>
                <div className="description-list">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </div>
              </div>
              <div className="review-sec extra-service mb-0">
                <div className="review-header">
                  <h4>Video</h4>
                </div>
                <div className="short-video">
                  <iframe
                    src="https://www.youtube.com/embed/ExJZAegsOis"
                    width={100}
                    height={350}
                  />
                </div>
              </div>
              <div className="review-sec listing-review">
                <div className="review-header">
                  <h4>
                    Reviews<span className="me-2">(2)</span>
                  </h4>
                  <div className="reviewbox-list-rating">
                    <p>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <span> (5 out of 5)</span>
                    </p>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-header-group">
                    <div className="review-widget-header">
                      <span className="review-widget-img">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="img-fluid"
                          alt='img'
                        />
                      </span>
                      <div className="review-design">
                        <h6>Johnson</h6>
                        <p>02 Jan 2023</p>
                      </div>
                    </div>
                    <div className="reviewbox-list-rating">
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <span> (5.0)</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.It was popularised in the
                    1960s{" "}
                  </p>
                  <ul className="review-list-rating">
                    <li>
                      quality
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                    <li>
                      Price
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                    <li>
                      Comfort
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                    <li>
                      Driving
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="review-card">
                  <div className="review-header-group">
                    <div className="review-widget-header">
                      <span className="review-widget-img">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          className="img-fluid"
                          alt='img'
                        />
                      </span>
                      <div className="review-design">
                        <h6>Casandra</h6>
                        <p>02 Jan 2023</p>
                      </div>
                    </div>
                    <div className="reviewbox-list-rating">
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <span> (5.0)</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.It was popularised in the
                    1960s{" "}
                  </p>
                  <ul className="review-list-rating">
                    <li>
                      quality
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                    <li>
                      Price
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                    <li>
                      Comfort
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                    <li>
                      Driving
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="review-sec leave-reply-form">
                <div className="review-header">
                  <h4>Leave a Reply</h4>
                </div>
                <ul className="review-list-rating mb-3">
                  <li>
                    quality
                    <p>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                    </p>
                  </li>
                  <li>
                    Price
                    <p>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                    </p>
                  </li>
                  <li>
                    Comfort
                    <p>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                    </p>
                  </li>
                  <li>
                    Driving
                    <p>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                      <i className="fas fa-star filled me-1"></i>
                    </p>
                  </li>
                </ul>
                <div className="card-body">
                  <div className="review-list">
                    <ul>
                      <li className="review-box feedbackbox mb-0">
                        <div className="review-details">
                          <form className="#">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="input-block">
                                  <label>
                                    Full Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="input-block">
                                  <label>
                                    Email Address{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="input-block">
                                  <label>Comments </label>
                                  <textarea
                                    rows={4}
                                    className="form-control"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="submit-btn">
                              <button
                                className="btn btn-primary submit-review"
                                type="submit"
                              >
                                {" "}
                                Submit Review
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 theiaStickySidebar">
              <div className="stickysidebar">
                
                <div className="review-sec mt-0">
                  <div className="review-header">
                    <h4>Check Availability</h4>
                  </div>
                  <div>
                    <form>
                      <ul>
                        <li className="column-group-main">
                          <div className="input-block">
                            <label>Pickup Location</label>
                            <div className="group-img">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="45, 4th Avanue  Mark Street USA"
                              />
                            </div>
                          </div>
                        </li>
                        <li className="column-group-main">
                          <div className="input-block">
                            <label>Dropoff Location</label>
                            <div className="group-img">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="78, 10th street Laplace USA"
                              />
                            </div>
                          </div>
                        </li>
                        <li className="column-group-main">
                          <div className="input-block m-0">
                            <label>Pickup Date</label>
                          </div>
                          <div className="input-block-wrapp sidebar-form">
                            <div className="input-block me-2">
                              <div className="group-img">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  placeholder="04/11/2023"
                                />
                              </div>
                            </div>
                            <div className="input-block">
                              <div className="group-img">
                                <input
                                  type="text"
                                  className="form-control timepicker"
                                  placeholder="11:00 AM"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-group-main">
                          <div className="input-block m-0">
                            <label>Return Date</label>
                          </div>
                          <div className="input-block-wrapp sidebar-form">
                            <div className="input-block me-2">
                              <div className="group-img">
                                <input
                                  type="text"
                                  className="form-control datetimepicker"
                                  placeholder="04/11/2023"
                                />
                              </div>
                            </div>
                            <div className="input-block">
                              <div className="group-img">
                                <input
                                  type="text"
                                  className="form-control timepicker"
                                  placeholder="11:00 AM"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="column-group-last">
                          <div className="input-block mb-0">
                            <div className="search-btn">
                              <button
                                className="btn btn-primary check-available w-100"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#pages_edit"
                              >
                                {" "}
                                Check Availability
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
                <div className="review-sec extra-service mt-0">
                  <div className="review-header">
                    <h4>Listing Owner Details</h4>
                  </div>
                  <div className="owner-detail">
                    <div className="owner-img">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/profiles/avatar-07.jpg" alt='img' />
                      </Link>
                    </div>
                    <div className="reviewbox-list-rating">
                      <h5>
                        <Link to="#">Brooklyn Cars</Link>
                      </h5>
                      <p>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <i className="fas fa-star filled me-1"></i>
                        <span> (5.0)</span>
                      </p>
                    </div>
                  </div>
                  <ul className="booking-list">
                    <li>
                      No of Listings
                      <span>05</span>
                    </li>
                    <li>
                      No of Bookings
                      <span>225</span>
                    </li>
                    <li>
                      Verification
                      <h6>Verified</h6>
                    </li>
                  </ul>
                  <div className="message-btn">
                    <Link to="#" className="btn btn-order">
                      Message to owner
                    </Link>
                  </div>
                </div>
                <div className="review-sec share-car mt-0">
                  <div className="review-header">
                    <h4>Share this car</h4>
                  </div>
                  <ul className="nav-social">
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f fa-facebook fi-icon">
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram fi-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-behance fi-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-pinterest-p fi-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter fi-icon" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin fi-icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="review-sec share-car mt-0 mb-0">
                  <div className="review-header">
                    <h4>View Location</h4>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                    className="iframe-video"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="details-car-grid">
                <div className="details-slider-heading">
                  <h3>You May be Interested in</h3>
                </div>
                <div className="car-details-slider owl-carousel">
                  <Slider {...settings}>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-02.jpg"
                              className="img-fluid"
                              alt="KIA"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">KIA</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">Kia Soul 2016</Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="22 KM"
                                  />
                                </span>
                                <p>22 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt='img'
                                  />
                                </span>
                                <p>2016</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span className="me-2">
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Belgium
                            </div>
                            <div className="listing-price">
                              <h6>
                                $80 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-07.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">Chevrolet</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-07.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">
                                Chevrolet Pick Truck 3.5L
                              </Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>10 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={2012}
                                  />
                                </span>
                                <p>2012</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Spain
                            </div>
                            <div className="listing-price">
                              <h6>
                                $77 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-03.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">Audi</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">
                                Audi A3 2019 new
                              </Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>10 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={2019}
                                  />
                                </span>
                                <p>2019</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $45 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-04.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">Ferrai</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-04.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">
                                Ferrari 458 MM Speciale
                              </Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="14 KM"
                                  />
                                </span>
                                <p>14 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Basic"
                                  />
                                </span>
                                <p>Basic</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={2022}
                                  />
                                </span>
                                <p>2022</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $160 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-05.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">Chevrolet</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">
                                2018 Chevrolet Camaro
                              </Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="18 KM"
                                  />
                                </span>
                                <p>18 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={2018}
                                  />
                                </span>
                                <p>2018</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Germany
                            </div>
                            <div className="listing-price">
                              <h6>
                                $36 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-06.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">Acura</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-06.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">
                                Acura Sport Version
                              </Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="12 KM"
                                  />
                                </span>
                                <p>12 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={2013}
                                  />
                                </span>
                                <p>2013</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $30 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-02.jpg"
                              className="img-fluid"
                              alt="KIA"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">KIA</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">Kia Soul 2016</Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="22 KM"
                                  />
                                </span>
                                <p>22 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="2016"
                                  />
                                </span>
                                <p>2016</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Belgium
                            </div>
                            <div className="listing-price">
                              <h6>
                                $80 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingdetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-05.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item">
                            <span className="featured-text">Chevrolet</span>
                            <Link to="#" className="fav-icon">
                              <i className="feather icon-heart"></i>{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features">
                            <div className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="author"
                              />
                            </div>
                            <h3 className="listing-title">
                              <Link to="#">
                                2018 Chevrolet Camaro
                              </Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <i className="fas fa-star filled me-1"></i>
                              <span>(5.0)</span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="18 KM"
                                  />
                                </span>
                                <p>18 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={2018}
                                  />
                                </span>
                                <p>2018</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>{" "}
                              Germany
                            </div>
                            <div className="listing-price">
                              <h6>
                                $36 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingdetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather icon-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal custom-modal fade check-availability-modal"
        id="pages_edit"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <div className="form-header text-start mb-0">
                <h4 className="mb-0 text-dark fw-bold">Availability Details</h4>
              </div>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="align-center" aria-hidden="true">
                  ×
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="available-for-ride">
                    <p>
                      <i className="fa-regular fa-circle-check" />
                      Chevrolet Camaro is available for a ride
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="row booking-info">
                    <div className="col-md-4 pickup-address">
                      <h5>Pickup</h5>
                      <p>45, 4th Avanue Mark Street USA</p>
                      <span>Date &amp; time : 11 Jan 2023</span>
                    </div>
                    <div className="col-md-4 drop-address">
                      <h5>Drop Off</h5>
                      <p>78, 10th street Laplace USA</p>
                      <span>Date &amp; time : 11 Jan 2023</span>
                    </div>
                    <div className="col-md-4 booking-amount">
                      <h5>Booking Amount</h5>
                      <h6>
                        <span>$300 </span> /day
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="booking-info seat-select">
                    <h6>Extra Service</h6>
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="rememberme"
                        className="rememberme"
                      />
                      <span className="checkmark" />
                      Baby Seat - <span className="ms-2">$10</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="booking-info pay-amount">
                    <h6>Deposit Option</h6>
                    <div className="radio radio-btn">
                      <label>
                        <input type="radio" name="radio" /> Pay Deposit
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="radio" /> Full Amount
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" />
                <div className="col-md-6">
                  <div className="booking-info service-tax">
                    <ul>
                      <li>
                        Booking Price <span>$300</span>
                      </li>
                      <li>
                        Extra Service <span>$10</span>
                      </li>
                      <li>
                        Tax <span>$5</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grand-total">
                    <h5>Grand Total</h5>
                    <span>$315</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to={routes.booking} className="btn btn-back">
                Go to Details
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default listingDetails;
