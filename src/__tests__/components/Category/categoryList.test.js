import React from 'react';
import { mount } from 'enzyme';
import { Category } from '../../../containers/Category/CategoryList';

describe('<Category />', () => {
  it('should render category list without crashing', () => {
    const wrapper = mount(
      <Category productCount={12} fetchCategories={() => {}} />,
    );
    const goTo = jest.spyOn(wrapper.instance(), 'goTo');
    wrapper.instance().goTo();
    expect(goTo.mock.calls.length).toEqual(1);
  });
});
