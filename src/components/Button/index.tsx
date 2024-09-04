import React, { ReactNode } from "react";
import classNames from "classnames";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  leftIcon?: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = (props: IButton) => {
  const { children, className, leftIcon, variant, ...rest } = props;

  const buttonClass = classNames(
    "button",
    {
      "btn-primary": variant === "primary",
      "btn-secondary": variant === "secondary",
    },
    className
  );

  return (
    <button className={buttonClass} {...rest}>
      {leftIcon && <span>{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;
