import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import SignupForm from '../../components/Signup';
import * as actions from '../../redux/actions/signup';
import { accountValidator } from '../../utils/validations/auth';
import { NEXT_LINK_KEY } from '../../constants';
import Store from '../../utils/session';

export class Signup extends Component {
  static propTypes = {
    login: PropTypes.shape({}),
    signupUser: PropTypes.func,
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    login: {},
    signupUser: () => {},
    history: { push: () => {} },
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;
    delete errors[name];
    this.setState({
      [name]: value,
      errors,
    });
  };

  goTo = (path) => {
    const {
      history: { push },
    } = this.props;
    push(path);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const errors = accountValidator({ ...this.state });
    const { email } = this.state;
    const isValid = Object.keys(errors).length === 0;
    if (!isValid) {
      this.setState({ errors });
      return false;
    }

    const store = new Store(NEXT_LINK_KEY);
    const path = store.getLocalStorage().path || '/';
    store.setLocalStorage({ path: '/' });

    const { signupUser } = this.props;
    const payload = {
      data: { ...this.state, name: email },
      callback: () => this.goTo(path),
    };
    return signupUser(payload);
  };

  render() {
    const { email, password, confirmPassword, errors } = this.state;
    const loginInputs = [
      {
        name: 'email',
        value: email,
        id: 'email',
        type: 'email',
        placeholder: 'Email',
        onChange: this.onChange,
        required: 'required',
      },
      {
        name: 'password',
        value: password,
        id: 'password',
        type: 'password',
        placeholder: 'Password',
        onChange: this.onChange,
        required: 'required',
      },
      {
        name: 'confirmPassword',
        value: confirmPassword,
        id: 'confirmPassword',
        type: 'password',
        placeholder: 'Re-type Password',
        onChange: this.onChange,
        required: 'required',
      },
    ];
    return (
      <SignupForm
        loginInputs={loginInputs}
        onSubmit={this.onSubmit}
        {...this.props}
        errors={errors}
      />
    );
  }
}

export const mapStateToProps = (state) => ({
  signup: state.signup,
  loading: state.signup.loading,
});

export const matchDispatchToProps = {
  signupUser: actions.signup,
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Signup);
