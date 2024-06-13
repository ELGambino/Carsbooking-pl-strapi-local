import React, { useEffect } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumbs from "../common/Breadcrumbs";
import Aos from "aos";
import { Link } from "react-router-dom";
import ReviewsHome from '../home/reviews';

const AboutUs = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* Breadscrumb Section */}
      <Breadcrumbs title="Historia naszej Firmy" subtitle="Nasza Firma" />
      {/* /Breadscrumb Section */}
      {/* About */}
      <section className="section about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-down">
              <div className="about-img">
                <div className="abt-img">
                  <ImageWithBasePath
                    src="assets/img/carsbooking-pl-historia-naszej-firmy.jpg"
                    className="img-fluid"
                    alt="About us"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-down">
              <div className="about-content">
                <h6>Historia naszej Firmy</h6>
                <h2>Liderzy na Rynku Wypożyczalni Samochodów</h2>
                <p>
                Nasza firma specjalizuje się w wynajmie samochodów, oferując ponad 100 modeli do wyboru, aby sprostać każdemu Twojemu wymaganiu. Z pasją i profesjonalizmem zapewniamy naszym klientom komfort i niezawodność na każdej trasie. Nasz priorytet to zadowolenie klientów, dlatego dbamy o najwyższą jakość obsługi i stan techniczny pojazdów. Bez względu na cel Twojej podróży, mamy idealne auto dla Ciebie. Poznaj naszą ofertę i doświadcz  wynajmu samochodów z Carsbooking.pl!
                </p>
                <p>
                Bez względu na to, czy planujesz krótką wycieczkę, dłuższą podróż służbową, czy rodzinne wakacje, znajdziesz u nas idealny pojazd. Wybierz naszą firmę i doświadcz wygody, niezawodności i doskonałej obsługi klienta, która uczyni Twoją podróż niezapomnianą. Poznaj naszą ofertę już dziś i ciesz się wolnością na drogach!
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>Różnorodność dostępnych samochodów</li>
                      <li>Kompetentna i przyjazna obsługa</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>Regularne przeglądy techniczne i konserwacje</li>
                      <li>Prosty i wygodny proces rezerwacji</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About */}

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
      <>
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
    </>
  );
};

export default AboutUs;
