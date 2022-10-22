import React from 'react';

export interface IconProps {
  children?: React.ReactNode;
  icon: string;
  className?: string;
}

export function Icon({
  children,
  className = '',
  icon = 'app',
  ...props
}: IconProps): JSX.Element {
  return (
    <React.Fragment>
      <i className={`bi bi-${icon} ${className}`} />
      {children}
    </React.Fragment>
  );
}
