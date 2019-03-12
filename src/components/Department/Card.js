import React from 'react';
import PropTypes from 'prop-types';
import { Image, Grid } from 'semantic-ui-react';

const Card = ({ image, className, title, goTo, path }) => (
  <Grid.Column className="department__card animated fadeIn">
    <div className={`department__image ${className}`}>
      <Image src={image} />
    </div>
    <div className="department__overlay">
      <div className="overlay__content">
        <div className="department__title">{title}</div>
        <button
          className="ui button rounded bg-white"
          type="button"
          onClick={() => goTo(path)}
        >
          Show More
        </button>
      </div>
    </div>
  </Grid.Column>
);

Card.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  goTo: PropTypes.func,
  path: PropTypes.string,
};

Card.defaultProps = {
  image: '',
  className: '',
  title: '',
  goTo: () => {},
  path: '',
};
export default Card;
