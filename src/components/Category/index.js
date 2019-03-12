import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import CategoryColumn from './CategoryColumn';
import Department from '../Department';

export const Category = (props) => (
  <Container className="content">
    <Grid columns={2} stackable className="category">
      <Grid.Row>
        <Grid.Column width="4" className="category__column">
          <CategoryColumn {...props} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Department {...props} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Category;
