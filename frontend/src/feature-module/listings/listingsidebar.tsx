import React from "react";
import { Link } from "react-router-dom";
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";


const ListingSidebar = () => {
  return (
    <>
      <form action="#" autoComplete="off" className="sidebar-form">
        {/* Customer */}
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
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Tesla
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Ford
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Mercediz Benz
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Audi
                      </label>
                      {/* View All */}
                      <div className="view-content">
                        <div className="viewall-One">
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Kia
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Honda
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Toyota
                          </label>
                        </div>
                      </div>
                      {/* /View All */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Customer */}
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
                  <label className="custom_check w-100">
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> Crossover
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> Sedan
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> Wagon
                  </label>
                  {/* View All */}
                  <div className="view-content">
                    <div className="viewall-One">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Pickup
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Wagon
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> SUV
                      </label>
                    </div>
                  </div>
                  {/* /View All */}
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
  );
};

export default ListingSidebar;
