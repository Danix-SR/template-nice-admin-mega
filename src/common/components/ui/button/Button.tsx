import React, { forwardRef } from 'react';
import { ButtonProps } from './ButtonModels';

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
