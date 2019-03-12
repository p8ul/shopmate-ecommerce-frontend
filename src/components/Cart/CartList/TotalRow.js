import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { CART_ID_KEY } from '../../../constants';
import Store from '../../../utils/session';

const cartIdStore = new Store(CART_ID_KEY);

const TotalRow = ({ grandTotal, emptyCart, loading }) => {
  return (
    <div className="cart_result display-flex space-between">
      <div colSpan={1}>
        {grandTotal > 0 && (
          <Button
            className={
              loading
                ? 'rounded bg-red-pink loading'
                : 'cart_result___btn rounded bg-red-pink'
            }
            onClick={() => emptyCart(cartIdStore.getLocalStorage().id)}
          >
            Empty cart
          </Button>
        )}
      </div>
      <div colSpan={2}>Grand total</div>
      <div colSpan={1}>£ {grandTotal}</div>
      <div colSpan={1}>
        {grandTotal > 0 && (
          <a
            className="ui button rounded bg-red-pink cart_result___btn"
            href="/checkout"
          >
            Place Order
          </a>
        )}
      </div>
    </div>
  );
};
TotalRow.propTypes = {
  grandTotal: PropTypes.number,
  emptyCart: PropTypes.func,
  loading: PropTypes.bool,
};
TotalRow.defaultProps = {
  grandTotal: 0,
  emptyCart: () => {},
  loading: false,
};
export default TotalRow;
