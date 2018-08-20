import React from 'react';

export default class Contact extends React.Component {
    render() {
        
    return (<div className={'modal ' + (this.props.open ? 'is-active' : '')}>
    <div className="modal-background" onClick={this.props.onClose}></div>
    <div className="modal-content">
      <p className="image is-4by3">
        CONTECT
      </p>
    </div>
    <button className="modal-close is-large" aria-label="close"></button>
  </div>);
    }
}