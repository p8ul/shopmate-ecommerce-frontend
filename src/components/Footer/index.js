import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import ListItem from '../common/ListItem';

const Footer = () => (
  <div className="ui  vertical footer segment animated fadeIn">
    <Container className="navbar">
      <Grid columns={4} stackable equal="true">
        <Grid.Row className="content">
          <ListItem
            header="Questions"
            items={[
              { name: 'Help', path: '#' },
              { name: 'Track Order', path: '#' },
              { name: 'Returns', path: '#' },
            ]}
          />
          <ListItem
            header="What's in store"
            items={[
              { name: 'Women', path: '#' },
              { name: 'Men', path: '#' },
              { name: 'Product A-Z', path: '#' },
              { name: 'Buy Gift Vouchers', path: '#' },
            ]}
          />
          <ListItem
            header="Follow us"
            items={[
              { name: 'Facebook', path: '#' },
              { name: 'Twitter', path: '#' },
              { name: 'Youtube', path: '#' },
            ]}
          />

          <Grid.Column>
            <div className="ui link list">
              <a href="#copyright" className="item">
                &copy; 2016 shopmate Ltd
              </a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default Footer;
