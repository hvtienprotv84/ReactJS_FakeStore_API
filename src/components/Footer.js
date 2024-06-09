import React from "react";
import styled from "styled-components";

import { Typography } from ".";

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography.P>
        &copy;{new Date().getFullYear()} -
        <a href='https://github.com/hvtienprotv84'> <strong>Huỳnh Vĩnh Tiến</strong></a> - All rights
        reserved
      </Typography.P>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--green-color-1);
  height: var(--footer-height);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: var(--white-color);
  }

  a {
    color: #fff;
    font-size: var(--fs-500);
  }
  strong {
    color: #00e7ff;
    font-size: 25px;
  }
`;

export default Footer;
