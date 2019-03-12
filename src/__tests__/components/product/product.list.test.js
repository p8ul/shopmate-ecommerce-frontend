import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { ProductList } from '../../../containers/Product/ProductList';
import { initialState } from '../../../redux/reducers/product/list';

describe('<ProductList />', () => {
  let wrapper;
  let props;
  initialState.data.rows = [{ name: 'new product', product_id: 1 }];
  beforeEach(() => {
    props = {
      fetchProducts: jest.fn(),
      products: initialState,
      loading: initialState.loading,
      match: { params: { inCategory: 1 } },
      retrieveCategory: jest.fn(),
    };
    wrapper = mount(<ProductList {...props} />, new ReactRouterEnzymeContext());
  });
  it('should render ProductList without crashing', () => {
    expect(wrapper.find('ProductList').length).toEqual(2);
    wrapper.instance().setAttribute({ name: 'color', value: 'red' });
    wrapper.instance().handleCartSubmit();
    wrapper.instance().handlePageChange();
    wrapper.instance().componentDidMount();
    wrapper.instance().goTo('/');
  });
});
