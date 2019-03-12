import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { Grid } from 'semantic-ui-react';
import PaymentForm from './PaymentForm';
import StripeLogo from '../../assets/images/logo-stripe.png';

class App extends Component {
  state = {};

  render() {
    return (
      <StripeProvider apiKey="pk_test_cLmVsGBD0Cv6tQftwZ9jan4Z00U2AJ5GIu">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column computer={8} mobile={16}>
              <img src={StripeLogo} alt="stripe logo" />
            </Grid.Column>
            <Grid.Column computer={8} mobile={16}>
              <div className="example">
                <h2>Stripe Checkout</h2>
                <Elements>
                  <PaymentForm {...this.props} />
                </Elements>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StripeProvider>
    );
  }
}

export default App;
