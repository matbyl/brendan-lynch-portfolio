import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Header from '../components/Header.js';
import Gallery from '../components/Gallery.js';
import Testimonials from '../components/Testimonials.js';

const IndexPage = (data) => {
  console.log('!!!!!!!!!!!!!1', data);
    
    let testimonialsComponent = '';

    if (testimonialsData) {
      const { edges: testimonialNodes } = testimonialsData

      const testmonials = testimonialNodes.map(n => {
        const node = n.node;
        return { id: node.id, author: node.frontmatter.author, testmonial: node.frontmatter.quote };
      })

      testimonialsComponent = <Testimonials testimonials={testmonials} />
    }
    
    let galleryComponent = '';

    if (photographsData) {
      const { edges: photographNodes } = photographsData

      const photographs = photographNodes.map(n => {
        const node = n.node;
        return {id: node.id, title: node.frontmatter.title, description: node.frontmatter.description, image: node.frontmatter.photograph};
      });  

      galleryComponent = <Gallery photographs={photographs} />
    }
    

    return (
      <div>
      <Header />
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-centered  has-text-weight-bold is-size-2">About</h1>
          </div>
        </div>
      </section>
      {galleryComponent}
      {testimonialsComponent}
      </div>
    )
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    photographsData: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/photograph/"} },
      sort: {fields: [frontmatter___date], order: DESC},
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
      filter: { fileAbsolutePath: {regex : "\/testimonials/"} },
      sort: {fields: [frontmatter___date], order: DESC},
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
`
