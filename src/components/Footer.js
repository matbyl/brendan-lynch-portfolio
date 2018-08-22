import React from 'react'

const Footer = ({ address, email, phone, instagram }) => (
  <div className="footer">
    <div className="columns is-centered">
      <div className="column is-one-quarter has-text-centered">
        <h1 className="has-text-centered  has-text-weight-bold is-size-4">
          Address
        </h1>
        {address}
      </div>
      <div className="column is-one-quarter has-text-centered">
        <h1 className="has-text-centered  has-text-weight-bold is-size-4">
          Contact{' '}
        </h1>
        <a href={'mailto:' + email}>{email}</a>
        <p>{phone}</p>
      </div>
    </div>
    <div className="social has-text-centered">
      <a href={instagram}>
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
)

export default Footer
