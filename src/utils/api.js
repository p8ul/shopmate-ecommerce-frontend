import { client } from './client';
import { formatParams, objectToQueryParams } from './helpers';

export const api = {
  products: {
    list: (data) =>
      client.get(`/products${formatParams(data)}?${objectToQueryParams(data)}`),
    search: (data) =>
      client.get(`/products/search?${objectToQueryParams(data)}`),
    retrieve: (data) => client.get(`/products${formatParams(data)}`),
  },
  categories: {
    list: () => client.get('/categories'),
    retrieve: (id) => client.get(`/categories/${id}`),
  },
  attributes: {
    list: (data) => client.get(`/attributes${formatParams(data)}`),
  },
  cart: {
    getId: (data) => client.get(`/shoppingcart${formatParams(data)}`),
    create: (data) => client.post(`/shoppingcart/add`, data),
    list: (id) => client.get(`/shoppingcart/${id}`),
    empty: (id) => client.delete(`/shoppingcart/empty/${id}`),
    remove: (id) => client.delete(`/shoppingcart/removeProduct/${id}`),
    update: (data) => client.put(`/shoppingcart/update/${data.item_id}`, data),
  },
  customer: {
    login: (data) => client.post('/customers/login', data),
    signup: (data) => client.post('/customers', data),
    details: () => client.get('/customer'),
    address: (data) => client.put('/customers/address', data),
  },
  shipping: {
    regions: () => client.get('/shipping/regions'),
  },
  stripe: {
    charge: (data) => client.post('/stripe/charge', data),
  },
  orders: {
    create: (data) => client.post('/orders', data),
    list: (id) => client.get(`/orders/${id}`),
  },
};

export default { api };
