import React from 'react';
import { mount } from 'enzyme';
import { CartList } from '../../../containers/Cart/CartList';

describe('CartList', () => {
  it('should render CartList without crashing', () => {
    const props = {
      fetchCartProducts: jest.fn(),
    };
    mount(<CartList {...props} />);
  });
});
