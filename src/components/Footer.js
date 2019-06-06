import React from "react";

const Footer = ({ address, email, phone, instagram }) => (
  <div className="footer has-background-black">
    <div className="content has-text-centered">
      <h1 className="has-text-weight-bold is-size-4 has-text-light">
        Contact{" "}
      </h1>
      <a href={"mailto:" + email}>{email}</a>
      <p>{phone}</p>

      <div className="social has-text-centered">
        <a href={instagram}>
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
