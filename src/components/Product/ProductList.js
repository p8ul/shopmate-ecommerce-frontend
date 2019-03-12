import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import Pagination from 'react-js-pagination';
import ProductCard from './ProductCard';
import { ProductCardLoader } from '../../constants/loaders';

const ProductList = (props) => {
  const {
    products: { data },
    activePage,
    handlePageChange,
    loading,
  } = props;
  return (
    <div className="bg-white-shaded">
      <Container className="content productList">
        <div className="ui all only">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={data.count}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
            prevPageText="Back"
            nextPageText="Forward"
            itemClassFirst="hidden"
            itemClassLast="hidden"
            linkClassFirst="hidden"
            itemClassPrev=""
            itemClassNext="itemClassNext"
            firstPageText="⟨"
          />
        </div>
        {loading && (
          <Grid columns="5" stackable equal="true">
            <Grid.Row>
              {Array.from({ length: 5 }, (v, k) => k + 1).map((item) => {
                return (
                  <Grid.Column key={item} className="product_loading">
                    <ProductCardLoader />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        )}
        {!loading && data && data.rows && (
          <Grid columns="5" stackable equal="true">
            <Grid.Row>
              {data.rows.map((product) => (
                <ProductCard
                  {...props}
                  key={product.product_id}
                  product={product}
                />
              ))}
            </Grid.Row>
          </Grid>
        )}
      </Container>
    </div>
  );
};
ProductList.propTypes = {
  products: PropTypes.shape({}),
  activePage: PropTypes.number,
  handlePageChange: PropTypes.func,
  loading: PropTypes.bool,
};
ProductList.defaultProps = {
  products: { count: 0, rows: [{ product_id: 1 }] },
  activePage: 1,
  handlePageChange: () => {},
  loading: true,
};
export default ProductList;
