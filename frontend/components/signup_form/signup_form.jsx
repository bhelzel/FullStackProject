import React from 'react';

class SignupForm extends React.Component {

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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h1 className="yum-logo">Yummaly!</h1>
          <h2>I am the liquor</h2>
          {this.renderErrors()}
          <div className="signup-form">
            <input type="text"
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
              value="Sign Up!" />
          </div>
        </form>
      </div>
      );
    }
  }

  export default SignupForm;
