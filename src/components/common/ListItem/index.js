import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ListItem = ({ header, items }) => (
  <Grid.Column>
    <h3 className="ui header">{header}</h3>
    <div className="ui link list">
      {items.map((item) => (
        <a href={item.path} key={item.name} className="item">
          {item.name}
        </a>
      ))}
    </div>
  </Grid.Column>
);

ListItem.propTypes = {
  header: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

ListItem.defaultProps = {
  header: '',
};

export default ListItem;
