import React from 'react';
import { Grid } from 'semantic-ui-react';
import BreadCrumb from '../common/BreadCrumb';

const CategoryBreadCrumb = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <BreadCrumb
            sections={[
              { key: 'Home', content: 'Home', link: true },
              { key: 'Store', content: 'All categories', link: true },
              { key: 'Shirt', content: 'T-Shirt', active: true },
            ]}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CategoryBreadCrumb;
