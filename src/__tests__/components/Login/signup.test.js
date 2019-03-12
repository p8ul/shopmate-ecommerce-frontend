import React from 'react';
import { mount } from 'enzyme';
import { Signup } from '../../../containers/Signup';

const password = 'secret123';
const email = 'example@example.com';

describe('<Signup />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      login: {},
      loginUser: jest.fn(),
      history: { push: () => {} },
    };
    wrapper = mount(<Signup {...props} />);
  });
  it('renders Login component without crashing', () => {
    const node = wrapper.find('#email').at(1);
    node.simulate('change', {
      target: { name: 'email', value: email },
    });
    expect(node.instance().value).toBe(email);

    wrapper
      .find('#password')
      .at(1)
      .simulate('change', {
        target: { name: 'password', value: password },
      });

    wrapper.find('#login-form').simulate('submit', { preventDefault() {} });
  });
});
