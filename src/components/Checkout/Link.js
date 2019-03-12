import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component will render clickable step links
 * @param {*} props
 *  : navigateStep: (function) that takes you to next step or activate a step
 *  : activeStep: (integer) of the active step
 */
const Link = (props) => {
  const { activeStep } = props;
  const links = [
    {
      name: 'Deliver',
      number: 1,
      className: 'red',
    },
    {
      name: 'Confirmation',
      number: 2,
      className: activeStep > 1 ? 'red' : '',
    },
    {
      name: 'Payment',
      number: 3,
      className: activeStep > 2 ? 'red' : '',
    },
    {
      name: 'Finish',
      number: 4,
      className: activeStep > 3 ? 'red' : '',
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <div
        className={`ui pointing ${link.className}`}
        role="presentation"
        key={link.name}
      >
        {link.name}
      </div>
    );
  });

  return <React.Fragment>{renderedLinks}</React.Fragment>;
};

Link.propTypes = {
  activeStep: PropTypes.number,
};

Link.defaultProps = {
  activeStep: 0,
};
export default Link;
