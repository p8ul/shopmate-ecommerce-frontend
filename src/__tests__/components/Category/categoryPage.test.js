import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { shallow } from 'enzyme';
import { CategoryPage } from '../../../containers/Category/CategoryPage';

describe('<HomePage />', () => {
  it('should render category page without crashing', () => {
    shallow(<CategoryPage productCount={12} />, new ReactRouterEnzymeContext());
  });
});
