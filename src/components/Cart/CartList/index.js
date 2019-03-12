import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import CartItems from './CartItems';

export const Cart = (props) => (
  <Container className="content">
    <Grid columns={1} stackable className="cart">
      <Grid.Row>
        <Grid.Column width="16" className="">
          <CartItems {...props} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Cart;
