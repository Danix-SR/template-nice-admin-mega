import React from 'react';
import { IconProps } from './IconModels';

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
