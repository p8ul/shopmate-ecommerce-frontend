import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as productListActions from '../../redux/actions/product/list';
import * as categoryActions from '../../redux/actions/category';
import * as singleProductActions from '../../redux/actions/product/single';
import * as attributeActions from '../../redux/actions/attribute';
import * as cartActions from '../../redux/actions/cart';
import Products from '../../components/Product/ProductList';
import Store from '../../utils/session';
import { CART_ID_KEY } from '../../constants';

export class ProductList extends Component {
  static propTypes = {
    products: PropTypes.shape({}).isRequired,
    fetchProducts: PropTypes.func.isRequired,
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
      fetchProducts,
      retrieveCategory,
      match: { params },
    } = this.props;
    const { inCategory } = params;
    if (inCategory) {
      retrieveCategory({ id: inCategory });
    }
    const query = { limit: 10 };
    fetchProducts({ params, query });
  }

  goTo = (path) => {
    const {
      history: { push },
    } = this.props;
    push(path);
  };

  handlePageChange = (activePage) => {
    this.setState({ activePage });
    const {
      fetchProducts,
      match: { params },
    } = this.props;
    const query = { limit: 10, page: activePage };
    fetchProducts({ params, query });
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
    return (
      <Products
        {...this.props}
        {...this.state}
        handlePageChange={this.handlePageChange}
        setAttribute={this.setAttribute}
        handleCartSubmit={this.handleCartSubmit}
        goTo={this.goTo}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productList,
  loading: state.productList.loading,
  singleProduct: state.singleProduct,
  attributes: state.attribute,
  cartLoading: state.cart.loading,
  productIdInCart: state.cart.product_id || 0,
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
  )(ProductList),
);
