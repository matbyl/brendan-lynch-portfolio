import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      subject: "",
      message: "",
      formErrors: { message: "", subject: "" },
      subjectValid: false,
      messageValid: false,
      formValid: false
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case "subject":
        subjectValid = value.length >= 6;
        fieldValidationErrors.subject = subjectValid
          ? ""
          : "This subject is too short. Need to be at least 6 characters";
        break;
      case "message":
        messageValid = value.length >= 20;
        fieldValidationErrors.message = messageValid
          ? ""
          : "This message is too short. Need to be at least 20 characters";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        messageValid,
        subjectValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.subjectValid && this.state.messageValid
    });
  }

  render() {
    return (
      <div className={"modal " + (this.props.open ? "is-active" : "")}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">
            <h1 className="has-text-centered  has-text-weight-bold is-size-2">
              Contact
            </h1>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={event => this.handleUserInput(event)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-folder" />
                </span>
                <span className="icon is-small is-right">
                  {this.state.subjectValid ? (
                    ""
                  ) : (
                    <i className="fas fa-exclamation-triangle" />
                  )}
                </span>
              </div>
              {this.state.subjectValid ? (
                ""
              ) : (
                <p className="help is-danger">
                  {this.state.formErrors.subject}
                </p>
              )}
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={this.state.message}
                  name="message"
                  placeholder="Your message"
                  onChange={event => this.handleUserInput(event)}
                />
                {this.state.messageValid ? (
                  ""
                ) : (
                  <p className="help is-danger">
                    {this.state.formErrors.message}
                  </p>
                )}
              </div>
            </div>
            {this.state.formValid ? (
              <a
                className="button is-success"
                href={
                  "mailto:materbyl@gmail.com?subject=" +
                  this.state.subject +
                  "&body=" +
                  this.state.message
                }
              >
                Send
              </a>
            ) : (
              <div className="button is-success" disabled>
                Send
              </div>
            )}
          </div>
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
