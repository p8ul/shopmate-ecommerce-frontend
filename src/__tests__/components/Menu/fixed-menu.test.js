import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { Provider } from 'react-redux';
import Menu from '../../../components/Menu';
import { store } from '../../../redux/store';

describe('<Menu />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {};
    wrapper = mount(
      <Provider store={store}>
        <Menu {...props} />
      </Provider>,
      new ReactRouterEnzymeContext(),
    );
  });
  it('should toggle sidebar', () => {
    wrapper.find('.bars').simulate('click');
    expect(wrapper.find('.visible').length).toEqual(1);
    wrapper.find('.back').simulate('click');
  });
  it('should fix and unfix fixed menu', () => {
    // shallow(<FixedMenu store={store} />, new ReactRouterEnzymeContext());
    wrapper
      .find('Menu')
      .instance()
      .onOnScreen();
    wrapper
      .find('Menu')
      .instance()
      .offScreen();
  });
});
