import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { Product } from '../../../containers/Product/SingleProduct';
import { initialState } from '../../../redux/reducers/product/list';

describe('<SingleProduct />', () => {
  let wrapper;
  let props;
  initialState.data.rows = [{ name: 'new product', product_id: 1 }];
  beforeEach(() => {
    props = {
      fetchProduct: jest.fn(),
      fetchProductAttributes: jest.fn(),
      products: initialState,
      product: { name: 'new product', product_id: 1 },
      loading: initialState.loading,
      match: { params: { inCategory: 1 } },
      retrieveCategory: jest.fn(),
    };
    wrapper = mount(<Product {...props} />, new ReactRouterEnzymeContext());
  });
  it('should render SingleProduct component without crashing', () => {
    expect(wrapper.find('Product').length).toEqual(1);
    wrapper.instance().setAttribute({ name: 'color', value: 'red' });
    wrapper.instance().handleCartSubmit();
    wrapper.instance().componentDidMount();
    wrapper.instance().goTo('/');
  });
});
