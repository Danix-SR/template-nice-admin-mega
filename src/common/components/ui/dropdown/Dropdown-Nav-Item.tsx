import React from 'react';
import classNames from 'classnames';

export interface DropdownItemProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title: string;
  icon: string;
  text: string;
  fecha: Date;
  color?: string;
}

export function DropdownNavItem({
  children,
  className,
  onClick,
  title,
  icon = 'bi bi-app',
  text,
  fecha = new Date(),
  color = 'yellow'
}: DropdownItemProps): JSX.Element {
  const cn = classNames(className, {
    'text-warning': color === 'red',
    'text-danger': color === 'blue',
    'text-success': color === 'green',
    'text-primary': color === 'yellow'
  });

  return (
    <li className="notification-item">
      <i className={`${icon} ${cn}`}></i>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        <p>{fecha.toString()}</p>
      </div>
    </li>
  );
}
