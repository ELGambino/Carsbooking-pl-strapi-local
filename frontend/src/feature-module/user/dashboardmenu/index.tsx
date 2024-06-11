import React from "react";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { Link, useLocation, Route  } from "react-router-dom";

const DashboardMenu = () => {
  const routes = all_routes;
  const location = useLocation();
  const isLinkActive = (route: string) => {
    // Check if the current location matches the given route
    return location.pathname === route;
  };

  return (
    <>
    <div className="dashboard-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dashboard-menu">
              <ul>
                <li>
                  <Link to={routes.dashboard} className={isLinkActive(routes.dashboard) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/dashboard-icon.svg"
                      alt="Icon"
                    />
                    <span>Pulpit</span>
                  </Link>
                </li>
                <li>
                  <Link to={routes.userbookings} className={isLinkActive(routes.userBookings) || isLinkActive(routes.userBookingInprogress) || isLinkActive(routes.userBookingUpcoming) || isLinkActive(routes.userBookingComplete) || isLinkActive(routes.userBookingCancelled) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/booking-icon.svg"
                      alt="Icon"
                    />
                    <span>Moje rezerwacje</span>
                  </Link>
                </li>
                {/*}
                <li>
                  <Link to={routes.reviews} className={isLinkActive(routes.reviews) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/review-icon.svg"
                      alt="Icon"
                    />
                    <span>Opinie</span>
                  </Link>
                </li>
                <li>
                  <Link to={routes.wishlist} className={isLinkActive(routes.wishlist) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/wishlist-icon.svg"
                      alt="Icon"
                    />
                    <span>Lista ulubionych</span>
                  </Link>
                </li>
                <li>
                  <Link to={routes.messages} className={isLinkActive(routes.messages) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/message-icon.svg"
                      alt="Icon"
                    />
                    <span>Wiadomości</span>
                  </Link>
                </li>
                {/*}
                <li>
                  <Link to={routes.wallet} className={isLinkActive(routes.wallet) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/wallet-icon.svg"
                      alt="Icon"
                    />
                    <span>My Wallet</span>
                  </Link>
                </li>
                {*/}
                <li>
                  <Link to={routes.payment} className={isLinkActive(routes.payment) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/payment-icon.svg"
                      alt="Icon"
                    />
                    <span>Transakcje</span>
                  </Link>
                </li>
                <li>
                <Link to={routes.settings} className={isLinkActive(routes.settings) || isLinkActive(routes.security) || isLinkActive(routes.preference) || isLinkActive(routes.notification) || isLinkActive(routes.integration) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/settings-icon.svg"
                      alt="Icon"
                    />
                    <span>Ustawienia</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default DashboardMenu;
