import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from './Card';
import Nature from '../../assets/images/nature.jpg';
import Regional from '../../assets/images/regional.jpg';
import Trend from '../../assets/images/trend.jpeg';

const Department = (props) => (
  <React.Fragment>
    <Grid stackable>
      <Grid.Row>
        <Card
          image={Trend}
          className="trend"
          title="Trend"
          path="/department/1"
          {...props}
        />
      </Grid.Row>
    </Grid>
    <Grid columns={2} stackable>
      <Grid.Row>
        <Card
          image={Nature}
          className="nature"
          title="Nature"
          path="/department/1"
          {...props}
        />
        <Card
          image={Regional}
          className="regional"
          title="Regional"
          path="/department/1"
          {...props}
        />
      </Grid.Row>
    </Grid>
  </React.Fragment>
);

export default Department;
