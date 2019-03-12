import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Products from '../Product/ProductList';
import Heading from '../../components/Heading/index';

export class CategoryPage extends Component {
  static propTypes = {
    category: PropTypes.string,
    productsCount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({})),
    ]),
  };

  static defaultProps = {
    category: '',
    productsCount: '',
  };

  state = {};

  render() {
    const { category, productsCount } = this.props;
    return (
      <React.Fragment>
        <Heading
          title={`${category} category`}
          subTitle={`${productsCount.length} results found`}
        />
        <Products />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categories.singleCategory.name,
  productsCount: state.productList.data.rows || [],
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage);
