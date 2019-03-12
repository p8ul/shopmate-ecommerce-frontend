import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ ...props }) => {
  const { onChange, className, label, errors, ...rest } = props;
  return (
    <div className="field">
      {/* eslint-disable-next-line */}
      <label>{label}</label>
      <div className="ui left input fluid">
        <input {...rest} className={className} onChange={onChange} required />
      </div>
      {errors && <div className="ui pointing red basic label">{errors}</div>}
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  errors: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  className: '',
  errors: '',
  label: '',
};

export default Input;
