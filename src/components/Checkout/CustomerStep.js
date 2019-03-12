import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Form, Select } from 'semantic-ui-react';
import FormFields from './FormFields';

const CustomerStep = (props) => {
  const {
    customerFields,
    customerFields2,
    regions,
    handleSelectChange,
    shippingId,
  } = props;
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <FormFields inputs={customerFields} {...props} />
        </Grid.Column>
        <Grid.Column>
          <FormFields inputs={customerFields2} {...props} />
        </Grid.Column>
        <Grid.Column>
          <Form.Group>
            <Form.Field
              control={Select}
              label="Region"
              value={shippingId}
              options={regions}
              onChange={handleSelectChange}
              placeholder="Region"
              name="shippingId"
            />
          </Form.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

CustomerStep.propTypes = {
  customerFields: PropTypes.arrayOf(PropTypes.shape({})),
  customerFields2: PropTypes.arrayOf(PropTypes.shape({})),
  regions: PropTypes.arrayOf(PropTypes.shape({})),
  handleSelectChange: PropTypes.func,
  shippingId: PropTypes.number,
};

CustomerStep.defaultProps = {
  customerFields: [],
  customerFields2: [],
  handleSelectChange: () => {},
  regions: [],
  shippingId: 1,
};
export default CustomerStep;
