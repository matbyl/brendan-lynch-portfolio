import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import Slider from 'react-slick';

const PhotographTitle =  styled.h1`
  color: white;
`;

const PhotographDescription =  styled.h6`
  color: white;
`;

const Photograph = styled.img`
  height: 250px;
  margin: 35px auto;
`;

const GallerySection = styled.div`
  text-align: center;
  width: 100%;
  padding: 25px;
  background: black;
`;


const Thumbnail = styled.img`
  height: 140px;
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
    
    return (<div className={'modal ' + (this.props.open ? 'is-active' : '')}>
    <div className="modal-background" onClick={this.props.onClose}></div>
    <div className="modal-content">
      <p className="image is-4by3">
        <img src={photograph.image} alt="" />
      </p>
    </div>
    <button className="modal-close is-large" aria-label="close"></button>
  </div>);
  }

}

const SelectedPhotograph = ({photograph}) => (
  <div>
    <PhotographTitle>{photograph.title}</PhotographTitle>
    <Photograph src={photograph.image} />
    <PhotographDescription>{photograph.description}</PhotographDescription>
  </div>
)

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    if (this.props.photographs && this.props.photographs.length > 0) {
      this.state = {
        selected: this.props.photographs[0],
        modalOpen: false
      }
    }
    
  }

  select(photograph) {
    this.setState({ selected: photograph });
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const selectedPhotograph =  this.state.selected;

    return (
      <GallerySection>
      <SelectedPhotographModal photograph={selectedPhotograph} open={this.state.modalOpen} onClose={() => this.toggleModal()}/>
        
    <PhotographTitle>{selectedPhotograph.title}</PhotographTitle>
    <Photograph src={selectedPhotograph.image} onClick={() => this.toggleModal()} />
    <PhotographDescription>{selectedPhotograph.description}</PhotographDescription>
        
        <section className="section">
        <Slider {...settings}>
          {this.props.photographs.map((photograph, index) => (<div style={{outline: 'none'}}><Thumbnail key={index} src={photograph.image} onClick={() => this.select(photograph)} /></div>))}
        </Slider>
        </section>
      </GallerySection>
    )
  }

}
