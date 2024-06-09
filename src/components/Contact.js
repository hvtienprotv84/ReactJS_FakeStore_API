import React from "react";
import styled from "styled-components";

import { Typography } from ".";

const Contact = () => {
  return (
    <Wrapper>
      <div className='contact__text'>
        <Typography.H2>Đăng ký nhận bản tin của chúng tôi và được giảm giá 20%</Typography.H2>
        <Typography.P>
        Mua sắm trước, thanh toán sau. Bạn sẽ chỉ trả tiền cho những món đồ bạn đã mua. Khoản thanh toán của bạn sẽ tự động được trừ vào thẻ của bạn sau 30 ngày, không tính thêm phí
        </Typography.P>
      </div>
      <form className='contact__form' onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='Enter Email' />
        <button type='submit'>Subscribe</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
  max-width: 750px;

  .contact__text {
    h2 {
      margin-bottom: 2rem;
    }
  }

  .contact__form {
    border-radius: var(--radius);
    border: 0.3rem solid var(--green-color-1);
    padding: 0.5rem;
    width: min(100%, 500px);
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    input,
    button {
      font-size: var(--fs-400);
    }

    button {
      background: var(--green-color-1);
      border-radius: var(--radius);
      padding: 0.5rem 1rem;
      transition: var(--transition);
      color: var(--blue-color-3);
      &:hover {
        color: var(--white-color);
      }
    }
  }
`;

export default Contact;
