import React from 'react';
import { shallow } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import TemplateDefault from '../../../components/Templates/TemplateDefault';

describe('<TemplateDefault />', () => {
  it('should render TemplateDefault without crashing', () => {
    shallow(
      <TemplateDefault>
        <div>Hello World</div>
      </TemplateDefault>,
      new ReactRouterEnzymeContext(),
    );
  });
});
