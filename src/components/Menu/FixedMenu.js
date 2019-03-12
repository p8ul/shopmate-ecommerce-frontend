import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Search from '../../containers/Search';
import Store from '../../utils/session';
import { CART_COUNT_KEY } from '../../constants';

const store = new Store(CART_COUNT_KEY);
const FixedMenu = ({ fixed }) => (
  <div
    className={
      fixed
        ? 'ui large top secondary inverted menu fixed'
        : 'ui large top secondary inverted menu'
    }
  >
    <div className="ui container navbar">
      <div className="item logo">
        <a href="/">SHOPMATE</a>
      </div>
      <a href="/" className="item">
        Women
      </a>
      <a href="/" className="item">
        Men
      </a>
      <a href="/" className="item">
        Kids
      </a>
      <a href="/" className="item">
        Shoes
      </a>
      <a href="/" className="item">
        Brands
      </a>
      <div className="right menu">
        <div className="item">
          <Search />
        </div>
        <div className="item">
          <a href="/cart">
            <Icon name="shopping bag" size="large">
              <Label circular floating>
                {store.getLocalStorage().count}
              </Label>
            </Icon>
          </a>
        </div>
        <div className="item">
          {store.getLocalStorage().count > 0 && (
            <a href="/checkout" className="ui button bg-red-pink rounded block">
              Checkout
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

FixedMenu.propTypes = {
  fixed: PropTypes.bool,
};

FixedMenu.defaultProps = {
  fixed: false,
};
export default FixedMenu;
