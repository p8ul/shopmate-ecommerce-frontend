import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import CartModal from '../../../components/Cart/Modal';

describe('<CartModal', () => {
  it('should render CartModal without crashing', () => {
    const wrapper = mount(
      <CartModal product={{ data: { thumbnail: 'sdf' } }} />,
      new ReactRouterEnzymeContext(),
    );
    wrapper.instance().toggleModal();
    wrapper.instance().fetchProductDetails();
  });
});
