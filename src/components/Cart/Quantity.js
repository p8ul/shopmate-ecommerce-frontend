import React from 'react';
import { Label, Grid, Icon, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Quantity extends React.Component {
  static propTypes = {
    quantity: PropTypes.number,
    updateCart: PropTypes.func,
    itemId: PropTypes.number,
  };

  static defaultProps = {
    quantity: 0,
    itemId: 0,
    updateCart: () => {},
  };

  state = { quantity: 0 };

  componentDidMount() {
    const { quantity } = this.props;
    this.setState({ quantity });
  }

  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
    this.updateQuantity(event.target.value);
  };

  updateQuantity = (quantity) => {
    const { updateCart, itemId } = this.props;
    updateCart({ item_id: itemId, quantity });
  };

  increment = (add) => {
    const { quantity } = this.state;
    let data = add ? quantity + 1 : quantity - 1;
    data = data < 1 ? 1 : data;
    this.setState({ quantity: data });
    if (quantity !== data) this.updateQuantity(data);
  };

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <Grid.Row className="cart_quantity">
          <div className="display-flex ui pointing cursor">
            <Label circular onClick={() => this.increment(false)}>
              <Icon name="minus" />
            </Label>
          </div>
          <div className="quantity_input">
            <Input
              fluid
              placeholder="Q"
              value={quantity}
              onChange={this.handleChange}
            />
          </div>
          <Grid.Column className="ui pointing cursor">
            <Label onClick={() => this.increment(true)} circular>
              <Icon name="plus" />
            </Label>
          </Grid.Column>
          <Grid.Column width={9} />
        </Grid.Row>
      </div>
    );
  }
}

export default Quantity;
