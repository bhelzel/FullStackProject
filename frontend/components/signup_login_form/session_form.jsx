import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.stopPropagation()
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(
        () => { this.props.closeModal() },
        () => { this.resetState() }
      )
  }

  resetState() {
    this.setState({
      email: '',
      password: ''
    });
    this.props.openModal();
  }

  renderErrors() {
    return(
      <p>
        {this.props.errors.map((error, i) => (
          <span key={`error-${i}`}>
            {error}
          </span>
        ))}
      </p>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h1 className="yum-logo-link" onClick={ () => this.props.closeModal() }>Yummaly!</h1>
          <h2>cooking phrase or something</h2>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                autoFocus
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email Address"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password"
              />
            <br/>
            <input
              className="signup-submit"
              type="submit"
              value={
                this.props.formType === 'signup' ?
                  "Sign Up" :
                  "Log In"
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
