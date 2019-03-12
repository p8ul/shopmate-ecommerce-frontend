import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as cartActions from '../../redux/actions/cart';
import Cart from '../../components/Cart/CartList';

export class CartList extends Component {
  static propTypes = {
    fetchCartProducts: PropTypes.func.isRequired,
    emptyCart: PropTypes.func,
    removeProduct: PropTypes.func,
  };

  static defaultProps = {
    emptyCart: () => {},
    removeProduct: () => {},
  };

  state = {};

  componentDidMount() {
    const { fetchCartProducts } = this.props;
    fetchCartProducts();
  }

  render() {
    return <Cart {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  loading: state.cart.loading,
});

const mapDispatchToProps = {
  fetchCartProducts: cartActions.fetchCartProducts,
  emptyCart: cartActions.emptyCart,
  removeProduct: cartActions.removeProduct,
  updateCart: cartActions.updateCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartList);
