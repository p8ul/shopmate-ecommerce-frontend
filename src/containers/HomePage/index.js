import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/ProductList';
import Intro from '../../components/Intro';
import Heading from '../../components/Heading/index';
import CategoryList from '../Category/CategoryList';

export class HomePage extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <React.Fragment>
        <Intro />
        <Heading />
        <CategoryList />
        <Product />
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
