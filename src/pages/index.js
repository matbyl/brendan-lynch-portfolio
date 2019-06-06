import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";

import Header from "../components/Header.js";
import Gallery from "../components/Gallery.js";
import Testimonials from "../components/Testimonials.js";
import Footer from "../components/Footer.js";

library.add(faEnvelope);

const ParallaxSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)),
    url(/img/hero-4k.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: "black";
`;

const IndexPage = ({
  data: { homePageData, photographsData, testimonialsData }
}) => {
  const {
    subtitle,
    about,
    hero_image: heroImage,
    address,
    email,
    phone,
    instagram
  } =
    homePageData && homePageData.frontmatter ? homePageData.frontmatter : "";

  let testimonialsComponent = "";

  if (testimonialsData) {
    const { edges: testimonialNodes } = testimonialsData;

    const testmonials = testimonialNodes.map(n => {
      const node = n.node;
      return {
        id: node.id,
        author: node.frontmatter.author,
        quote: node.frontmatter.quote
      };
    });

    testimonialsComponent = <Testimonials testimonials={testmonials} />;
  }

  let galleryComponent = "";

  if (photographsData) {
    const { edges: photographNodes } = photographsData;

    const photographs = photographNodes.map(n => {
      const node = n.node;
      return {
        id: node.id,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        image: node.frontmatter.photograph
      };
    });

    galleryComponent = <Gallery photographs={photographs} />;
  }

  return (
    <Layout>
      <Header heroImage={heroImage} subtitle={subtitle} />

      <section name="about" className="section has-background-light">
        <div className="container">
          <div className="content ">
            <h1 className="has-text-centered has-text-weight-bold is-size-2">
              About
            </h1>
            <p className="has-text-centered">{about}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">{galleryComponent}</div>
      </section>

      <ParallaxSection name="testimonials" heroImage={heroImage}>
        {testimonialsComponent}
      </ParallaxSection>
      <Footer
        name="footer"
        address={address}
        email={email}
        phone={phone}
        instagram={instagram}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    homePageData: markdownRemark(fields: { slug: { eq: "/home/" } }) {
      html
      frontmatter {
        title
        subtitle
        about
        hero_image
        address
        email
        phone
        instagram
      }
    }
    photographsData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/photograph/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            photograph
          }
          excerpt
        }
      }
    }
    testimonialsData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            quote
          }
          excerpt
        }
      }
    }
  }
`;
