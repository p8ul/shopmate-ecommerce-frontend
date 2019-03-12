import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as productListActions from '../../redux/actions/product/list';
import * as categoryActions from '../../redux/actions/category';
import * as singleProductActions from '../../redux/actions/product/single';
import * as attributeActions from '../../redux/actions/attribute';
import * as cartActions from '../../redux/actions/cart';
import OneProduct from '../../components/Product/SingleProduct';
import Store from '../../utils/session';
import Heading from '../../components/Heading';
import { CART_ID_KEY } from '../../constants';

export class Product extends Component {
  static propTypes = {
    products: PropTypes.shape({}).isRequired,
    fetchProduct: PropTypes.func.isRequired,
    fetchProductAttributes: PropTypes.func.isRequired,
    match: PropTypes.shape({}).isRequired,
    retrieveCategory: PropTypes.func.isRequired,
    addCart: PropTypes.func,
    history: PropTypes.shape({}),
    singleProduct: PropTypes.shape({}),
  };

  static defaultProps = {
    history: { push: () => {} },
    singleProduct: { data: {} },
    addCart: () => {},
  };

  state = { activePage: 1, cartAttributes: {} };

  componentDidMount() {
    const {
      fetchProduct,
      fetchProductAttributes,
      match: { params },
    } = this.props;
    fetchProduct({ params: { id: params.id } });
    fetchProductAttributes({ params: { inProduct: params.id } });
  }

  goTo = (path) => {
    const {
      history: { push },
    } = this.props;
    push(path);
  };

  setAttribute = (attribute) => {
    const { cartAttributes } = this.state;
    const data = { ...cartAttributes };
    data[attribute.name.toLowerCase()] = attribute.value;
    this.setState({ cartAttributes: data });
  };

  handleCartSubmit = () => {
    const { cartAttributes } = this.state;
    const { singleProduct, addCart } = this.props;
    const attributes = [];
    Object.keys(cartAttributes).map((item) => {
      return attributes.push(cartAttributes[item]);
    });
    const store = new Store(CART_ID_KEY);
    const data = {
      product_id: singleProduct.data.product_id,
      cart_id: store.getLocalStorage().id,
      attributes: attributes.toString(),
    };
    addCart(data);
  };

  render() {
    const { singleProduct } = this.props;
    return (
      <React.Fragment>
        <OneProduct
          {...this.props}
          {...this.state}
          setAttribute={this.setAttribute}
          handleCartSubmit={this.handleCartSubmit}
          product={singleProduct}
          goTo={this.goTo}
        />
        <Heading match={{ params: {} }} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productList,
  loading: state.productList.loading,
  singleProduct: state.singleProduct,
  attributes: state.attribute,
  cartLoading: state.cart.loading,
});

const mapDispatchToProps = {
  fetchProducts: productListActions.fetchProducts,
  retrieveCategory: categoryActions.retrieveCategory,
  fetchProduct: singleProductActions.fetchProduct,
  fetchProductAttributes: attributeActions.fetchProductAttributes,
  addCart: cartActions.addCart,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Product),
);
