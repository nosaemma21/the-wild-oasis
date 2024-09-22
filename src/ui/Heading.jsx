import styled, { css } from "styled-components";

// const text = css`
//   text-align: center;
//   ${10 > 5 && `background-color: yellow`}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `font-size: 3rem;
  font-weight: 600;`}
  ${(props) =>
    props.as === "h2" &&
    `font-size: 2rem;
  font-weight: 600;`}
  ${(props) =>
    props.as === "h3" &&
    `font-size: 1rem;
  font-weight: 600;`}
  line-height: 1.4;
`;

export default Heading;
