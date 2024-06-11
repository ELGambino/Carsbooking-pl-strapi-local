import React from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { all_routes } from "../router/all_routes";
import dayjs from 'dayjs';
import { gql, useQuery } from '@apollo/client';
import ImageWithBasePathApi from "../../core/data/img/ImageWithBasePathApi";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const BLOGS = gql`
query GetBlog($id: ID!){
  blog(id: $id) {
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
        Reviews {
          data {
            id
            attributes {
              Name
              Description
              Review
              createdAt
            }
          }
        }
      }
    }
  }
}
`

export default function BlogDetails() {
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
const { id } = useParams();
const route = all_routes;
const { loading, error, data } = useQuery(BLOGS, {
  variables: { id }
})


if (loading) return <p>Loading...</p>
if (error) return <p>Error :(</p>

  return (
    <>
      {/* Blog Grid*/}
      <div className="blog-section singleArticle">
        <div className="container singleArticle-container">
        <h1 className="singleTitle">{data.blog.data.attributes.Title}</h1>
          <div className="singleImage">
            <ImageWithBasePathApi
              src={data.blog.data.attributes.Image.data.attributes.url}
              alt={data.blog.data.attributes.Image.data.attributes.alternativeText}
            />
          </div>
          <div className="blog-description">
          <BlocksRenderer content={data.blog.data.attributes.Content} />
          </div>
          <div className="review-sec mb-0">
            <div className="review-header">
              <h4>
                Komentarze
              </h4>
            </div>
            {data.blog.data.attributes.Reviews.data.map(({ id, attributes }) => (
            <div key={id} className="review-card">
              <div className="review-header-group">
                <div className="review-widget-header">
                  <div className="review-design">
                    <h6>{attributes.Name}</h6>
                    <p>{dayjs(attributes.createdAt).format("DD/MM/YYYY")}</p>
                  </div>
                </div>
                <div className="reviewbox-list-rating">
                  <p key={id}>
                      {getStars(attributes.Review)}
                      <span> ({attributes.Review}.0)</span>
                  </p>
                </div>
              </div>
                <BlocksRenderer content={attributes.Description} />
            </div>
            ))}
          </div>
        </div>
      </div>
      {/* /Blog Grid*/}
    </>
  );
};
