import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import Contact from "./Contact.js";

const HeroSection = styled.section`
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleContact = this.toggleContact.bind(this);

    this.state = {
      contactOpen: false
    };
  }

  toggleContact() {
    this.setState({ contactOpen: !this.state.contactOpen });
  }
  render() {
    return (
      <HeroSection
        className="hero hero-image is-fullheight"
        heroImage={this.props.heroImage}
      >
        <div className="hero-body" />
        <div className="logo">
          <h1 className="title is-size-1-desktop is-size-2-mobile has-text-light">
            Brendan Lynch
          </h1>
          <h5 className="subtitle is-size-5-desktop is-size-6-mobile has-text-light">
            {this.props.subtitle}
          </h5>
          <div className="button" onClick={this.toggleContact}>
            CONTACT
          </div>
        </div>
        <Contact open={this.state.contactOpen} onClose={this.toggleContact} />
      </HeroSection>
    );
  }
}
