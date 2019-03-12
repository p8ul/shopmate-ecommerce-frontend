import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import CheckoutForm from '../../components/Checkout';
import * as regionActions from '../../redux/actions/shipping';
import * as customerActions from '../../redux/actions/customer';
import * as orderActions from '../../redux/actions/order';
import customerFormConstraints from '../../utils/validations/customer';
import Store from '../../utils/session';
import { isLoggedIn } from '../../utils/auth';
import {
  CUSTOMER_DETAILS_KEY,
  NEXT_LINK_KEY,
  CART_ID_KEY,
} from '../../constants';

export class Checkout extends Component {
  static propTypes = {
    fetchRegions: PropTypes.func,
    createAddress: PropTypes.func,
    createOrder: PropTypes.func,
    charge: PropTypes.func,
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    fetchRegions: () => {},
    createAddress: () => {},
    createOrder: () => {},
    charge: () => {},
    history: { push: () => {} },
  };

  state = {
    firstName: '',
    address: '',
    state: '',
    lastName: '',
    city: '',
    postalCode: '',
    errors: {},
    activeStep: 1,
    shippingId: 1,
    country: 'USA',
    customerId: 0,
  };

  componentDidMount() {
    const {
      fetchRegions,
      history: { push },
    } = this.props;
    fetchRegions();
    this.getUserDetails();
    const store = new Store(NEXT_LINK_KEY);
    if (!isLoggedIn()) {
      store.setLocalStorage({ path: '/checkout' });
      push('/login');
    }
  }

  getUserDetails = () => {
    const store = new Store(CUSTOMER_DETAILS_KEY);

    const customer = store.getLocalStorage();
    const customerName = customer.address_2
      ? customer.address_2.split(' ')
      : ['', ''];

    this.setState({
      firstName: customerName[0] || '',
      address: customer.address_1 || '',
      state: customer.address_1 || '',
      lastName: customerName[1] || '',
      city: customer.city || '',
      postalCode: customer.postal_code || '',
      errors: {},
      activeStep: 1,
      shippingId: customer.shipping_region_id || 1,
      country: customer.country || 'USA',
      customerId: customer.customer_id,
    });
  };

  navigateStep = (add, number = null) => {
    const { activeStep } = this.state;
    if (number) {
      return this.setState({ activeStep: number });
    }

    if (activeStep === 1) {
      const valid = this.submitAddress();
      if (!valid) return false;
    }

    if (activeStep === 2) {
      this.submitOrder();
    }
    const current = activeStep;
    let step = add ? current + 1 : current - 1;
    step = step < 0 ? 2 : step;
    step = step === 4 ? 3 : step;
    return this.setState({ activeStep: step });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    const { errors } = this.state;
    delete errors[name];
    this.setState({
      [name]: value,
      errors,
    });
  };

  handleSelectChange = (event, { value, name }) => {
    this.setState({ [name]: value });
  };

  submitOrder = () => {
    const { createOrder } = this.props;
    const { shippingId, customerId } = this.state;
    const store = new Store(CART_ID_KEY);
    const data = {
      cart_id: store.getLocalStorage().id,
      shipping_id: shippingId,
      customer_id: customerId,
      tax_id: 1,
    };
    createOrder(data);
  };

  submitAddress = () => {
    const errors = validate(this.state, customerFormConstraints);
    const { createAddress } = this.props;
    if (errors) {
      this.setState({
        errors,
      });
      return false;
    }
    const data = { ...this.state };
    data.postal_code = data.postalCode;
    data.region = data.shippingId;
    data.shipping_region_id = data.shippingId;
    data.address_1 = data.address;
    data.address_2 = `${data.firstName} ${data.lastName}`;
    createAddress(data);
    return true;
  };

  render() {
    const {
      state,
      address,
      firstName,
      lastName,
      city,
      postalCode,
      activeStep,
      shippingId,
      errors,
    } = this.state;
    const customerFields = [
      {
        name: 'firstName',
        value: firstName,
        id: 'firstname',
        type: 'text',
        label: 'First Name *',
        onChange: this.onChange,
        required: 'required',
      },
      {
        name: 'address',
        value: address,
        id: 'address',
        type: 'text',
        label: 'Address *',
        onChange: this.onChange,
        required: 'required',
      },
      {
        name: 'state',
        value: state,
        id: 'state',
        type: 'text',
        label: 'State *',
        onChange: this.onChange,
        required: 'required',
      },
    ];

    const customerFields2 = [
      {
        name: 'lastName',
        value: lastName,
        id: 'lastname',
        type: 'text',
        label: 'Last Name *',
        onChange: this.onChange,
        required: 'required',
      },
      {
        name: 'city',
        value: city,
        id: 'city',
        type: 'text',
        label: 'City *',
        onChange: this.onChange,
        required: 'required',
      },
      {
        name: 'postalCode',
        value: postalCode,
        id: 'postalCode',
        type: 'text',
        label: 'Postal code *',
        onChange: this.onChange,
        required: 'required',
      },
    ];
    return (
      <CheckoutForm
        customerFields={customerFields}
        customerFields2={customerFields2}
        navigateStep={this.navigateStep}
        handleSelectChange={this.handleSelectChange}
        activeStep={activeStep}
        shippingId={shippingId}
        errors={errors}
        {...this.props}
      />
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.login.user || {},
  loading: state.order.loading,
  regions: state.shipping.regions.map((x, index) => ({
    text: x.shipping_region,
    value: x.shipping_region_id,
    key: index,
  })),
});

const mapDispatchToProps = {
  fetchRegions: regionActions.fetchRegion,
  createAddress: customerActions.createAddress,
  createOrder: orderActions.createOrder,
  charge: orderActions.charge,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
