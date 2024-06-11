import React from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import { Link } from "react-router-dom";
import { Info } from "react-feather";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";

const BookingCheckout = () => {
  const routes = all_routes;
  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Booking" subtitle="Pages" />
      <section className="booking-section">
        <div className="container">
          <ul
            className="nav nav-pills booking-tab"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item">
              <Link
                className="nav-link active"
                id="pills-booking-tab"
                data-bs-toggle="pill"
                to="#pills-booking"
                role="tab"
                aria-controls="pills-booking"
                aria-selected="true"
              >
                <span>Step 1</span>
                <h5>Booking Details</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="pills-payment-tab"
                data-bs-toggle="pill"
                to="#pills-payment"
                role="tab"
                aria-controls="pills-payment"
                aria-selected="false"
              >
                <span>Step 2</span>
                <h5>Payments Details</h5>
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-booking"
              role="tabpanel"
              aria-labelledby="pills-booking-tab"
            >
              <div className="booking-details">
                <div className="booking-title">
                  <h3>Booking Details</h3>
                </div>
                <div className="row booking-info">
                  <div className="col-md-4 col-sm-6 pickup-address">
                    <h5>Pickup</h5>
                    <p>45, 4th Avanue Mark Street USA</p>
                    <span>Date &amp; time : 11 Jan 2023</span>
                  </div>
                  <div className="col-md-4 col-sm-6 drop-address">
                    <h5>Drop Off</h5>
                    <p>78, 10th street Laplace USA</p>
                    <span>Date &amp; time : 11 Jan 2023</span>
                  </div>
                  <div className="col-md-4 col-sm-6 booking-amount">
                    <h5>Amount to be paid</h5>
                    <h6>
                      <span>$315 </span>
                      <Info size={18} />
                    </h6>
                  </div>
                </div>
                <div className="booking-form">
                  <div className="booking-title">
                    <h5>Enter Below details</h5>
                  </div>
                  <form className="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-block">
                          <label>
                            Enter Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <label>
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <label>
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="+ 1 65656565656"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <label>
                            Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Adderss"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-block">
                          <label>
                            Comments <span className="text-danger"> *</span>{" "}
                          </label>
                          <textarea
                            rows={4}
                            className="form-control"
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="payment-btn">
                      <button
                        className="btn btn-primary submit-review"
                        type="submit"
                      >
                        Go to Payment
                        <i className="fa-solid fa-arrow-right ms-2">
                        </i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="back-detail-page">
                <Link to={routes.listingdetails}>
                  <i className="fa-solid fa-arrow-left me-2">
                  </i>{" "}
                  Back to detail page
                </Link>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-payment"
              role="tabpanel"
              aria-labelledby="pills-payment-tab"
            >
              <div className="booking-details payment-details">
                <div className="booking-title">
                  <h3>Payment Details</h3>
                </div>
                <div className="booking-info">
                  <div className="booking-amount">
                    <h5>Your Payment</h5>
                    <h6>
                      <span>$315 </span>
                      <Info size={18} />{" "}
                    </h6>
                  </div>
                </div>
                <div className="payment-method">
                  <h4>Choose your Payment Method</h4>
                  <ul>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/payment-1.svg" alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/payment-2.svg" alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/payment-3.svg" alt="img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/payment-4.svg" alt="img" />
                      </Link>
                    </li>
                  </ul>
                  <div className="booking-form">
                    <div className="booking-title">
                      <h5>Enter Below details</h5>
                    </div>
                    <form className="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label>
                              Card Number <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="45612212255455"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block">
                            <label>
                              Expiration date{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="12/25"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-block">
                            <label>
                              Security number{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="input-block payment-checkbox m-0">
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="rememberme"
                              className="rememberme"
                            />
                            <span className="checkmark" />
                            Save this account for future transaction
                          </label>
                        </div>
                      </div>
                      <div className="payment-btn">
                        <button
                          className="btn btn-primary submit-review w-100"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#pages_edit"
                        >
                          Pay $315
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="back-detail-page">
                <Link to={routes.booking}>
                  <i className="fa-solid fa-arrow-left me-2">
                  </i>{" "}
                  Back to Booking Detail
                </Link>
              </div>
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
                <h5>Payment Successful</h5>
                <p>
                  You Payment has been successfully done. Trasaction id :
                  <span> #5064164454</span>
                </p>
                <div className="order-confirm">
                  <Link to={routes.booking}>
                    Go to Order Confirmation
                    <i className="fa-solid fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCheckout;
