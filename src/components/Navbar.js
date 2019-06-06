import React from "react";
import * as _ from "lodash";
import { Link } from "react-scroll";
// import Fade from 'react-reveal/Fade'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: true
    };
  }

  componentDidMount() {
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        // lodash debounce method.
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        let scroll = {
          y: supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
              ? document.documentElement.scrollTop
              : document.body.scrollTop
        };

        if (scroll.y > 0) {
          // 3000px (arbitrary - put whatever point you need there.)
          this.setState({ top: false });
        } else {
          this.setState({ top: true });
        }
      }, 1000)
    ); //ms
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div
        className={
          this.state.top
            ? "nav has-text-centered"
            : "nav has-text-centered nav-background"
        }
      >
        <ul className="navbar-links">
          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="gallery" spy={true} smooth={true} duration={500}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="testimonials" spy={true} smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="footer" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
