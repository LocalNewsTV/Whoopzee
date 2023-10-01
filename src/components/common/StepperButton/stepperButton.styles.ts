import styled from "@emotion/styled";

type ButtonProps = {
  disabled: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  margin: 0;
  padding: 0;
  height: 25pt;
  width: 25pt;
  background-color: ${({disabled}) => disabled ? '#9F825B' : '#DAC09B'};
  border: 1pt solid #9F825B;
  &:hover {
    cursor: pointer;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
