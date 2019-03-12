import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';

const SingleProduct = (props) => {
  return (
    <Container className="content">
      <Grid columns={2} stackable className="single_product">
        <Grid.Row>
          <Grid.Column>
            <ProductImage {...props} />
          </Grid.Column>
          <Grid.Column>
            <ProductDetails {...props} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default SingleProduct;
