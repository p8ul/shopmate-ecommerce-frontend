import Store from '../../utils/session';

describe('Store', () => {
  let store;
  beforeEach(() => {
    store = new Store('name');
  });

  it('should set data to localstorage', () => {
    store = new Store('name');
    const data = { name: 'a name' };
    const func = jest.fn();
    store.insert(data, func);
    expect(store.getLocalStorage()).toEqual(data);
    expect(func).toBeCalled();
  });
});
