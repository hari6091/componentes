import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import * as Styled from "./styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<Styled.StyledButtonProps> {
  /**
   * Button contents.
   */
  children: ReactNode;
}

/** Primary UI component for user interaction */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = "primary", size = "md", ...rest },
  ref
) {
  return (
    <Styled.Button ref={ref} variant={variant} size={size} {...rest}>
      {children}
    </Styled.Button>
  );
});
