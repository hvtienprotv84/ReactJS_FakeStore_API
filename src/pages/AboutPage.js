import React from "react";
import styled from "styled-components";

import { Breadcrumb,Typography } from "../components";

import Screen from "../styles/Screen";

// import img from "../assets/about_img.jpg";

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb title="About" />
      <Wrapper className="page">
        <div className="about__text">
          <Typography.H1>Về Chúng Tôi</Typography.H1>
          <Typography.P>
          S Group là một tập hợp các thương hiệu và doanh nghiệp, giúp mọi việc trở nên dễ dàng
          để khách hàng trên toàn thế giới thể hiện bản thân thông qua thời trang và thiết kế cũng như lựa chọn lối sống bền vững hơn. Chúng tôi tạo ra giá trị cho con người và xã hội nói chung bằng cách cung cấp dịch vụ cho khách hàng và bằng cách phát triển với trọng tâm là tăng trưởng bền vững và có lợi nhuận.
          </Typography.P>
        </div>
        <div className="about__img">
          <img src='https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg' alt="about-img" />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  ${Screen.lg`
  grid-template-columns: repeat(3,1fr);
  gap:2rem;
`}
  .about__text {
    max-width: 500px;
  }
  .about__img {
    max-width: 700px;
    ${Screen.lg`
  grid-column: 2/4;
`}
  }

  h1 {
    color: var(--green-color-1);
    margin-bottom: 2rem;
  }
`;

export default AboutPage;
