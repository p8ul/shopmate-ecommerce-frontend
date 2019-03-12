import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import ProductAttributes from '../../../components/Product/ProductAttributes';

describe('<ProductAttributes', () => {
  it('should render ProductAttributes without crashing', () => {
    mount(<ProductAttributes />, new ReactRouterEnzymeContext());
  });
});
