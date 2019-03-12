import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Grid } from 'semantic-ui-react';

import Input from '../common/Input';

const LoginForm = ({ ...props }) => {
  const { loginInputs, onSubmit, loading, errors } = props;

  return (
    <div className="ui raised very padded center aligned text container segment container-main animated fadeIn">
      <h1 className="ui header">Sign In</h1>
      <br />
      <form
        className={
          loading ? 'theme ui form loading' : 'theme ui form theme ui form '
        }
        id="login-form"
        onSubmit={onSubmit}
      >
        {loginInputs.map((input) => (
          <React.Fragment key={input.name}>
            <Input {...input} errors={errors[input.name]} />
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
          Sign In
        </button>
        <br />
      </form>
      <br />
      <Grid columns={2}>
        <Grid.Row className="fg-red-pink">
          <Grid.Column>Forgot password</Grid.Column>
          <Grid.Column>
            <a className="fg-red-pink" href="/signup">
              Have an account
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

LoginForm.propTypes = {
  loginInputs: PropTypes.arrayOf(PropTypes.shape({})),
  onSubmit: PropTypes.func,
  errors: PropTypes.shape({}),
  loading: PropTypes.bool,
};

LoginForm.defaultProps = {
  loginInputs: [],
  onSubmit: () => {},
  loading: false,
  errors: {},
};
export default LoginForm;
