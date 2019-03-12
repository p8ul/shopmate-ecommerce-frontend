import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import ContentLoader from 'react-content-loader';
import TotalRow from './TotalRow';
import Quantity from '../Quantity';

const LoaderCell = (props) => (
  <ContentLoader
    rtl
    width={400}
    speed={2}
    height={150}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="105" rx="5" ry="5" width="220" height="150" />
  </ContentLoader>
);

const RowLoaderCell = Array.from({ length: 5 }, (v, k) => k + 1).map((item) => {
  return (
    <Table.Cell key={item}>
      <LoaderCell />
    </Table.Cell>
  );
});

const CartItems = (props) => {
  const { cart, removeProduct, loading } = props;
  let grandTotal = 0;
  cart.data.map((item) => {
    grandTotal += parseFloat(item.subtotal);
    return grandTotal;
  });
  return (
    <React.Fragment>
      <TotalRow grandTotal={grandTotal.toFixed(2)} {...props} />
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Attributes</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Subtotal</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className={loading ? 'ui form loading' : ''}>
          {cart.data.map((item, index) => {
            return (
              // eslint-disable-next-line
            <Table.Row key={index}>
                <Table.Cell>
                  {item.name}
                  <br />
                  <span
                    className="btn delete ui cursor pointing"
                    role="presentation"
                    onClick={() => removeProduct({ id: item.item_id })}
                  >
                    {' '}
                    remove
                  </span>
                </Table.Cell>
                <Table.Cell>{item.attributes}</Table.Cell>
                <Table.Cell className="fg-red-pink">£ {item.price}</Table.Cell>
                <Table.Cell>
                  <Quantity
                    quantity={item.quantity}
                    itemId={item.item_id}
                    {...props}
                  />
                </Table.Cell>
                <Table.Cell className="fg-red-pink" textAlign="right">
                  £ {item.subtotal}
                </Table.Cell>
              </Table.Row>
            );
          })}
          {cart.data.length < 1 && <Table.Row>{RowLoaderCell}</Table.Row>}
        </Table.Body>
        <Table.Footer>
          <Table.Row className="cart_result">
            <Table.Cell colSpan={4} textAlign="right">
              Grand total
            </Table.Cell>
            <Table.Cell colSpan={1} textAlign="right">
              £ {grandTotal.toFixed(2)}
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  );
};

CartItems.propTypes = {
  cart: PropTypes.shape({}),
  removeProduct: PropTypes.func,
  loading: PropTypes.bool,
};

CartItems.defaultProps = {
  cart: { data: [] },
  removeProduct: () => {},
  loading: false,
};
export default CartItems;
