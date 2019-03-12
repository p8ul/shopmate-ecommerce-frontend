/**
 *  extract url parameters from an object
 *  params {Object} params
 */
export const objectToQueryParams = ({ query }) => {
  let url = '';
  if (typeof query === 'object') {
    if (Object.keys(query).length >= 1) {
      Object.keys(query).forEach((key) => {
        url += `${key}=${query[key]}&`;
      });
      // remove last &
      url = url.slice(0, -1);
    }
  }
  return url;
};

export const formatParams = ({ params }) => {
  let url = '';
  if (typeof params === 'object') {
    if (Object.keys(params).length >= 1) {
      Object.keys(params).forEach((key) => {
        if (key === 'id') {
          url += `/${params[key]}/`;
        } else {
          url += `/${key}/${params[key]}/`;
        }
      });
      // remove last /
      url = url.slice(0, -1);
    }
  }
  return url;
};
