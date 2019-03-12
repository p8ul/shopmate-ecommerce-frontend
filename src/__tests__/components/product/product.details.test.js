import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import ProductDetails from '../../../components/Product/ProductDetails';

describe('<ProductDetails', () => {
  it('should render ProductDetails without crashing', () => {
    mount(<ProductDetails />, new ReactRouterEnzymeContext());
  });
});
