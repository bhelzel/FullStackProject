import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.closeModal());
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
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
              value="Log In!" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
