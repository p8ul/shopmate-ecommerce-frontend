import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import StepsLine from './StepsLine';
import CustomerStep from './CustomerStep';
import FooterButtons from './FooterButtons';
import CartList from '../../containers/Cart/CartList';
import Payment from './PaymentProvider';
import CheckoutLinks from './Link';

function CheckoutForm(props) {
  const { activeStep } = props;
  return (
    <Container className="content checkout">
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column desktop={12} tablet={16} mobile={16}>
            <div className="checkout__main">
              <Header as="h2">Checkout</Header>

              <div className="checkout__content">
                <StepsLine
                  circle1="red"
                  circle2={activeStep > 1 ? 'red' : ''}
                  line={activeStep > 1 ? 'red' : ''}
                />
                <StepsLine
                  showLine={false}
                  line={activeStep > 2 ? 'red' : ''}
                />
                <StepsLine
                  circle1={activeStep > 2 ? 'red' : ''}
                  circle2={activeStep > 3 ? 'red' : ''}
                  line={activeStep > 3 ? 'red' : ''}
                />
              </div>
              <div className="checkout__content">
                <CheckoutLinks {...props} />
              </div>
              <div className="checkout__form">
                {activeStep === 1 && <CustomerStep {...props} />}
                {activeStep === 2 && <CartList />}
                {activeStep === 3 && <Payment {...props} />}
              </div>
            </div>
            <FooterButtons {...props} />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </Container>
  );
}
CheckoutForm.propTypes = {
  activeStep: PropTypes.number,
};

CheckoutForm.defaultProps = {
  activeStep: 1,
};
export default CheckoutForm;
