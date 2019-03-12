import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Grid } from 'semantic-ui-react';

import Input from '../common/Input';

const LoginForm = ({ ...props }) => {
  const { loginInputs, onSubmit, loading, errors } = props;

  return (
    <div className="ui raised very padded center aligned text container segment container-main  animated fadeIn">
      <h1 className="ui header">Sign Up</h1>
      <br />
      <form
        className={
          loading
            ? 'theme ui form loading'
            : 'theme ui form animated fadeIn delay-2s"'
        }
        id="login-form"
        onSubmit={onSubmit}
      >
        {loginInputs.map((input) => (
          <React.Fragment key={input.name}>
            <Input {...input} />
            {errors && errors[input.name] && (
              <span className="fg-red-pink">{errors[input.name]}</span>
            )}
            <br />
          </React.Fragment>
        ))}
        <Checkbox className="bold fg-ligt-grey" label="Remember me" checked />
        <br />
        <br />
        <button
          type="submit"
          className="ui large bg-red-pink rounded block button submit"
        >
          Sign Up
        </button>
        <br />
      </form>
      <br />
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={12}>Alreay have an account?</Grid.Column>
          <Grid.Column width={4}>
            <a className="fg-red-pink" href="/login">
              Sign In
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

LoginForm.propTypes = {
  loginInputs: PropTypes.arrayOf(PropTypes.shape({})),
  errors: PropTypes.shape({}),
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

LoginForm.defaultProps = {
  loginInputs: [],
  onSubmit: () => {},
  loading: false,
  errors: {},
};
export default LoginForm;
