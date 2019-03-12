import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'semantic-ui-react';

const BreadcrumbShorthand = ({ sections }) => (
  <Breadcrumb icon="circle" sections={sections} />
);

BreadcrumbShorthand.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})),
};

BreadcrumbShorthand.defaultProps = {
  sections: [],
};
export default BreadcrumbShorthand;
