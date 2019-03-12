import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import { IMAGE_URL, ProductCardLoader } from '../../constants';

const ProductImage = ({ product }) => {
  return (
    <div className="single_product__images">
      <div className="single_product__images__main">
        {product.data && product.data.thumbnail && (
          <Image src={IMAGE_URL + product.data.thumbnail} />
        )}
        {product && !product.data.thumbnail && <ProductCardLoader />}
      </div>
    </div>
  );
};

ProductImage.propTypes = {
  product: PropTypes.shape({}),
};

ProductImage.defaultProps = {
  product: {},
};
export default ProductImage;
