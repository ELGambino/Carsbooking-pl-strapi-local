import React from "react";
import { useState } from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { all_routes } from "../router/all_routes";
import { gql, useQuery } from '@apollo/client';
import ImageWithBasePathApi from "../../core/data/img/ImageWithBasePathApi";
import dayjs from 'dayjs';
require('dayjs/locale/pl');

const BLOGS = gql`
query {
  blogs {
    data {
      id
      attributes {
        createdAt
        Image {
          data {
            id
            attributes {
              url
              formats
            }
          }
        }
        Title
        Description
        Category
        Content
        authorImage {
          data {
            id
            attributes {
              url
              formats
            }
          }
        }
        authorName
        authorDescription
      }
    }
  }
}
`

const FEATURED = gql`
query {
  blogs(filters: { Featured: {eq: true}}) {
    data {
      id
      attributes {
        createdAt
        Image {
          data {
            id
            attributes {
              url
              formats
            }
          }
        }
        Title
        Featured
      }
    }
  }
}
`

const route = all_routes;
const BlogList = () => {

  const { loading, error, data } = useQuery(BLOGS)
  const { loading:FeaturedLoading, error:FeaturedError, data:FeaturedData } = useQuery(FEATURED)
  if (loading || FeaturedLoading) return 'Loading...';
  if (error || FeaturedError) return `Error! ${error.message}`;
  
  return (
      <div className="main-wrapper">
        <Breadcrumbs title="Blog" subtitle="Blogs" />
        {/* Blog List*/}
        <div className="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  {/* Single Post */}
                  {data.blogs.data.map(({ id, attributes }) => (
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link to={`/blog/blog-details/${id}`}>
                          <ImageWithBasePathApi
                            className="img-fluid"
                            src={attributes.Image.data.attributes.formats.large.url}
                            alt={attributes.Image.data.attributes.alternativeText}
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author ms-3">
                                  <i className="fa-regular fa-circle-user"></i>{" "}
                                  <span>{attributes.authorName}</span>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>{dayjs(attributes.createdAt).format("DD/MM/YYYY")}</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                              <span></span>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link to={`/blog/blog-details/${id}`}>
                            {attributes.Title}
                          </Link>
                        </h3>
                        <p className="blog-description">
                          {attributes.Description}
                        </p>
                        <Link
                          to={`/blog/blog-details/${id}`}
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Czytaj dalej <i className="feather icon-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  ))}
                  {/* end Single Post */}
                </div>
                {/*Pagination
                <div className="pagination">
                  <nav>
                    <ul className="pagination mt-0">
                      <li className="previtem">
                        <Link className="page-link" to="">
                          <i className="fas fa-regular fa-arrow-left me-2" />{" "}
                          Prev
                        </Link>
                      </li>
                      <li className="justify-content-center pagination-center">
                        <div className="page-group">
                          <ul>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="active page-link" to="#">
                                2{" "}
                                <span className="visually-hidden">
                                  (current)
                                </span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                4
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                5
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nextlink">
                        <Link className="page-link" to="">
                          Next{" "}
                          <i className="fas fa-regular fa-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                */}
              </div>
              <div className="col-lg-4 theiaStickySidebar">
                <div className="stickybar">
                  <div className="rightsidebar">
                    <div className="card">
                      <h4>
                        <i className="feather icon-tag" />
                        Polecane artykuły
                      </h4>
                      {FeaturedData.blogs.data.map(({ id, attributes }) => (
                      <div className="article">
                        <div className="article-blog">
                          <Link to={`/blog/blog-details/${id}`}>
                            <ImageWithBasePathApi
                              className="img-fluid"
                              src={attributes.Image.data.attributes.formats.medium.url}
                              alt={attributes.Image.data.attributes.alternativeText}
                            />
                          </Link>
                        </div>
                        <div className="article-content">
                          <h5>
                            <Link to={`/blog/blog-details/${id}`}>
                              {attributes.Title}
                            </Link>
                          </h5>
                          <div className="article-date">
                            <i className="fa-solid fa-calendar-days" />
                            <span>{dayjs(attributes.createdAt).format("DD/MM/YYYY")}</span>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Blog Grid*/}
      </div>
  );
};

export default BlogList;
