import React from 'react';
import { Link, Routes } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Slider from "react-slick";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import ImageWithBasePathApi from "../../core/data/img/ImageWithBasePathApi";
import { all_routes } from "../router/all_routes";

const CARS = gql`
query {
    cars(filters: { Featured: {eq: true}}) {
      data {
        id
        attributes  {
          Name
          Type
          EngineType
          Gearbox
          NumberOfSeats
          Brands
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
`
const one = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
};

export default function PopularServices() {

  const { loading, error, data } = useQuery(CARS)
  const routes = all_routes;
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
    {/* Rental deals */}
    <section className="section popular-services">
        <div className="container">
        {/* Heading title*/}
        <div className="section-heading" data-aos="fade-down">
            <h2>Nasze rekomendacje</h2>
            <p>
            Odkryj najlepsze oferty wynajmu samochodów, wyselekcjonowane specjalnie dla Ciebie 
            przez nasz zespół ekspertów!
            </p>
        </div>
        {/* /Heading title */}
        <div className="row">
            <div className="popular-slider-group">
            <div className="owl-carousel rental-deal-slider owl-theme">
                <Slider {...one} className="service-slider">
                {/* owl carousel item */}
                {data.cars.data.map(({ id, attributes }) => (
                <div key={id} className="rental-car-item">
                    <div className="listing-item mb-0">
                    <div className="listing-img">
                        <Link>
                        <ImageWithBasePathApi
                            src={attributes.Image.data.attributes.url}
                            className="img-fluid"
                            alt={attributes.Image.data.attributes.alternativeText}
                        />
                        </Link>
                    </div>
                    <div className="listing-content">
                        <div className="listing-features">
                        <div className="list-rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(5.0)</span>
                        </div>
                        <h3 className="listing-title">
                            <Link>
                                {attributes.Name}
                            </Link>
                        </h3>
                        </div>
                        <div className="listing-details-group">
                        <ul>
                            <li>
                            <span>
                                <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Automatyczna"
                                />
                            </span>
                            <p>{attributes.Gearbox}</p>
                            </li>
                            <li>
                            <span>
                                <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="10 KM"
                                />
                            </span>
                            <p>{attributes.EnginePower}</p>
                            </li>
                            <li>
                            <span>
                                <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Benzyna"
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
                                alt="Energetyczny"
                                />
                            </span>
                            <p>{attributes.Type}</p>
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
                            <p>{attributes.NumberOfSeats} osobowy</p>
                            </li>
                        </ul>
                        </div>
                        <div className="listing-button">
                        <Link to={`/listings/car-details/${id}`}
                            className="btn btn-order"
                        >
                            Sprawdź cenę
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
                {/* /owl carousel item */}
                </Slider>
            </div>
            </div>
        </div>
        {/* View More */}
        <div className="view-all text-center" data-aos="fade-down">
            <Link
            to={routes.listinggrid}
            className="btn btn-view d-inline-flex align-items-center"
            >
            Sprawdź nasze rekomendacje{" "}
            <span>
                <i className="feather icon-arrow-right ms-2" />
            </span>
            </Link>
        </div>
        {/* View More */}
        </div>
    </section>
    {/* /Rental deals */}
    </>
  )
}