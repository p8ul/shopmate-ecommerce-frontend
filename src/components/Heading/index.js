import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

const Heading = ({ title, subTitle }) => (
  <Container className="content animated fadeIn">
    <div className="heading">
      <Header as="h1">{title}</Header>
      {/* <div className="heading__next"> */}
      <Header as="h4">{subTitle}</Header>
      {/* </div> */}
    </div>
  </Container>
);
Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
Heading.defaultProps = {
  title: 'Great stuff',
  subTitle: 'More Than 400 000 items',
};
export default Heading;
