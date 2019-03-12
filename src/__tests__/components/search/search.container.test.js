import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { SearchProducts } from '../../../containers/Search';
import { initialState } from '../../../redux/reducers/product/list';

describe('<SearchProducts />', () => {
  let wrapper;
  initialState.data.rows = [{ name: 'new product', product_id: 1 }];
  beforeEach(() => {
    wrapper = mount(
      <SearchProducts searchaproduct={() => {}} />,
      new ReactRouterEnzymeContext(),
    );
  });
  it('should render SearchProducts without crashing', () => {
    expect(wrapper.find('SearchProducts').length).toEqual(1);
    wrapper.instance().handleSearchChange('ghj', { value: 'red' });
    wrapper
      .instance()
      .handleResultSelect('e', { result: 'color', value: 'red' });
    wrapper.instance().componentWillMount();
  });
});
