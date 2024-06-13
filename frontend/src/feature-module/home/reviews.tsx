import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "aos/dist/aos.css";
import { gql, useQuery } from '@apollo/client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const REVIEWS = gql`
query {
	reviews {
    data {
      id
      attributes {
        Name
        Description
        Review
      }
    }
  }
}
`

function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<i className="fa-regular fa-star"></i>);
      } else {
        stars.push(<i className="fas fa-star filled me-1"></i>);
      }
    }
    return stars;
}

const ReviewsHome = () => {

    const { loading, error, data } = useQuery(REVIEWS)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <>
        {/* About us Testimonials */}
        <section className="section about-testimonial testimonials-section">
        <div className="container">
        {/* Heading title*/}
        <div className="section-heading" data-aos="fade-down">
            <h2 className="title">Opinie Klientów!</h2>
            <p className="description">
            Zadowolenie klientów jest naszym najwyższym priorytetem. Przekonaj się, co nasi klienci mówią o naszej firmie!
            </p>
        </div>
        {/* /Heading title */}
        <div className="owl-carousel about-testimonials testimonial-group mb-0 owl-theme">
            <Slider {...setting}>
            {data.reviews.data.map(({ id, attributes }) => (
                <div key={id} className="testimonial-item d-flex">
                <div className="card flex-fill">
                    <div className="card-body">
                    <div className="quotes-head" />
                    <div className="review-box">
                        <div className="review-details">
                        <h6>{attributes.Name}</h6>
                        <div key={id} className="list-rating">
                            <div className="list-rating-star">
                            {getStars(attributes.Review)}
                            </div>
                            <p>
                            <span>({attributes.Review})</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <p><BlocksRenderer content={attributes.Description} /></p>
                    </div>
                </div>
                </div>
            ))}
            </Slider>
        </div>
        </div>
    </section>
    </>
    )
}

export default ReviewsHome;