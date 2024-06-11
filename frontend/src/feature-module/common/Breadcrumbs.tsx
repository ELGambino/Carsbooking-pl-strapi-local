import React from "react";
import { Link, useLocation } from "react-router-dom";
import { breadcrumbs } from "../../core/data/interface/interface";
import { all_routes } from "../router/all_routes";

const Breadcrumbs = (props: breadcrumbs) => {
  const routes = all_routes;
  const location = useLocation();
  let addButton = null;
  if (
    location.pathname === routes.listinggrid ||
    location.pathname === routes.listinglist ||
    location.pathname === routes.bookingcheckout ||
    location.pathname === routes.booking ||
    location.pathname === routes.invoice ||
    location.pathname === routes.listingdetails ||
    location.pathname === routes.listingcar ||
    location.pathname === routes.ourteam ||
    location.pathname === routes.testimonial ||
    location.pathname === routes.termsconditions ||
    location.pathname === routes.privacypolicy ||
    location.pathname === routes.aboutus ||
    location.pathname === routes.pricing ||
    location.pathname === routes.faq ||
    location.pathname === routes.gallery ||
    location.pathname === routes.bloglist ||
    location.pathname === routes.bloggrid ||
    
    location.pathname === routes.contact
  ) {
    addButton = (
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">{props.title}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.home}>Carsbooking.pl</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">{props.subtitle}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  } 


  else if( location.pathname === routes.dashboard ||
    location.pathname === routes.messages ||
    location.pathname === routes.payment ||
    location.pathname === routes.reviews ||
    location.pathname === routes.userbookings ||
    location.pathname === routes.userBookingUpcoming ||
    location.pathname === routes.userBookingCancelled ||
    location.pathname === routes.userBookingInprogress ||
    location.pathname === routes.userBookingComplete ||
    location.pathname === routes.wallet ||
    location.pathname === routes.integration){
    addButton = (
      <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">{props.title}</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={routes.home}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                 {props.subtitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  
  
  else {
    addButton = (
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">{props.maintitle}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div>
        <div className="col-auto float-end ms-auto"></div>
      </div>
    );
  }
  return (
    <>
      {addButton}
    </>
  );
};

export default Breadcrumbs;
