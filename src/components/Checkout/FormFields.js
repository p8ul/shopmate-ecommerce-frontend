import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import Input from '../common/Input';

const FormFields = ({ inputs, errors }) => {
  return (
    <div>
      {inputs.map((input) => (
        <React.Fragment key={input.name}>
          <Input {...input} />
          {errors && errors[input.name] && (
            <Label htmlFor={errors[input.name]} basic color="red" pointing>
              {errors[input.name]}
            </Label>
          )}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

FormFields.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({})),
};

FormFields.defaultProps = {
  inputs: [],
};
export default FormFields;
