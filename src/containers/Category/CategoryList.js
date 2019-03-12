import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryList from '../../components/Category';
import * as categoryActions from '../../redux/actions/category';

export class Category extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    history: { push: () => {} },
  };

  state = {};

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  goTo = (path) => {
    const {
      history: { push },
    } = this.props;
    push(path);
  };

  render() {
    return <CategoryList {...this.props} goTo={this.goTo} />;
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.data.rows,
});

const mapDispatchToProps = {
  fetchCategories: categoryActions.fetchCategories,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Category),
);
