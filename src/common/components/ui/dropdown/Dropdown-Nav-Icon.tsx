import React from 'react';
import { DropdownNavIconItem } from './Dropdown-Nav-Icon-Item';
import { DropdownNavIconProps } from './DropdownModels';

export function DropdownNavIcon({
  children,
  className,
  onClick,
  DropdownNavIconData
}: DropdownNavIconProps): JSX.Element {
  return (
    <div>
      <ul
        className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications dropdown-menu-icon-position show"
        data-popper-placement="bottom-end"
      >
        <li className="dropdown-header">
          You have {DropdownNavIconData.length} new notifications
          <a href="#1">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        {DropdownNavIconData.map((item, index) => (
          <DropdownNavIconItem
            title={item.title}
            text={item.text}
            icon={item.icon}
            fecha={item.fecha}
            color={item.color}
            key={index}
          />
        ))}

        <li className="dropdown-footer">
          <a href="#1">Show all notifications</a>
        </li>
      </ul>
    </div>
  );
}
