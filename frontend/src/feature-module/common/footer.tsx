import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { all_routes } from "../router/all_routes";
import { Mail, PhoneCall, Send } from "react-feather";

const Footer = () => {

  const route = all_routes
  return (
    <>
      {/* Footer */}
      <div className="footer">
        {/* Footer Top */}
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h5 className="footer-title">Carsbooking.pl</h5>
                      <ul>
                        <li>
                          <Link to={route.home}>o Firmie</Link>
                        </li>
                        <li>
                          <Link to="#">Sklep Toyota</Link>
                        </li>
                        <li>
                          <Link to="#">Carsbooking.pl USA</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Dreamsrentals Worldwide
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Carsbooking.pl Racing</Link>
                        </li>
                        <li>
                          <Link to="#">Carsbooking.pl Racing</Link>
                        </li>
                        <li>
                          <Link to="#">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-4 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h5 className="footer-title">Typy samochodów</h5>
                      <ul>
                        <li>
                          <Link to="#">Wszystkie rodzaje</Link>
                        </li>
                        <li>
                          <Link to="#">SUVy</Link>
                        </li>
                        <li>
                          <Link to="#">Ciężarówki</Link>
                        </li>
                        <li>
                          <Link to="#">Osobowe</Link>
                        </li>
                        <li>
                          <Link to="#">Crossovery</Link>
                        </li>
                        <li>
                          <Link to="#">Elektryczne</Link>
                        </li>
                        <li>
                          <Link to="#">Hybrydowe</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                  <div className="col-lg-4 col-md-6">
                    {/* Footer Widget */}
                    <div className="footer-widget footer-menu">
                      <h5 className="footer-title">Odnośniki</h5>
                      <ul>
                        <li>
                          <Link to="#">Moje konto</Link>
                        </li>
                        <li>
                          <Link to="#">Zamówienia</Link>
                        </li>
                        <li>
                          <Link to="#">Opinie klientów</Link>
                        </li>
                        <li>
                          <Link to="#">Lista ulubionych</Link>
                        </li>
                        <li>
                          <Link to="#">Wiadomości</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Ustawienia
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Mój portfel</Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Footer Widget */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="footer-contact footer-widget">
                  <h5 className="footer-title">Kontakt</h5>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <PhoneCall />

                      </span>
                      <div className="addr-info">
                        <Link to="tel:+1(888)7601940">+48 731-495-264</Link>
                      </div>
                    </div>
                    <div className="footer-address">
                      <span>
                      <Mail/>
                      </span>
                      <div className="addr-info">
                        <Link to="mailto:support@example.com">
                          office@carsbooking.pl
                        </Link>
                      </div>
                    </div>
                    <div className="update-form">
                      <form action="#">
                        <span>
                          <Mail/>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Wprowadź adres e-mail"
                        />
                        <button type="submit" className="btn btn-subscribe">
                          <span>
                            <Send />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="footer-social-widget">
                    <h6>Media społecznościowe</h6>
                    <ul className="nav-social">
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f fa-facebook fi-icon" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>© 2024 Carsbooking. Wszytkie prawa zasstrzeżone.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <div className="vistors-details">
                      <ul className="d-flex">
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/icons/paypal.svg"
                              alt="Paypal"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/icons/visa.svg"
                              alt="Visa"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/icons/master.svg"
                              alt="Master"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/icons/applegpay.svg"
                              alt="applegpay"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </div>
      {/* /Footer */}
    </>
  );
};

export default Footer;
