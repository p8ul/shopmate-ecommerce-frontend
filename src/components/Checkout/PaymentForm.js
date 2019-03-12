import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import PropTypes from 'prop-types';
import { ORDER_KEY, CART_ID_KEY } from '../../constants';
import Store from '../../utils/session';

class Payment extends React.Component {
  static propTypes = {
    stripe: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({}),
    shippingId: PropTypes.number,
    charge: PropTypes.func,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    user: {},
    shippingId: 1,
    charge: () => {},
    loading: false,
  };

  state = { complete: false, products: [], orderId: 0 };

  componentDidMount() {
    const store = new Store(ORDER_KEY);
    const storedData = store.getLocalStorage();
    const products = storedData.products || [];

    this.setState({ products, orderId: storedData.orderId });
  }

  getAmount = () => {
    const { products } = this.state;
    let total = 0;
    for (let index = 0; index < products.length; index += 1) {
      total += parseInt(products[index].subtotal, 10);
    }
    return total || 0;
  };

  submit = async () => {
    // User clicked submit
    const { stripe, user, shippingId, charge } = this.props;
    const { orderId } = this.state;
    const { token } = await stripe.createToken({ name: 'shopmate' });
    const store = new Store(CART_ID_KEY);
    charge({
      stripeToken: token.id,
      customer_id: user.customer_id,
      shipping_id: shippingId,
      cart_id: store.getLocalStorage().id,
      order_id: orderId,
      tax_id: 1,
      amount: this.getAmount(),
      description: '',
      currency: 'USD',
    });
  };

  render() {
    const { complete } = this.state;
    const { loading } = this.props;
    if (complete) return <h4>Purchase Complete</h4>;
    return (
      <div className={loading ? 'ui checkout form  loading' : 'checkout'}>
        <p>We don&apos;t share your financial details with the merchant</p>
        <CardElement className="example1" classes={{ base: 'example1' }} />
        <button
          className={
            loading
              ? 'ui button rounded bg-red-pink cardish loading'
              : 'ui button rounded bg-red-pink cardish'
          }
          type="button"
          onClick={this.submit}
        >
          PAY
        </button>
      </div>
    );
  }
}

export default injectStripe(Payment);
