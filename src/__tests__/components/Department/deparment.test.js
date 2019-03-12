import React from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { shallow } from 'enzyme';
import { DepartmentPage } from '../../../containers/Department/DepartmentPage';

describe('<HomePage />', () => {
  it('should render Department page without crashing', () => {
    shallow(<DepartmentPage />, new ReactRouterEnzymeContext());
  });
});
