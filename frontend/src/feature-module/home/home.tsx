import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Dayjs } from "dayjs";
import { all_routes } from "../router/all_routes";
import RentalDeals from "./rental_deals";
import ReviewsHome from '../home/reviews';
import {SelectPickUpPoints, SelectTurnPoint, DataPickerTurnPoint, DataPickerPointUp} from "../home/pickUpPoints";

const Home = () => {
  const routes = all_routes;
  /* const [selectedItems, setSelectedItems] = useState(Array(10).fill(false)); */
  const [setSelectedItems] = useState(Array(10).fill(false));
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const onChange = (time: Dayjs, timeString: string) => {
    console.log(time, timeString);
  };

  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  const settings = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  const one = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
 
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="banner-section banner-slider">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-8" data-aos="fade-down">
                <p className="explore-text">
                  Zaplanuj swoją podróż
                </p>
                <h1>Wynajmij <br></br>samochód u nas i <br></br><span>oszczędzaj</span></h1>
                <p>
                Potrzebujesz elastyczności w podróży? Z naszą wypożyczalnią samochodową możesz jechać tam, gdzie chcesz, kiedy chcesz. Wynajmij z nami i daj sobie wolność odkrywania nowych miejsc!
                </p>
                <div className="view-all">
                  <Link
                    to={routes.listinggrid}
                    className="btn btn-view d-inline-flex align-items-center"
                  >
                    Sprawdź naszą ofertę{" "}
                    <span>
                      <i className="feather icon-arrow-right ms-2" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Banner */}
      {/* Search */}
      <div className="section-search">
        <div className="container">
          <div className="search-box-banner">
            <form>
              <ul className="align-items-center">
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
                    <div className="group-img timepicker">
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
                  </div>
                  <div className="column-group-main">
                    <div className="input-block">
                      <div className="group-img timepicker">
                        <DataPickerTurnPoint></DataPickerTurnPoint>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="column-group-last">
                  <div className="input-block">
                    <div className="search-btn">
                      <Link
                      to={routes.listinggrid}>
                      <button className="btn search-button" type="submit">
                        {" "}
                        <i className="fa fa-search" aria-hidden="true" />
                        Szukaj
                      </button>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/* /Search */}
      {/* services */}
      <section className="section services">
        <div className="service-right">
          <ImageWithBasePath 
          src="assets/img/bg/service-right.svg" 
          className="img-fluid" 
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Zaplanuj swoją podróż </h2>
            <p>
            Bez względu na cel podróży, mamy idealny samochód dla Ciebie. Oferujemy wygodne i niezawodne pojazdy.
            </p>
          </div>
          {/* /Heading title */}
          <div className="services-work">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div>
                    <img
                      src="assets/img/iconbox-image-01-carsbooking-pl.png"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>1. Wybierz samochód</h3>
                    <p>
                    Wybierz samochód, który najbardziej odpowiada twoim potrzebom.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="">
                    <img className=""
                      src="assets/img/iconbox-image-02-carsbooking-pl.png"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>2. Uzupełnij dane</h3>
                    <p>
                    Wypełnij formularz, który jest potrzebny do dokonania rezerwacji.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-height">
                    <img
                      src="assets/img/iconbox-image-03-carsbooking-pl.png"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>3. w Drogę</h3>
                    <p>
                    Ciesz się samochodem, który wypożyczyłeś i ruszaj w drogę!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /services */}
      {/* Rental deals */}
        <RentalDeals></RentalDeals>
      {/* /Rental deals */}
      {/* Facts By The Numbers */}
      <section className="section facts-number">
        <div className="facts-right">
          <ImageWithBasePath
            src="assets/img/bg/facts-right.png"
            className="img-fluid"
            alt="facts right"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title text-white">Rzeczywistość w liczbach</h2>
            <p className="description text-white">
            Nie ma dwóch identycznych podróży, dlatego oferujemy ponad 100 modeli samochodów do wyboru! Bez względu na cel podróży.
            </p>
          </div>
          {/* /Heading title */}
          <div className="counter-group">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-heart.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={16000}
                          duration={3}
                          separator=","
                        />
                        <br />
                      </h4>
                      <p> Zadowolonych klientów </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-car.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={2547}
                          duration={3}
                          separator=","
                        />
                        +<br />
                      </h4>
                      <p>Wszystkich samochodów</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-headphone.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={625}
                          duration={3}
                          separator=","
                        />
                        +
                        <br />
                      </h4>
                      <p>Wypożyczonych pojazdów</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-history.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={200}
                          duration={3}
                          separator=","
                        />
                        +
                        <br />
                      </h4>
                      <p>Przyjechanych kilometrów</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Facts By The Numbers */}
      {/* About us Testimonials */}
        <ReviewsHome></ReviewsHome>
      {/* About us Testimonials */}
      {/* FAQ  */}
      <section className="section faq-section bg-light-primary">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Często zadawane pytania </h2>
            <p>
              Zapomnij o niepewnościach. Nasze często zadawane pytania dostarczą Ci wszystkich
              potrzebnych informacji.
            </p>
          </div>
          {/* /Heading title */}
          <div className="faq-info">
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqOne"
                  aria-expanded="false"
                >
                  Jak się z nami skontaktować?
                </Link>
              </h4>
              <div id="faqOne" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqTwo"
                  aria-expanded="false"
                >
                  Ile kosztuje wynajem samochodu w carsbooking.pl?
                </Link>
              </h4>
              <div id="faqTwo" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqThree"
                  aria-expanded="false"
                >
                  Od jakiego wieku można wynająć samochód?
                </Link>
              </h4>
              <div id="faqThree" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqFour"
                  aria-expanded="false"
                >
                  Jakie są wymagane dokumenty przy wynajmie?
                </Link>
              </h4>
              <div id="faqFour" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqFive"
                  aria-expanded="false"
                >
                  Czy dostanę samochód zatankowany do pełna??
                </Link>
              </h4>
              <div id="faqFive" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqSix"
                  aria-expanded="false"
                >
                  Czy mogę wynająć samochód na lotnisku?
                </Link>
              </h4>
              <div id="faqSix" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqSeven"
                  aria-expanded="false"
                >
                  Czy mogę wynająć samochód na lotnisku?
                </Link>
              </h4>
              <div id="faqSeven" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /FAQ */}
    </>
  );
};

export default Home;