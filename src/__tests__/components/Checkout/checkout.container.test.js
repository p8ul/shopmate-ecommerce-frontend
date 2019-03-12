import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { Provider } from 'react-redux';
import Checkout, { mapStateToProps } from '../../../containers/Checkout';
import { store } from '../../../redux/store';

describe('<Checkout />', () => {
  let wrapper;
  let props;
  const regions = [
    {
      shipping_region_id: 1,
      shipping_region: 'Please Select',
    },
    {
      shipping_region_id: 2,
      shipping_region: 'US / Canada',
    },
    {
      shipping_region_id: 3,
      shipping_region: 'Europe',
    },
    {
      shipping_region_id: 4,
      shipping_region: 'Rest of World',
    },
  ];
  beforeEach(() => {
    props = {
      fetchCartProducts: jest.fn(),
      loading: false,
      login: { user: 123 },
      order: { loading: true },
      shipping: {
        regions,
      },
      regions,
    };
    mapStateToProps(props);
    wrapper = mount(
      <Provider store={store}>
        <Checkout {...props} />
      </Provider>,
      new ReactRouterEnzymeContext(),
    );
  });
  it('should render Quantity without crashing', () => {
    expect(wrapper.find('Checkout').length).toEqual(1);
    wrapper
      .find('#city')
      .at(1)
      .simulate('change', {
        target: { name: 'city', value: 'USA' },
      });

    wrapper
      .find('FooterButtons')
      .find('.button')
      .at(0)
      .simulate('click');
    wrapper
      .find('FooterButtons')
      .find('.button')
      .at(1)
      .simulate('click');

    wrapper.find('Select').simulate('change', {
      target: { name: 'region', value: 1 },
    });

    wrapper
      .find('Checkout')
      .instance()
      .componentDidMount();
    wrapper.setState({
      firstName: 'john',
      address: 'address',
      state: 'kiambu',
      lastName: 'doe',
      city: 'Washington',
      postalCode: '00900',
      errors: {},
      activeStep: 1,
      shippingId: 1,
      country: 'USA',
      customerId: 123,
    });
    wrapper
      .find('Checkout')
      .instance()
      .submitAddress();
  });
});
