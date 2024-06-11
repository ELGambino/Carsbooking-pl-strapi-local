import React, { useEffect } from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../router/all_routes";
import ListingSidebar from "./listingsidebar";
// import { Listinggriddata } from '../../core/data/json/listinggrid_data';
import { useSelector } from "react-redux";

import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Aos from "aos";
import { CarListing } from "../../core/data/interface/interface";

const Listinglist = () => {
  const data = useSelector((state: CarListing) => state.listing_list);

  const routes = all_routes;
  const options = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
  ];
  const optionsTwo = [
    { value: 1, label: "Low to High" },
    { value: 2, label: "High to Low" },
  ];

  const optionsThree = [
    { value: "popular", label: "Popular" },
    { value: "toyota", label: "Toyota Camry SE 350" },
    { value: "audi", label: "Audi A3 2019 new" },
    { value: "ferrari", label: "Ferrari 458 MM Speciale" },
    { value: "chevrolet", label: "Chevrolet Camaro" },
    { value: "acura", label: "Acura Sport Version" },
  ];
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Car Listings" subtitle="Listings" />
      <div className="sortby-sec">
        <div className="container">
          <div className="sorting-div">
            <div className="row d-flex align-items-center">
              <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                <div className="count-search">
                  <p>
                    Showing <span>1-8</span> of 10 Results
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                <div className="product-filter-group">
                  <div className="sortbyset">
                    <span className="sortbytitle">Show : </span>
                    <div className="sorting-select select-one">
                      <Select
                        className="select w-100"
                        options={options}
                        placeholder="5"
                        isSearchable={false}
                      />
                    </div>
                    <div className="sorting-select select-two">
                      <Select
                        className="select w-100"
                        options={optionsTwo}
                        placeholder="Low to High"
                        isSearchable={false}
                      />
                    </div>
                    <div className="sorting-select select-three">
                      <Select
                        className="select"
                        options={optionsThree}
                        placeholder="Popular"
                        aria-labelledby="carDropdownLabel"
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="grid-listview">
                    <ul>
                      <li>
                        <Link to={routes.listinggrid}>
                          <i className="feather icon-grid"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={routes.listinglist} className="active">
                          <i className="feather icon-list"> </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section car-listing">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 theiaStickySidebar">
              <div className="stickysidebar">
                <ListingSidebar />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {data.map((car: CarListing, index: number) => (
                  <div className="listview-car" key={index}>
                    <div className="card">
                      <div className="blog-widget d-flex">
                        <div className="blog-img">
                          <Link to="/listing-details">
                            <ImageWithBasePath
                              src={`assets/img/${car.image}`}
                              className="img-fluid"
                              alt="blog-img"
                            />
                          </Link>
                        </div>
                        <div className="bloglist-content w-100">
                          <div className="card-body">
                            <div className="blog-list-head d-flex">
                              <div className="blog-list-title">
                                <h3>
                                  <Link to="/listing-details">{car.title}</Link>
                                </h3>
                                <h6>
                                  Category : <span>{car.category}</span>
                                </h6>
                              </div>
                              <div className="blog-list-rate">
                                <div className="list-rating">
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <span>({car.rating})</span>
                                </div>
                                <h6>
                                  {car.price} <span>/ Day</span>
                                </h6>
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
                                      alt="2018"
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
                                  <p>5 Persons</p>
                                </li>
                              </ul>
                            </div>

                            <div className="blog-list-head list-head-bottom d-flex">
                              <div className="blog-list-title">
                                <div className="title-bottom">
                                  <div className="car-list-icon">
                                    <ImageWithBasePath
                                      src={`assets/img/cars/${car.location.icon}`}
                                      alt=""
                                    />
                                  </div>
                                  <div className="address-info">
                                    <h5>
                                      <Link to="#">{car.location.name}</Link>
                                    </h5>
                                    <h6>
                                      <i className="feather icon-map-pin me-2" />
                                      {car.location.address}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="listing-button">
                                <Link
                                  to="/listing-details"
                                  type="submit"
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="blog-pagination">
                <nav>
                  <ul className="pagination page-item justify-content-center">
                    <li className="previtem">
                      <Link className="page-link" to="#">
                        <i className="fas fa-regular fa-arrow-left me-2"> </i>{" "}
                        Prev
                      </Link>
                    </li>
                    <li className="justify-content-center pagination-center">
                      <div className="page-group">
                        <ul>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="active page-link" to="#">
                              2{" "}
                              <span className="visually-hidden">(current)</span>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              4
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              5
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nextlink">
                      <Link className="page-link" to="#">
                        Next{" "}
                        <i className="fas fa-regular fa-arrow-right ms-2"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listinglist;
