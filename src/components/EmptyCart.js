import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Typography, Button } from ".";

const EmptyCart = () => {
  return (
    <main>
      <Wrapper className='page-w-b  '>
        <div className='empty-cart'>
          <Typography.H1>
            Giỏ hàng của bạn đang <span>RỖNG</span>
          </Typography.H1>
          <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt=""/>
          <br/>
          <Button id="ok" variant='primary'>
            <Link id="ok2" to='/products'>Shop now</Link>
          </Button>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  place-items: center;

  .empty-cart {
    text-align: center;
    h1 {
      margin-top:-50px;
      margin-bottom: 0.5rem;
      span {
        color: var(--red-color-1);
      }
      font-size: 35px;
    }
    img {
      width: 350px;
      height: 350px;
    }
    #ok{
      width:200px;
      margin-bottom:-300px;
    }
    #ok2{
      font-size: 25px;
    }
  }
`;
export default EmptyCart;
