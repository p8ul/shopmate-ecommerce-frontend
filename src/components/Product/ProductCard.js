import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Icon } from 'semantic-ui-react';
import { IMAGE_URL } from '../../constants/product/list';
import CartModal from '../Cart/Modal';

const ProductCard = (props) => {
  const { product, goTo } = props;
  return (
    <Grid.Column>
      <div className="product">
        <div className="product__image">
          <Image src={IMAGE_URL + product.thumbnail} />
        </div>
        <div className="product__details">
          <div className="product__name">{product.name}</div>
          <div className="product__action">
            <div className="product__price fg-red-pink">£ {product.price}</div>
          </div>
        </div>
        <div className="product__overlay">
          <div className="overlay___content">
            <div>
              <Icon name="heart outline" size="large" />
              <button
                onClick={() => goTo(`/single/${product.product_id}`)}
                className="ui button bg-red-pink"
                type="button"
              >
                View Details
              </button>
              <CartModal
                className="button bg-white rounded cart-btn"
                productId={product.product_id}
                {...props}
              />
            </div>
          </div>
        </div>
      </div>
    </Grid.Column>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({}),
  goTo: PropTypes.func,
};
ProductCard.defaultProps = {
  product: { product_id: 0 },
  goTo: () => {},
};
export default ProductCard;
