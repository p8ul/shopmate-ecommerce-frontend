import { getToken, setToken, removeToken, isLoggedIn } from '../../utils/auth';

it('should get null token', () => {
  expect(getToken()).toEqual({});
});

it('should get null token', () => {
  setToken({ hello: 'hi' });
  expect(getToken()).toEqual({});
  setToken({ user: 'sdfsdf' });
  expect(isLoggedIn()).toBe(false);
});

it('should remove token from localstorage', () => {
  removeToken();
  expect(getToken()).toEqual({});
});
