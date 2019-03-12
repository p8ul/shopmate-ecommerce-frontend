import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants';
import * as actions from '../../redux/actions/login';
import reducer, { initialState } from '../../redux/reducers/login';

const loginActions = [
  {
    type: LOGIN,
    action: actions.login,
    expected: true,
  },
  {
    type: LOGIN_FAILURE,
    action: actions.loginFailure,
    expected: false,
  },
  {
    type: LOGIN_SUCCESS,
    action: actions.loginSuccess,
    expected: false,
  },
];

describe('login actions', () => {
  loginActions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('login Reducer', () => {
  loginActions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(reducer(initialState, action).loading).toEqual(action.expected);
    }),
  );
  it('should provide an initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
