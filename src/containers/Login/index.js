import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import LoginForm from '../../components/Login';
import * as loginActions from '../../redux/actions/login';
import { accountValidator } from '../../utils/validations/auth';
import { NEXT_LINK_KEY } from '../../constants';
import Store from '../../utils/session';

export class Login extends Component {
  static propTypes = {
    login: PropTypes.shape({}),
    loginUser: PropTypes.func,
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    login: {},
    loginUser: () => {},
    history: { push: () => {} },
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const isValid = Object.keys(errors).length === 0;
    if (!isValid) {
      this.setState({ errors });
      return false;
    }

    const store = new Store(NEXT_LINK_KEY);
    const path = store.getLocalStorage().path || '/';
    store.setLocalStorage({ path: '/' });
    const callback = () => {
      this.goTo(path);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    const { loginUser } = this.props;
    const payload = {
      data: { ...this.state },
      callback: () => callback(),
    };
    return loginUser(payload);
  };

  render() {
    const { email, password, errors } = this.state;
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
    ];
    return (
      <LoginForm
        loginInputs={loginInputs}
        onSubmit={this.onSubmit}
        errors={errors}
        {...this.props}
      />
    );
  }
}

export const mapStateToProps = (state) => ({
  login: state.login,
  loading: state.login.loading,
});

export const matchDispatchToProps = {
  loginUser: loginActions.login,
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Login);
