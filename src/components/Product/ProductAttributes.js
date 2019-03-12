import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import AttributesBoxes from '../Cart/Attributes';

const ProductDetails = (props) => {
  const { attributes, name } = props;
  return (
    <div className="single_product__details">
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <div className="single_product__details__attribute__title">
              {name}
            </div>
            <AttributesBoxes
              {...props}
              attributes={attributes.data}
              name={name}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({}),
  name: PropTypes.string,
  attributes: PropTypes.shape({}),
};

ProductDetails.defaultProps = {
  product: {},
  name: '',
  attributes: { data: [], attributeTypes: [] },
};

export default ProductDetails;
