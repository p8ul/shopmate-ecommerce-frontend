import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Rating, Button, Header, Icon } from 'semantic-ui-react';
import CategoryBreadCrumb from './CategoryBreadCrumb';
import Quantity from '../Cart/Quantity';
import ProductAttributes from './ProductAttributes';

const ProductDetails = (props) => {
  const { product, attributes, handleCartSubmit, cartLoading } = props;
  return (
    <div className="single_product__details">
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <CategoryBreadCrumb />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">{product.data.description}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h6" className="price">
              £ {product.data.price}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {attributes.attributeTypes.map((name) => {
        return (
          <ProductAttributes
            {...props}
            key={name}
            name={name}
            attributes={attributes}
          />
        );
      })}

      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <div className="single_product__details__attribute__title hidden">
              <Quantity />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Button
              className="bg-red-pink add-cart rounded"
              onClick={() => handleCartSubmit()}
              loading={cartLoading}
            >
              Add to cart
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button className="bg-transparent whitelist rounded">
              <Icon name="heart outline" /> Add to White List
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({}),
  attributes: PropTypes.shape({}),
  cartLoading: PropTypes.bool,
  handleCartSubmit: PropTypes.func,
};

ProductDetails.defaultProps = {
  product: { data: { description: '' } },
  attributes: { data: [], attributeTypes: [] },
  cartLoading: false,
  handleCartSubmit: () => {},
};
export default ProductDetails;
