import React, { Component } from "react";
import styled from "styled-components";
import Siema from "siema";

const Slide = props => <img {...props} alt="slide" />;

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

const SelectedPhotograph = ({ photograph }) => (
  <div>
    <PhotographTitle>{photograph.title}</PhotographTitle>
    <Photograph src={photograph.image} />
    <PhotographDescription>{photograph.description}</PhotographDescription>
  </div>
);

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
      slidesToShow: 3,
      slidesToScroll: 1,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      adaptiveHeight: true,
      // NOTE: afterChange is broken when adaptiveHeight is set to true. See:
      // https://github.com/akiran/react-slick/issues/1262. Therefoe this hacky solution.
      beforeChange: (current, next) =>
        setTimeout(
          () =>
            this.setState(prevState => ({ ...prevState, currentSlide: next })),
          speed
        ),
      speed
    };

    const selectedPhotograph = this.state.selected;
    const t = new Siema();

    return (
      <div className="siema">
        <div>Hi, I'm slide 1</div>
        <div>Hi, I'm slide 2</div>
        <div>Hi, I'm slide 3</div>
        <div>Hi, I'm slide 4</div>
      </div>
    );
  }

  /*
  
    <PhotographTitle>{selectedPhotograph.title}</PhotographTitle>
    <Photograph src={selectedPhotograph.image} onClick={() => this.toggleModal()} />
    <PhotographDescription>{selectedPhotograph.description}</PhotographDescription>
      
  */
}
