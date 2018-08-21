import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import styled from 'styled-components'
import Slider from 'react-slick'

const Quote = styled.blockquote`
  font-size: 24px;
  color: white;
  font-style: italic;
  display: block;
  padding: 15px 20px 0 45px;
  margin: 0 0 5px;
  position: relative;

  &:before {
    content: '\\201C';

    /*Font*/
    font-family: Georgia, serif;
    font-size: 40px;
    font-weight: bold;
    color: #999;

    /*Positioning*/
    position: absolute;
    left: 2px;
    top: 5px;
  }
`

const Cite = styled.cite`
  color: #4bb543;
  font-weight: bold;
  font-size: 16px;
  margin-left: 35px;
  &:before {
    content: '- ';
  }
`

const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
}

const Testimonials = ({ testimonials }) => (
  <div className="testimonials">
    <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div className="testimonial">
          <Quote>{testimonial.quote}</Quote>
          <Cite>{testimonial.author}</Cite>
        </div>
      ))}
    </Slider>
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
