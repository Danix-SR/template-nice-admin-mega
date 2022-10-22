import React from 'react';
import { DropdownNavItem } from './Dropdown-Nav-Item';
import { DropdownProps } from './DropdownModels';
export function DropdownNav({
  children,
  className,
  onClick,
  dropdownData
}: DropdownProps): JSX.Element {
  return (
    <div>
      <ul
        className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications dropdown-menu-position show"
        data-popper-placement="bottom-end"
      >
        <li className="dropdown-header">
          You have {dropdownData.length} new notifications
          <a href="#1">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        {dropdownData.map((item, index) => (
          <DropdownNavItem
            title={item.title}
            text={item.text}
            icon={item.icon}
            fecha={item.fecha}
            color={item.color}
            key={index}
          ></DropdownNavItem>
        ))}

        <li className="dropdown-footer">
          <a href="#1">Show all notifications</a>
        </li>
      </ul>
    </div>
  );
}
