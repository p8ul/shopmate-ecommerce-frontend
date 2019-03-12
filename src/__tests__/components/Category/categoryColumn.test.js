import React from 'react';
import { mount } from 'enzyme';
import Category from '../../../components/Category';
import Heading from '../../../components/Heading';

describe('CategoryColumn', () => {
  it('should render Category without crashing', () => {
    mount(<Category categories={[{ name: 'name', path: '' }]} />);
  });
  it('should render Heading component without crashing', () => {
    mount(<Heading categories={[{ name: 'name', path: '' }]} />);
  });
});
