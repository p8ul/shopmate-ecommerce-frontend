/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import FooterItem from '../../../components/common/ListItem';

it('renders Footer component without crashing', () => {
  shallow(<FooterItem header="header" items={[{ name: 'name' }]} />);
});
