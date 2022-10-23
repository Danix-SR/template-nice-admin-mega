import React from 'react';
import { IconProps } from './IconModels';

export function Icon({
  children,
  className = '',
  icon = 'bi bi-app',
  ...props
}: IconProps): JSX.Element {
  return (
    <React.Fragment>
      <i className={`${icon} ${className}`} />
      {children}
    </React.Fragment>
  );
}
