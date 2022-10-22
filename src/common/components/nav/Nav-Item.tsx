import React from 'react';
import { Button } from '../ui/button/Button';
import { useDetectClickOut } from '../../hooks/useDetectClickOut';

export interface NavItemProps {
  children?: React.ReactNode;
  className?: string;
  bntClassName: string;
  title?: string;
  icon?: React.ReactNode;
}

export function NavItem({
  children,
  className = '',
  bntClassName = '',
  title,
  icon,
  ...props
}: NavItemProps): JSX.Element {
  const { ref, show, ChangeState } = useDetectClickOut();

  return (
    <li className={`nav-item dropdown ${className}`}>
      <Button
        title={title}
        className={bntClassName}
        onClick={ChangeState}
        ref={ref}
      >
        {icon}
      </Button>
      {show && children}
    </li>
  );
}
