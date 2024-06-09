import React from "react";

import { GridProducts, ListProducts } from ".";
import styled from "styled-components";

import { useProductsContext } from "../contexts/products_context";
import { useFilterContext } from "../contexts/filter_context";

import { Loading, Error, Typography } from ".";
const Products = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const {
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      // <Typography.H4>Xin lỗi, không có sản phẩm nào phù hợp với tìm kiếm của bạn...</Typography.H4>
      <React.Fragment>
      <StyleDiv2>
      <StyledH4>Xin lỗi, không có sản phẩm nào phù hợp với tìm kiếm của bạn...</StyledH4>
      </StyleDiv2>
      <StyleDiv>
      <StyledImage src="https://cdn-icons-png.flaticon.com/512/6009/6009660.png" alt=""/>
      </StyleDiv>
    </React.Fragment>
    );
  }

  if (grid_view === false) {
    return <ListProducts products={products} />;
  }
  return <GridProducts products={products} />;
};

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyleDiv2 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:50px;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  margin: auto;
`;

const StyledH4 = styled(Typography.H4)`
  /* Thêm các quy tắc CSS tùy chỉnh cho StyledH4 */
  font-size: 30px;
  font-weight: bold;
  /* ... */
`;

export default Products;
