import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 430px) {
      ${props}
    }
  `;
};

// To implement these styles
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};

export const largeTablets = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
};
