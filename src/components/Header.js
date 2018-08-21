import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Contact from './Contact.js'

const HeroSection = styled.section.attrs({
  style: props => ({
    backgroundImage:
      'radial-gradient(transparent, black), url(' + props.heroImage + ')',
  }),
})`
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggleContact = this.toggleContact.bind(this)

    this.state = {
      contactOpen: false,
    }
  }

  toggleContact() {
    this.setState({ contactOpen: !this.state.contactOpen })
  }
  render() {
    return (
      <HeroSection
        className="hero is-success is-fullheight"
        heroImage={this.props.heroImage}
      >
        <div className="hero-body" />
        <Fade bottom>
          <div className="logo">
            <Link to="/">Brendan Lynch</Link>
            <h5 className="subtitle is-size-5">{this.props.subtitle}</h5>
            <a className="button" onClick={this.toggleContact}>
              CONTACT
            </a>
          </div>
        </Fade>
        <Contact open={this.state.contactOpen} onClose={this.toggleContact} />
      </HeroSection>
    )
  }
}
