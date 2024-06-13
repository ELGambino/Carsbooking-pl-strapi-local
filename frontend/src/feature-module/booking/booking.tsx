import React from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";


const Booking = () => {
  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Potwierdzenie zamówienia" subtitle="Rezerwacja samochodu" />
      <section className="order-confirmation">
        <div className="container">
          <div className="confirm-order">
            <div className="section-title">
              <h3>Potwierdzenie zamówienia</h3>
              <h5>
                Łącznie do zapłaty : <span>250 zł</span>
              </h5>
            </div>
            <div className="booking-details order-confirm-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Samochód</h4>
                    <Link to="#">Edytuj</Link>
                  </div>
                  <div className="order-car">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/detail-smallcar-img-2.png"
                        alt="img"
                      />
                    </span>
                    <h5>
                      BMW Seria 740I<span>250 zł</span>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Dodatkowe usługi</h4>
                    <Link to="#">Edytuj</Link>
                  </div>
                  <ul className="address-info">
                    <li>Fotelik dla dziecka : 100 zł</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Szczegóły płatości</h4>
                    <Link to="#">Edytuj</Link>
                  </div>
                  <div className="visa-card">
                    <h6>Płatność przy odbiorze</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Punkt odbioru &amp; Data</h4>
                    <Link to="#">Edit</Link>
                  </div>
                  <ul className="address-info">
                    <li>Lubartów, 21-100 Lubartów - Dworzec PKS</li>
                    <li>13/06/2024 - 11:00</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Dane osobowe</h4>
                    <Link to="#">Edytuj</Link>
                  </div>
                  <ul className="address-info">
                    <li>Arkadiusz Zieliński</li>
                    <li>office@carsbooking.pl</li>
                    <li>+48 731-495-264</li>
                    <li>ul. Marii konopnickiej 9m5, 65-407 Zielona Góra</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Punkt Zwrotu</h4>
                    <Link to="#">Edytuj</Link>
                  </div>
                  <ul className="address-info mb-0">
                    <li>Lubartów, 21-100 Lubartów - Dworzec PKS</li>
                    <li>21/06/2024 - 12:00</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="place-order-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#pages_edit"
              >
                <i className="feather icon-bar-chart me-2" />
               
              
                Złoż Zamówienie
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal custom-modal fade check-availability-modal payment-success-modal"
        id="pages_edit"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className="payment-success">
                <span className="check">
                  <i className="fa-solid fa-check-double">
                  </i>
                </span>
                <h5>Potwierdzenie zamówienia</h5>
                <p>
                  Twoje zamówienie zostało złożone poprawnie. Numer transakcji :
                  <span> #5064164454</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
