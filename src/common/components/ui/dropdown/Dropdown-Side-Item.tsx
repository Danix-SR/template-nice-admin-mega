import React from 'react';
import { SideItem } from '../../side/Side-Item';

export interface DropdownSideItemProps {
  children?: React.ReactNode;
  className?: string;
  sidebarItems: Array<{ id: number; title: string }>;
}

export function DropdownSideItem({
  children,
  className,
  sidebarItems
}: DropdownSideItemProps): JSX.Element {
  return (
    <ul
      id="components-nav"
      className={`nav-content collapse show`}
      data-bs-parent="#sidebar-nav"
    >
      {sidebarItems.map((item, index) => (
        <SideItem key={index} id={item.id} title={item.title} />
      ))}
    </ul>
  );
}
