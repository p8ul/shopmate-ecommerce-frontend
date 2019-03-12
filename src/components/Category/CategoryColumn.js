import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../common/ListItem';

const CategoryColumn = ({ categories }) => {
  const items = [];
  categories.map((item) =>
    items.push({ name: item.name, path: `/category/${item.category_id}` }),
  );
  return <ListItem header="Categories" items={items} path="/category/" />;
};

CategoryColumn.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
};

CategoryColumn.defaultProps = {
  categories: [],
};
export default CategoryColumn;
