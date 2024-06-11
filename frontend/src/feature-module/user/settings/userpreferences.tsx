import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import DashboardMenu from "../dashboardmenu";
import SettingsSidebar from "./settingssidebar";
import { all_routes } from "../../router/all_routes";

const UserPreferences = () => {
const route = all_routes
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      <>
        {/* Breadscrumb Section */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-12 col-12">
                <h2 className="breadcrumb-title">User Settings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={route.home}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      User Settings
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadscrumb Section */}
        {/* Dashboard Menu */}
        <DashboardMenu />
        {/* /Dashboard Menu */}
        {/* Page Content */}
        <div className="content settings-profile-content">
          <div className="container">
            {/* Content Header */}
            <div className="content-header content-settings-header">
              <h4>Settings</h4>
            </div>
            {/* /Content Header */}
            <div className="row">
              {/* Settings Menu */}
              <SettingsSidebar/>
              {/* /Settings Menu */}
              {/* Settings Details */}
              <div className="col-lg-9">
                <div className="settings-info">
                  <div className="settings-sub-heading">
                    <h4>Preferences</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="preferences-grid flex-fill">
                        <div className="preferences-heading">
                          <h5>Maintenance Mode</h5>
                          <div className="status-toggle">
                            <input
                              id="maintenance_mode"
                              className="check"
                              type="checkbox"
                              defaultChecked={true}
                            />
                            <label
                              htmlFor="maintenance_mode"
                              className="checktoggle"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="preferences-grid flex-fill">
                        <div className="preferences-heading">
                          <h5>Chat</h5>
                          <div className="status-toggle">
                            <input
                              id="chat_mode"
                              className="check"
                              type="checkbox"
                              defaultChecked={true}
                            />
                            <label htmlFor="chat_mode" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="preferences-grid flex-fill">
                        <div className="preferences-heading">
                          <h5>Wallet</h5>
                          <div className="status-toggle">
                            <input
                              id="wallet_mode"
                              className="check"
                              type="checkbox"
                              defaultChecked={true}
                            />
                            <label
                              htmlFor="wallet_mode"
                              className="checktoggle"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="preferences-grid flex-fill">
                        <div className="preferences-heading">
                          <h5>Bookings</h5>
                          <div className="status-toggle">
                            <input
                              id="bookings_mode"
                              className="check"
                              type="checkbox"
                              defaultChecked={true}
                            />
                            <label
                              htmlFor="bookings_mode"
                              className="checktoggle"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="preferences-grid flex-fill">
                        <div className="preferences-heading">
                          <h5>Wishlist</h5>
                          <div className="status-toggle">
                            <input
                              id="wishlist_mode"
                              className="check"
                              type="checkbox"
                              defaultChecked={true}
                            />
                            <label
                              htmlFor="wishlist_mode"
                              className="checktoggle"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex">
                      <div className="preferences-grid flex-fill">
                        <div className="preferences-heading">
                          <h5>Payments</h5>
                          <div className="status-toggle">
                            <input
                              id="payments_mode"
                              className="check"
                              type="checkbox"
                              defaultChecked={true}
                            />
                            <label
                              htmlFor="payments_mode"
                              className="checktoggle"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Settings Details */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
    </div>
  );
};

export default UserPreferences;
