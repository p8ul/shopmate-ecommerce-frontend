import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import Store from '../../utils/session';
import { getToken, removeToken } from '../../utils/auth';
import { TOKEN_KEY, CART_COUNT_KEY } from '../../constants';

const token = getToken();
const store = new Store(CART_COUNT_KEY);
const MenuItems = () => {
  return (
    <React.Fragment>
      {!token.accessToken && (
        <div className="item logo">
          Hi! &nbsp;
          <a className="fg-red-pink ui pointing cursor" href="/login">
            Signin
          </a>
          &nbsp; or &nbsp;
          <a className="fg-red-pink ui pointing cursor" href="/signup">
            Register
          </a>
        </div>
      )}
      {token.accessToken && (
        <div className="item logo">
          Hi! &nbsp;
          <div
            className="fg-red-pink ui pointing cursor"
            role="presentation"
            onClick={() => removeToken(TOKEN_KEY, true)}
          >
            Log out
          </div>
        </div>
      )}

      <a href="/" className="item">
        &nbsp;&nbsp;
      </a>
      <a href="/" className="item">
        Daily Deals
      </a>
      <a href="/" className="item">
        &nbsp;&nbsp;
      </a>
      <a href="/" className="item">
        Sell
      </a>
      <a href="/" className="item">
        &nbsp;&nbsp;
      </a>
      <a href="/" className="item">
        Help & Contact
      </a>
      <div className="right menu">
        <div className="item">
          <a href="/cart">
            <Icon color="black" name="shopping bag" size="large">
              <Label circular floating>
                {store.getLocalStorage().count}
              </Label>
            </Icon>
          </a>
        </div>
        <div className="item">
          <span>Your bag: £3.99</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuItems;
