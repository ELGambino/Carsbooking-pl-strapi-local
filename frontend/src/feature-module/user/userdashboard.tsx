import React, { useEffect } from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Select from "react-select";
import Aos from "aos";
import DashboardMenu from "./dashboardmenu";
import { all_routes } from "../router/all_routes";

const UserDashboard = () => {
  const route = all_routes
  const options = [
    { value: "last_30_days", label: "Last 30 Days" },
    { value: "last_7_days", label: "Last 7 Days" },
  ];

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Breadcrumbs title="Pulpit" subtitle="" />
      <DashboardMenu />

      <div className="content dashboard-content">
        <div className="container">
          {/* Status List
          <ul className="status-lists">
            <li className="approve-item">
              <div className="status-info">
                <span>
                  <i className="fa-solid fa-calendar-days" />
                </span>
                <p>Your Booking has been Approved by admin</p>
              </div>
              <Link to="#" className="view-detail">
                View Details
              </Link>
            </li>
            <li>
              <div className="status-info">
                <span>
                  <i className="fa-solid fa-money-bill" />
                </span>
                <p>
                  Your Refund request has been approved by admin &amp; your
                  payment will be updated in 3 days.
                </p>
              </div>
              <Link to="#" className="close-link">
                <i className="feather-x" />
              </Link>
            </li>
            <li className="bg-danger-light">
              <div className="status-info">
                <span>
                  <i className="fa-solid fa-money-bill" />
                </span>
                <p>
                  Your Refund request has been rejected by admin{" "}
                  <Link to="#">View Reason</Link>
                </p>
              </div>
              <Link to="#" className="close-link">
                <i className="feather-x" />
              </Link>
            </li>
          </ul>
          {/* /Status List */}
          {/* Content Header */}
          <div className="content-header">
            <h4>Pulpit</h4>
          </div>
          <div className="row">
            {/* Last 5 Bookings */}
            <div className="col-lg-8 d-flex">
              <div className="card user-card flex-fill">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <h5>Moje rezerwacje </h5>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive dashboard-table dashboard-table-info">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-lg flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-04.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Ferrari 458 MM Speciale
                                </Link>
                                <p>Rent Type : Hourly</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>Start date</h6>
                            <p>15 Sep 2023, 11:30 PM</p>
                          </td>
                          <td>
                            <h6>End Date</h6>
                            <p>15 Sep 2023, 1:30 PM</p>
                          </td>
                          <td>
                            <h6>Price</h6>
                            <h5 className="text-danger">$200</h5>
                          </td>
                          <td>
                            <span className="badge badge-light-secondary">
                              Upcoming
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-lg flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-05.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Kia Soul 2016
                                </Link>
                                <p>Rent Type : Hourly</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>Start date</h6>
                            <p>15 Sep 2023, 09:00 AM</p>
                          </td>
                          <td>
                            <h6>End Date</h6>
                            <p>15 Sep 2023, 1:30 PM</p>
                          </td>
                          <td>
                            <h6>Price</h6>
                            <h5 className="text-danger">$300</h5>
                          </td>
                          <td>
                            <span className="badge badge-light-secondary">
                              Upcoming
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-lg flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-01.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Toyota Camry SE 350
                                </Link>
                                <p>Rent Type : Day</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>Start date</h6>
                            <p>18 Sep 2023, 09:00 AM</p>
                          </td>
                          <td>
                            <h6>End Date</h6>
                            <p>18 Sep 2023, 05:00 PM</p>
                          </td>
                          <td>
                            <h6>Price</h6>
                            <h5 className="text-danger">$600</h5>
                          </td>
                          <td>
                            <span className="badge badge-light-warning">
                              Inprogress
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-lg flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-03.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Audi A3 2019 new
                                </Link>
                                <p>Rent Type : Weekly</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>Start date</h6>
                            <p>10 Oct 2023, 10:30 AM</p>
                          </td>
                          <td>
                            <h6>End Date</h6>
                            <p>16 Oct 2023, 10:30 AM</p>
                          </td>
                          <td>
                            <h6>Price</h6>
                            <h5 className="text-danger">$800</h5>
                          </td>
                          <td>
                            <span className="badge badge-light-success">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-lg flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-05.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  2018 Chevrolet Camaro
                                </Link>
                                <p>Rent Type : Hourly</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>Start date</h6>
                            <p>14 Nov 2023, 02:00 PM</p>
                          </td>
                          <td>
                            <h6>End Date</h6>
                            <p>14 Nov 2023, 04:00 PM</p>
                          </td>
                          <td>
                            <h6>Price</h6>
                            <h5 className="text-danger">$240</h5>
                          </td>
                          <td>
                            <span className="badge badge-light-success">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-lg flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-06.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Acura Sport Version
                                </Link>
                                <p>Rent Type : Monthly</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>Start date</h6>
                            <p>01 Dec 2023, 08:15 AM</p>
                          </td>
                          <td>
                            <h6>End Date</h6>
                            <p>01 Jan 2024, 08:15 AM</p>
                          </td>
                          <td>
                            <h6>Price</h6>
                            <h5 className="text-danger">$1000</h5>
                          </td>
                          <td>
                            <span className="badge badge-light-danger">
                              Cancelled
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Last 5 Bookings */}
            {/* Recent Transaction */}
            <div className="col-lg-4 d-flex">
              <div className="card user-card flex-fill">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <h5>Ostatnie transakcje</h5>
                    </div>
                    <div className="col-sm-6 text-sm-end">
                      <div className="booking-select">
                        <Select
                          className="select"
                          options={options}
                          placeholder={"Last 30 Days"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive dashboard-table dashboard-table-info">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="border-0">
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-md flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-04.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Ferrari 458 MM Speciale
                                </Link>
                                <p>Rent Type : Hourly</p>
                              </div>
                            </div>
                          </td>
                          <td className="border-0 text-end">
                            <span className="badge badge-light-secondary">
                              Upcoming
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt-0">
                            <div className="status-box">
                              <p>
                                <span>Status : </span>On 15 Sep 2023, 11:30 PM
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-0">
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-md flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-07.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Chevrolet Pick Truck 3.5L
                                </Link>
                                <p>Rent Type : Day</p>
                              </div>
                            </div>
                          </td>
                          <td className="border-0 text-end">
                            <span className="badge badge-light-warning">
                              Refund started{" "}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt-0">
                            <div className="status-box">
                              <p>
                                <span>Status : </span>Yet to recieve
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-0">
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-md flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-08.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Toyota Tacoma 4WD
                                </Link>
                                <p>Rent Type : Weekly</p>
                              </div>
                            </div>
                          </td>
                          <td className="border-0 text-end">
                            <span className="badge badge-light-danger">
                              Cancelled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt-0">
                            <div className="status-box">
                              <p>
                                <span>Status : </span>On 15 Sep 2023, 11:30 PM
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-0">
                            <div className="table-avatar">
                              <Link
                                  to={route.userbookings}
                                className="avatar avatar-md flex-shrink-0"
                              >
                                <ImageWithBasePath
                                  className="avatar-img"
                                  src="assets/img/cars/car-01.jpg"
                                  alt="Booking"
                                />
                              </Link>
                              <div className="table-head-name flex-grow-1">
                                <Link   to={route.userbookings}>
                                  Ford Mustang 4.0 AT
                                </Link>
                                <p>Rent Type : Monthly</p>
                              </div>
                            </div>
                          </td>
                          <td className="border-0 text-end">
                            <span className="badge badge-light-success">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt-0 pb-0 border-0">
                            <div className="status-box">
                              <p>
                                <span>Status : </span>On 20 Dec 2023, 05:20 PM
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Recent Transaction */}
          </div>
          {/* /Dashboard */}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
