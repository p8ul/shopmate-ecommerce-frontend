import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SingleProduct from '../../Product/SingleProduct';
import Store from '../../../utils/session';
import { CART_COUNT_KEY } from '../../../constants';

const trigger = (triggerText, className, fetchProductDetails) => {
  return (
    <div
      role="presentation"
      className={className}
      onClick={() => fetchProductDetails()}
    >
      {triggerText}
    </div>
  );
};

const store = new Store(CART_COUNT_KEY);
class CartModal extends React.PureComponent {
  state = { open: false, cartItemsCount: store.getLocalStorage().count };

  componentDidUpdate() {
    const { cartLoading, productIdInCart, productId } = this.props;
    const { cartItemsCount } = this.state;
    if (
      cartItemsCount !== store.getLocalStorage().count &&
      !cartLoading &&
      productId === productIdInCart
    ) {
      // eslint-disable-next-line
      this.setState({ open: false });
    }
  }

  fetchProductDetails = () => {
    const { productId, fetchProduct, fetchProductAttributes } = this.props;
    this.toggleModal();
    fetchProduct({ params: { id: productId } });
    fetchProductAttributes({ params: { inProduct: productId } });
  };

  toggleModal = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { triggerText, header, className, singleProduct } = this.props;
    const { open } = this.state;
    return (
      <Modal
        open={open}
        trigger={trigger(triggerText, className, this.fetchProductDetails)}
        className="show"
        closeIcon={
          <div
            className="btn close"
            role="presentation"
            onClick={() => this.toggleModal()}
          />
        }
      >
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <SingleProduct {...this.props} product={singleProduct} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions className="bg-dark-grey">
          <Button
            id="actionModal-no-button"
            className="bg-white fg-red-pink rounded"
            onClick={() => window.location.reload()}
          >
            Back to Shop
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

CartModal.propTypes = {
  triggerText: PropTypes.string,
  header: PropTypes.string,
  confirmDeleteGroup: PropTypes.func,
  group: PropTypes.shape({}),
  singleProduct: PropTypes.shape({}),
  className: PropTypes.string,
  productId: PropTypes.number,
  fetchProduct: PropTypes.func,
  fetchProductAttributes: PropTypes.func,
  productIdInCart: PropTypes.number,
  cartLoading: PropTypes.bool,
};

CartModal.defaultProps = {
  group: {},
  productIdInCart: 0,
  cartLoading: false,
  singleProduct: { data: [{ thumbnail: '' }] },
  confirmDeleteGroup: () => {},
  fetchProduct: () => {},
  fetchProductAttributes: () => {},
  triggerText: 'Add to cart',
  header: 'Add to cart',
  className: '',
  productId: 0,
};

export default CartModal;
