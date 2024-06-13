import React, { useContext, useEffect, useState, useRef } from "react";
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import Breadcrumbs from "../common/Breadcrumbs";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import ImageWithBasePathApi from "../../core/data/img/ImageWithBasePathApi";
import { useParams } from 'react-router-dom';
import Aos from "aos";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import {SelectPickUpPoints, SelectTurnPoint, DataPickerTurnPoint, DataPickerPointUp, MyComponent} from "../home/pickUpPoints";

const CARS = gql`
query($breed: String!){
  cars(filters: { Brands: { containsi: $breed }}) {
    data {
      id
      attributes {
        Name
        Type
        EngineType
        Gearbox
        Brands
        NumberOfSeats
        EnginePower
        Description
        NumberOfDoors
        YearOfProduction
        EngineCapacity
        AirConditioning
        Featured
        Image {
          data {
            id
            attributes {
              alternativeText
              formats
              url
            }
          }
        }
      }
    }
  }
}
`;

const ListingGrid = () => {
  const [breed, setbreed] =  useState('');
  const routes = all_routes;
  const { register, handleSubmit, errors } = useForm();
  const { loading, error, data, refetch } = useQuery(CARS, {
    variables: { breed }
  })
  const checkboxRef = useRef(null);
  const formSubmit = () => {

  }

  if (loading) return 'Ładowanie...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <div className="main-wrapper">
    <Breadcrumbs title="Wypożyczalnia" subtitle="Lista" />

      <section className="section car-listing">
        <div className="container">
          <div className="row">
          {/*
          <div className="col-lg-3 col-12 theiaStickySidebar">
              <div className="stickybar">
                <>
                <form onSubmit={formSubmit} autoComplete="off" className="sidebar-form">
                  {/* Customer
                  <div className="product-search">
                    <div className="form-custom">
                      <input type="text" className="form-control" id="member_search1" />
                      <span>
                        <ImageWithBasePath src="assets/img/icons/search.svg" alt="img" />
                      </span>
                    </div>
                  </div>
                  <div className="accordion" id="accordionMain1">
                    <div className="card-header-new" id="headingOne">
                      <h6 className="filter-title">
                        <Link
                          to="#"
                          className="w-100"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Marka samochodu
                          <span className="float-end">
                            <i className="fa-solid fa-chevron-down"></i>
                          </span>
                        </Link>
                      </h6>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="card-body-chat">
                        <div className="row">
                          <div className="col-md-12">
                            <div id="checkBoxes1">
                              <div className="selectBox-cont">
                                <label className="custom_check w-100">
                                  <input
                                  type="checkbox" 
                                  value="Bmw"
                                  {...register('Bmw', {
                                    onChange: (e) => {setbreed(e.target.value)}
                                  })}
                                  />
                                  <span className="checkmark" /> BMW
                                </label>
                                <label className="custom_check w-100">
                                  <input
                                  type="checkbox" 
                                  value="Bmw"
                                  {...register('Bmw', {
                                    onChange: (e) => {setbreed(e.target.value)}
                                  })}
                                  />
                                  <span className="checkmark" /> BMW
                                </label>
                                <label className="custom_check w-100">
                                  <input
                                  type="checkbox" 
                                  value="Bmw"
                                  {...register('Bmw', {
                                    onChange: (e) => {setbreed(e.target.value)}
                                  })}
                                  />
                                  <span className="checkmark" /> BMW
                                </label>
                                <label className="custom_check w-100">
                                  <input
                                  type="checkbox" 
                                  value="Bmw"
                                  {...register('Bmw', {
                                    onChange: (e) => {setbreed(e.target.value)}
                                  })}
                                  />
                                  <span className="checkmark" /> BMW
                                </label>
                                <label className="custom_check w-100">
                                  <input
                                  type="checkbox" 
                                  value="Bmw"
                                  {...register('Bmw', {
                                    onChange: (e) => {setbreed(e.target.value)}
                                  })}
                                  />
                                  <span className="checkmark" /> BMW
                                </label>
                                <label className="custom_check w-100">
                                  <input
                                  type="checkbox" 
                                  value="Bmw"
                                  {...register('Bmw', {
                                    onChange: (e) => {setbreed(e.target.value)}
                                  })}
                                  />
                                  <span className="checkmark" /> BMW
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Customer
                  <div className="accordion" id="accordionMain2">
                    <div className="card-header-new" id="headingTwo">
                      <h6 className="filter-title">
                        <Link
                          to="#"
                          className="w-100 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Typ nadwozia
                          <span className="float-end">
                            <i className="fa-solid fa-chevron-up"></i>
                          </span>
                        </Link>
                      </h6>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body-chat">
                        <div id="checkBoxes2">
                          <div className="selectBox-cont">
                            <label className="custom_check w-100">
                              <input type="checkbox" name="username" />
                              <span className="checkmark" /> Convertible
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary filter-btn"
                  >
                    <span>
                      <i className="feather icon-filter me-2" />
                    </span>
                    Filtruj
                  </button>
                  <Link to="#" className="reset-filter">
                    Resetuj filtry
                  </Link>
                </form>
                </>
              </div>
            </div>*/}
            <div className="col-lg-12">
              <div className="row">
                {/* col */}
                {data.cars.data.map(({ id, attributes }) => (
                  <div
                    key={id}
                    className="col-xl-4 col-lg-4 col-md-4 col-12"
                  >
                    <div className="listing-item">
                      <div className="listing-img">
                        <Link to="{routes.listingdetails}">
                          <ImageWithBasePathApi
                            src={attributes.Image.data.attributes.url}
                            className="img-fluid"
                            alt={attributes.Image.data.attributes.alternativeText}
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <h3 className="listing-title">
                            <Link to="">{attributes.Name}</Link>
                          </h3>
                          <div className="list-rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <span>(5.0)</span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt=""
                                />
                              </span>
                              <p>{attributes.Type}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-02.svg"
                                  alt=""
                                />
                              </span>
                              <p>{attributes.EnginePower}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-03.svg"
                                  alt=""
                                />
                              </span>
                              <p>{attributes.EngineType}</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-04.svg"
                                  alt=""
                                />
                              </span>
                              <p>{attributes.Gearbox}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-05.svg"
                                  alt=""
                                />
                              </span>
                              <p>{attributes.YearOfProduction}</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-06.svg"
                                  alt="Persons"
                                />
                              </span>
                              <p>{attributes.NumberOfSeats}</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <Link
                            to={`/listings/car-details/${id}`}
                            className="btn btn-order"
                          >
                            Sprawdź cenę
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* /col */}
                {/* col */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingGrid;