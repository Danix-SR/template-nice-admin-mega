import React from 'react';
import { DropdownNavProfileItem } from './Dropdown-Nav-Profile-Item';
import { DropdownNavProfileProps } from './DropdownModels';

export function DropdownNavProfile({
  children,
  className,
  onClick,
  DropdownNavProfileData
}: DropdownNavProfileProps): JSX.Element {
  return (
    <>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile dropdown-menu-profile-position show">
        <li className="dropdown-header">
          <h6>Kevin Anderson</h6>
          <span>Web Designer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        {DropdownNavProfileData.map((item, index) => (
          <DropdownNavProfileItem
            title={item.title}
            iconName={item.icon}
            key={index}
          />
        ))}
      </ul>
    </>
  );
}
