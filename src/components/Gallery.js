import React from "react";
import styled from "styled-components";

import Slider from "react-slick";

const PhotographTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
  z-index: 42;
`;

const PhotographDescription = styled.h6`
  font-style: italic;
  text-align: center;
  color: white;
  z-index: 42;
`;

const Photograph = styled.img``;

const GallerySection = styled.div`
  width: 100%;
  padding: 25px;
  background: black;
`;

const Thumbnail = styled.img`
  padding: 30px;
  cursor: pointer;
  opacity: 0.72;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

class SelectedPhotographModal extends React.Component {
  render() {
    const photograph = this.props.photograph;

    return (
      <div className={"modal " + (this.props.open ? "is-active" : "")}>
        <div className="modal-background" />
        <div className="modal-content">
          <PhotographTitle>{photograph.title}</PhotographTitle>
          <p className="image">
            <Photograph src={photograph.image} />
          </p>

          <PhotographDescription>
            {photograph.description}
          </PhotographDescription>
        </div>
        <button
          onClick={this.props.onClose}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    );
  }
}

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.openPhotograph = this.openPhotograph.bind(this);
    this.closePhotograph = this.closePhotograph.bind(this);

    if (this.props.photographs && this.props.photographs.length > 0) {
      this.state = {
        selected: this.props.photographs[0],
        modalOpen: false
      };
    }
  }

  openPhotograph(photograph) {
    this.setState({ selected: photograph, modalOpen: true });
  }

  closePhotograph() {
    this.setState({ modalOpen: false });
  }

  render() {
    const speed = 500;
    const settings = {
      autoplay: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      speed
    };

    const selectedPhotograph = this.state.selected;

    return (
      <GallerySection>
        <h1 className="has-text-centered  has-text-weight-bold has-text-white is-size-2">
          Gallery
        </h1>
        <SelectedPhotographModal
          photograph={selectedPhotograph}
          open={this.state.modalOpen}
          onClose={() => this.closePhotograph()}
        />

        <Slider {...settings}>
          {this.props.photographs.map((photograph, index) => (
            <Thumbnail
              key={index}
              src={photograph.image}
              onClick={() => this.openPhotograph(photograph)}
            />
          ))}
        </Slider>
      </GallerySection>
    );
  }
}
