import React, { useContext, useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import Breadcrumbs from "../common/Breadcrumbs";
import ListingSidebar from "./listingsidebar";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import ImageWithBasePathApi from "../../core/data/img/ImageWithBasePathApi";
import { useParams } from 'react-router-dom';
import Aos from "aos";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import $ from 'jquery';

const CARS = gql`
query($brand: String) {
  cars(filters: {Brands: {eq: $brand}}) {
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

const { brand } = useParams();
const ListingGrid = () => {

  const routes = all_routes;

  const { loading, error, data } = useQuery(CARS, {
    variables: {brand}
  })

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="main-wrapper">
    <Breadcrumbs title="Wypożyczalnia" subtitle="Lista" />

      <section className="section car-listing">
        <div className="container">
          <div className="row">
          <div className="col-lg-3 col-12 theiaStickySidebar">
              <div className="stickybar">
                <ListingSidebar />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {/* col */}
                {data.cars.data.map(({ id, attributes }) => (
                  <div
                    key={id}
                    className="col-xl-6 col-lg-6 col-md-6 col-12"
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
                        <div className="fav-item">
                          <span className="featured-text"></span>
                          <Link to="#" className="fav-icon">
                            <i className="feather icon-heart"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features">
                          <Link to="#" className="author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-0.jpg"
                              alt="author"
                            />
                          </Link>
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
