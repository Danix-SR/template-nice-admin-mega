import React from 'react';
import { DropdownProfileProps } from './DropdownModels';

export function DropdownNavProfileItem({
  children,
  className,
  title,
  iconName,
  ...props
}: DropdownProfileProps): JSX.Element {
  return (
    <li>
      <a
        className="dropdown-item d-flex align-items-center"
        href="users-profile.html"
      >
        <i className={iconName}></i>
        <span>{title}</span>
      </a>
    </li>
  );
}
