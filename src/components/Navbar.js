import React from "react";
import * as _ from "lodash";
import { Link } from "react-scroll";

const NavbarBurger = ({ toggleMenu, active }) => (
  <a
    role="button"
    className={`navbar-burger ${active ? "is-active" : ""}`}
    aria-label="menu"
    aria-expanded="false"
    onClick={toggleMenu}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

const NavbarItem = ({ link, text }) => (
  <Link
    className="navbar-item"
    to={link}
    spy={true}
    smooth={true}
    duration={500}
  >
    {text}
  </Link>
);

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {
    return (
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavbarBurger
            toggleMenu={this.toggleMenu}
            active={this.state.activeMenu}
          />
        </div>

        <div
          className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <NavbarItem link="about" text="About" />
            <NavbarItem link="gallery" text="Gallery" />
            <NavbarItem link="testimonials" text="Testimonials" />
            <NavbarItem link="footer" text="Contact" />
          </div>
        </div>
      </nav>
    );
  }
}
