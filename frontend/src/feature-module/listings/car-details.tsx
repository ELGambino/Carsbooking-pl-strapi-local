import React from "react";
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import ImageWithBasePathApi from "../../core/data/img/ImageWithBasePathApi";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import dayjs from 'dayjs';
import {SelectPickUpPoints, SelectTurnPoint, DataPickerTurnPoint, DataPickerPointUp} from "../home/pickUpPoints";
require('dayjs/locale/pl');

export default function CarDetails() {
    const CAR = gql`
    query GetCars($id: ID!) {
    car(id: $id) {
    data {
      id
      attributes {
        Name
        Type
        EngineType
        Gearbox
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
        Feature {
          id
          Name
        }
        Reviews {
          data {
            id
            attributes {
              Name
              Description
              Review
              createdAt
            }
          }
        }
        Rentals {
          data {
            id
            attributes {
              Name
              Logo {
                data {
                  id
                  attributes {
                    alternativeText
                    formats
                    url
                  }
                }
              }
              Address
              Nip
              Email
              Description
              AdditionalServices {
                id
                Name
                Price
              }
            }
          }
        }
      }
    }
  }
  prices {
    data {
      id
      attributes {
        priceName
        rentalPrice
        Cars(filters: { id: { eq: $id } }) {
          data {
            id
            attributes {
              Name
              Rentals {
                data {
                  id
                  attributes {
                    Name
                    Logo {
                      data {
                        id
                        attributes {
                          alternativeText
                          formats
                          url
                        }
                      }
                    }
                    Address
                    Nip
                    Email
                    Description
                    AdditionalServices {
                      id
                      Name
                      Price
                    }
                    PickUpPoints {
                      data {
                        id
                        attributes {
                          City
                          Address
                          PostalCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `

    function getStars(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (rating - 1 < i) {
            stars.push(<i className="fa-regular fa-star"></i>);
          } else {
            stars.push(<i className="fas fa-star filled me-1"></i>);
          }
        }
        return stars;
    }

    const routes = all_routes;
    const { id } = useParams();
    const { loading, error, data } = useQuery(CAR, {
        variables: { id }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    function priceRental() {
        return (
            <>
            {data.prices.data.map(({ id, attributes }) => (
                <>
                {(() => {
                    if(Object.keys(`${attributes.Cars.data}`).length > 0 && Object.keys(`${attributes}`)) {
                        const rentalPrices= parseInt(`${attributes.rentalPrice}`);
                        return (
                        <>  
                            {attributes.Cars.data.map(({ id, attributes }) => (
                                <>
                                {attributes.Rentals.data.map(({ id, attributes }) => (
                                    <>
                                    <div key={id} className="rental-item">
                                        <div className="rental-item-column">
                                        <ImageWithBasePathApi 
                                            src={attributes.Logo.data.attributes.url} 
                                            alt={attributes.Logo.data.attributes.alternativeText} 
                                        />
                                        </div>

                                        <div className="rental-item-column">
                                            <h2>{attributes.Name}</h2>
                                            <div className="rental-item-details">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>Liczba punktów odbioru:</p>
                                                <p></p>
                                            </div>
                                            <div className="rental-item-details">
                                                <i className="fa-solid fa-car-rear"></i>
                                                <p>Liczba samochodów: 14</p>
                                                <p></p>
                                            </div>
                                        </div>

                                        <div className="rental-item-column">
                                            <h3>Dodatkowe opcje:</h3>
                                            {attributes.AdditionalServices.map(({ id, Name, Price }) => (
                                                <div key={id} className="rental-additional-services">
                                                    <p>- {Name}</p>
                                                    <p className="rental-additional-price">{Price} zł</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="rental-item-column flex-end">
                                            <h4><span>Cena:</span>{rentalPrices} zł</h4>
                                            <p className="rental-item-price-subtitle">Dodatkowo kaucja zwrotna: 0,00 zł</p>
                                            <p className="rental-item-price-subtitle">Udział własny w szkodzie: 3 000,00 zł.</p>
                                            <Link
                                            to={routes.payment}>
                                            <button
                                                className="btn btn-primary check-available w-100"
                                                type="button"
                                            >
                                                Zarezerwuj samochód
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                    </>
                                ))}
                                </>
                            ))}
                        </>
                        )
                    }
                })()}
                </>
            ))}
            </>
        );
    }
    
    return (
        <>
        <div className="main-wrapper">
            {/* Breadcrums */}
            <div className="breadcrumb-bar">
                <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-md-12 col-12">
                    <h2 className="breadcrumb-title">{data.car.data.attributes.Name}</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to={routes.home}>Carsbooking.pl</Link>
                        </li>
                        <li className="breadcrumb-item">
                            {data.car.data.attributes.Name}
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            {/* Product Details */}
            <section className="section product-details">
            <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <div className="detail-product">
                    <div className="product-img">
                        <ImageWithBasePathApi src={data.car.data.attributes.Image.data.attributes.url} alt={data.car.data.attributes.Image.data.attributes.alternativeText} />
                    </div>
                </div>
                {/*Listing Features Section*/}
                <div className="review-sec specification-card ">
                    <div className="review-header">
                    <h4>Specyfikacja</h4>
                    </div>
                    <div className="card-body">
                    <div className="lisiting-featues">
                        <div className="row">
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>Rodzaj </span>
                            <h6>{data.car.data.attributes.Type}</h6>
                            </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>Skrzynia biegów</span>
                            <h6>{data.car.data.attributes.Gearbox}</h6>
                            </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>Typ silnika</span>
                            <h6>{data.car.data.attributes.EngineType}</h6>
                            </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>Rok produkcji</span>
                            <h6>{data.car.data.attributes.YearOfProduction}</h6>
                            </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>AC</span>
                            <h6>{data.car.data.attributes.AirConditioning}</h6>
                            </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>Liczba drzwi</span>
                            <h6>{data.car.data.attributes.NumberOfDoors}</h6>
                            </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>Moc silnika</span>
                            <h6>{data.car.data.attributes.EnginePower}</h6>
                            </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-lg-3 col-md-4">
                            <div className="featues-info">
                            <span>Pojemność silnika</span>
                            <h6>{data.car.data.attributes.EngineCapacity}</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Listing Feature */}
                <div className="review-sec listing-feature">
                    <div className="review-header">
                    <h4>Funkcje samochodu</h4>
                    </div>
                    <div className="listing-description">
                    <div className="row">
                        <div className="col-md-12">
                        <ul className="listing-feature-ul">
                            {data.car.data.attributes.Feature.map(({ id, Name }) => (
                            <li key={id}>
                            <span>
                                <i className="fa-solid fa-circle"></i>
                            </span>
                                {Name}
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                {/*/Listing Features Section*/}
                <div className="review-sec extra-service mb-0">
                    <div className="review-header">
                    <h4>Charakterystyka samochodu</h4>
                    </div>
                    <div className="description-list">
                        <BlocksRenderer content={data.car.data.attributes.Description} />
                    </div>
                </div>
                {/* Rentals */}
                <div id="rentals-list" className="review-sec extra-service">
                    <div className="review-header">
                    <h4>Dostępny w wypożyczalniach</h4>
                    </div>
                    <div className="rentals-list">
                        {priceRental()}
                    </div>
                </div>
                {/* Reviews */}
                <div className="review-sec listing-review">
                    <div className="review-header">
                    <h4>
                        Opinie klientów
                    </h4>
                    </div>
                    {data.car.data.attributes.Reviews.data.map(({ id, attributes }) => (
                    <div className="review-card">
                    <div className="review-header-group">
                        <div className="review-widget-header">
                        <div className="review-design">
                            <h6>{attributes.Name}</h6>
                            <p>{dayjs(attributes.createdAt).format("DD/MM/YYYY")}</p>
                        </div>
                        </div>
                        <div className="reviewbox-list-rating">
                        <p>
                            {getStars(attributes.Review)}
                            <span> ({attributes.Review}.0)</span>
                        </p>
                        </div>
                    </div>
                        <BlocksRenderer content={attributes.Description} />
                    </div>
                    ))}
                </div>
                {/* Add Reviews
                <div className="review-sec leave-reply-form">
                    <div className="review-header">
                    <h4>Dodaj opinie</h4>
                    </div>
                    
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
                                        Imię i nazwisko
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-block">
                                    <label>
                                        Treść opinii:
                                        <span className="text-danger">*</span>
                                    </label>
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
                                    Dodaj opinie
                                </button>
                                </div>
                            </form>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                */}
                </div>
                <div className="col-lg-4 theiaStickySidebar">
                <div className="stickysidebar">
                    
                    <div className="review-sec mt-0">
                    <div className="review-header">
                        <h4>Sprawdź dostępność</h4>
                    </div>
                    <div>
                        <form>
                        <ul>
                            <li className="column-group-main">
                            <div className="input-block">
                                <label>Punkt odbioru</label>
                                <div className="group-img">
                                    <SelectPickUpPoints></SelectPickUpPoints>
                                </div>
                            </div>
                            </li>
                            <li className="column-group-main">
                            <div className="input-block">
                                <label>Data odbioru</label>
                                <div className="group-img">
                                    <DataPickerPointUp></DataPickerPointUp>
                                </div>
                            </div>
                            </li>
                            <li className="column-group-main">
                            <div className="input-block">
                                <label>Punkt zwrotu</label>
                                <div className="group-img">
                                    <SelectTurnPoint></SelectTurnPoint>
                                </div>
                            </div>
                            </li>
                            <li className="column-group-main">
                            <div className="input-block">
                                <label>Data zwrotu</label>
                                <div className="group-img">
                                    <DataPickerTurnPoint></DataPickerTurnPoint>
                                </div>
                            </div>
                            </li>
                            {/*}
                            <li className="column-group-last">
                            <div className="input-block mb-0">
                                <div className="search-btn">
                                <Link to="#rentals-list">
                                <button
                                    className="btn btn-primary check-available w-100"
                                    type="button"
                                >
                                    {" "}
                                    Wybierz wypożyczalnie
                                </button>
                                </Link>
                                </div>
                            </div>
                            </li>
                            {*/}
                        </ul>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </section>
    </div>
        </>
    )
}