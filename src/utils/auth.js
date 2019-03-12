import jwtDecode from 'jwt-decode';
import { TOKEN_KEY } from '../constants/login';
import Store from './session';

const store = new Store(TOKEN_KEY);
/**
 * Store jwt token in localStorage
 * @param {!string} token jwt token from server
 * @param {!string} key token object key
 */
export const setToken = (token, key = TOKEN_KEY) => {
  localStorage.setItem(key, JSON.stringify(token));
};

/**
 *
 * @param {!String} token access token
 */
export const hasExpired = (token) => {
  const decoded = jwtDecode(token.substr(token.indexOf(' ') + 1));
  const currentTime = new Date().getTime() / 1000;
  const expired = currentTime > decoded.exp;
  return expired;
};

/**
 * Remove a token from the localstorage
 * @param {!string} key token object key
 * @param {!bool} redirect user after a token is removed
 */
export const removeToken = (key = TOKEN_KEY, redirect = false) => {
  localStorage.removeItem(key);
  if (redirect) window.location.href = '/';
};

/**
 * Get token from localstorage
 * @param {!string} key token object key
 */
export const getToken = (key = TOKEN_KEY) => {
  try {
    const userDetials = JSON.parse(localStorage.getItem(key)) || {};
    const expired = hasExpired(userDetials.accessToken);
    if (expired) {
      removeToken();
      return {};
    }
    return userDetials || {};
  } catch (error) {
    return {};
  }
};

/** check if user is logged in */
export const isLoggedIn = () => {
  try {
    const user = getToken();
    return !!user.accessToken;
  } catch (error) {
    return error === false;
  }
};

export const authUserHeader = () => {
  if (isLoggedIn()) {
    return {
      'user-key': store.getLocalStorage().accessToken || {},
    };
  }
  return {};
};
export default setToken;
