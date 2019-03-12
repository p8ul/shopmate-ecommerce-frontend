import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../constants';
import * as actions from '../../redux/actions/signup';
import reducer, { initialState } from '../../redux/reducers/signup';

const loginActions = [
  {
    type: SIGNUP,
    action: actions.signup,
    expected: true,
  },
  {
    type: SIGNUP_SUCCESS,
    action: actions.signupSuccess,
    expected: false,
  },
  {
    type: SIGNUP_FAILURE,
    action: actions.signupFailure,
    expected: false,
  },
];

describe('signup actions', () => {
  loginActions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('signup Reducer', () => {
  loginActions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(reducer(initialState, action).loading).toEqual(action.expected);
    }),
  );
  it('should provide an initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
