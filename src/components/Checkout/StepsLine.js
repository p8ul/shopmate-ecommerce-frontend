import React from 'react';
import PropTypes from 'prop-types';

const StepsLine = ({ showLine, circle1, circle2, line }) => {
  return (
    <div className="checkout__content__steps_container">
      <div className="checkout__content__steps">
        {showLine && (
          <div className={`checkout__content__steps__circle ${circle1}`} />
        )}
        <div className={`checkout__content__steps__line ${line}`} />
        {showLine && (
          <div className={`checkout__content__steps__circle ${circle2}`} />
        )}
      </div>
    </div>
  );
};

StepsLine.propTypes = {
  showLine: PropTypes.bool,
  circle1: PropTypes.string,
  circle2: PropTypes.string,
  line: PropTypes.string,
};

StepsLine.defaultProps = {
  showLine: true,
  circle1: '',
  circle2: '',
  line: '',
};
export default StepsLine;
