import React, { forwardRef } from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  selected?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      className = '',
      onClick,
      title,
      selected = false,
      disabled = false,
      ...props
    }: ButtonProps,
    ref
  ) {
    return (
      <button
        type="button"
        title={title}
        className={className}
        disabled={disabled}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
