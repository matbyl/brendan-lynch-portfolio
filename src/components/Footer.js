import React from "react";

const Footer = ({ address, email, phone, instagram }) => (
  <div className="footer has-background-black">
    <div className="content has-text-centered">
      <div className="social has-text-centered">
        <a href={instagram}>
          <i className="fab fa-instagram" />
        </a>
      </div>
      <p className="is-size-7">Crafted with ♥</p>
      <p className="is-size-7">
        Copyright © 2019 Brendan Lynch, All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
