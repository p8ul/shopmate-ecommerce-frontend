import React from 'react';
import { Grid } from 'semantic-ui-react';

const Intro = () => (
  <div className="bg-home animated fadeIn">
    <Grid columns={2} equal="true">
      <Grid.Row>
        <Grid.Column>
          <h1 className="ui inverted header">Background Development</h1>
          <p>
            Convergent the dictates of the consumer: background and development
          </p>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column>
          <div className=" button">View all</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Intro;
