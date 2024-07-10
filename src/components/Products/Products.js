import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

import Product from "./Product/Product";
import styled from "styled-components";

const Products = () => {
  const products = useSelector((state) => state.shop.products);

  return (
    <DivContainer  >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </DivContainer>
  );
};

export default Products;

const DivContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
`;