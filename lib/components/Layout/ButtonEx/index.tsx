/* eslint-disable react/button-has-type */
import * as React from "react";
import { BaseComponentProps } from "lib/types";
import Button from "react-bootstrap/Button";

export type ButtonProps = BaseComponentProps & {
  dataTestId?: string;
  disabled?: boolean;
  danger?: boolean;
  padding?: string;
  primary?: boolean;
  variant?: string;
  onClick?: (event: any) => void;
};

const StyledButton = ({
  dataTestId,
  disabled,
  className,
  children,
  variant,
  onClick,
  style
}: ButtonProps): JSX.Element => (
  <Button
    data-testid={dataTestId}
    disabled={disabled}
    className={className}
    variant={variant}
    onClick={onClick}
    style={style}
  >
    {children}
  </Button>
);

const ButtonEx = StyledButton;

export default ButtonEx;
