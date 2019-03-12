import React from 'react';
import PropTypes from 'prop-types';

const FooterButtons = (props) => {
  const { navigateStep, activeStep } = props;
  return (
    <div className="checkout__footer">
      <div className="checkout__footer__button">
        <button
          className="ui button rounded"
          type="button"
          onClick={() => {
            navigateStep(false);
          }}
        >
          Back
        </button>
      </div>
      <div className="checkout__footer__button">
        <button
          className={
            activeStep === 3
              ? 'ui button bg-red-pink rounded disabled'
              : 'ui button bg-red-pink rounded'
          }
          type="button"
          onClick={() => {
            navigateStep(true);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

FooterButtons.propTypes = {
  navigateStep: PropTypes.func,
  activeStep: PropTypes.number,
};

FooterButtons.defaultProps = {
  navigateStep: () => {},
  activeStep: 1,
};
export default FooterButtons;
