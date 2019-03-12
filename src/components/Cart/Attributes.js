/* eslint-disable */
import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class Attributes extends Component {
  static propTypes = {
    setAttribute: PropTypes.func,
    name: PropTypes.string,
    attributes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  static defaultProps = {
    setAttribute: () => {},
    name: '',
  };

  state = {};

  handleChange = (e, { value }) => {
    const { setAttribute, name } = this.props;
    this.setState({ value });
    setAttribute({ name, value });
  };

  render() {
    const { attributes, name } = this.props;
    const { value } = this.state;
    return (
      <Form>
        <Form.Group>
          {attributes.map((item) => {
            if (item.attribute_name === name) {
              const label = name !== 'Color' ? item.attribute_value : '';
              return (
                <Form.Field key={item.attribute_value}>
                  {/* {value === item.attribute_value && <span>checked</span>} */}
                  <Checkbox
                    radio
                    label={label}
                    name="checkboxRadioGroup"
                    value={item.attribute_value}
                    checked={value === item.attribute_value}
                    onChange={this.handleChange}
                    className={item.attribute_value.toLowerCase()}
                  />
                </Form.Field>
              );
            }
          })}
        </Form.Group>
      </Form>
    );
  }
}
