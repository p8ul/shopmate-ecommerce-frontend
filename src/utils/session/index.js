export default class Store {
  /**
   * @param {!string} name Database name
   * @param {function()} [callback] Called when the Store is ready
   */
  constructor(name, callback) {
    /**
     * @type {Storage}
     */
    /**
     * @type {ItemList}
     */
    let items;
    const { localStorage } = window;

    /**
     * Read the local Item from localStorage.
     *
     * @returns {Item} Current array/object of local item
     */
    this.getLocalStorage = () => {
      try {
        return items || JSON.parse(localStorage.getItem(name) || '{}');
      } catch (error) {
        return {};
      }
    };

    /**
     * Write the local data to localStorage.
     *
     * @param {Item} data Array of item to write
     */
    this.setLocalStorage = (data) => {
      try {
        return localStorage.setItem(name, JSON.stringify(data || {}));
      } catch (error) {
        return {};
      }
    };

    if (callback) {
      callback();
    }
  }

  /**
   * Insert an item into the Store.
   *
   * @param {Item} item Item to insert
   * @param {function()} [callback] Called when item is inserted
   */
  insert(item, callback) {
    this.setLocalStorage(item);

    if (callback) {
      callback();
    }
  }
}
