import styled, { css } from "styled-components";

export type StyledButtonProps = {
  /**
   * How large should the button be?
   */
  size: "sm" | "md" | "lg";
  /**
   * Whicn color the button will be?
   */
  variant: "primary" | "secondary";
};

const sizeModifier = {
  lg: css`
    padding: 12px 16px;
    font-size: 16px;
  `,
  md: css`
    padding: 10px 16px;
    font-size: 14px;
  `,
  sm: css`
    padding: 8px 16px;
    font-size: 12px;
  `,
};

const variantModifier = {
  primary: css`
    color: #ffffff;
    background-color: #4945ff;

    &:hover {
      background-color: #7b79ff;
    };
  `,
  secondary: css`
    color: #000000;
    background: #f0f0ff;

    &:hover {
      background: #ffffff;
    };
  `,
};

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ size = 'lg' }) => sizeModifier[size]};
  ${({ variant = 'primary' }) => variantModifier[variant]};
`;
