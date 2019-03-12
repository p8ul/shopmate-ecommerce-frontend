import axios from 'axios';
import toastr from 'toastr';
import { authUserHeader } from './auth';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://backendapi.turing.com/',
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let err;
    toastr.remove();
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // clear user token on local storage
          localStorage.removeItem('userToken');
          // prevent toaster from displaying if its used by any saga
          toastr.options.toastClass = 'hide-toast';
          // redirect to login page
          window.location.assign('/login');
          break;
        case 403:
          // deal with authorization errors
          break;
        default:
          break;
      }
    } else {
      // deal with network errors
      // set a sensible message to be toasted by the consumer
      err = {
        response: {
          data: { message: 'Please check your network and try again.' },
        },
      };
    }
    return Promise.reject(err || error);
  },
);
export default { client };
