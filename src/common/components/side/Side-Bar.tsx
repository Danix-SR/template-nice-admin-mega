import React from 'react';
import { Button } from '../../components/ui/button/Button';
import { DropdownSideItem } from '../ui/dropdown/Dropdown-Side-Item';
import { useDetectClickOut } from '../../hooks/useDetectClickOut';

export interface sidebarMenu {
  id: number;
  title: string;
  icon: string;
  items: Array<{ id: number; title: string }>;
}

export interface SideBarProps {
  children?: React.ReactNode;
  className?: string;
  sidebarMenu: sidebarMenu;
}

export function SideBar({
  children,
  className,
  sidebarMenu
}: SideBarProps): JSX.Element {
  const { ref, show, ChangeState } = useDetectClickOut();

  return (
    <li className="nav-item" ref={ref}>
      <Button
        className={`nav-link btn-Transparent-Icon ${!show && 'collapsed'}`}
        onClick={ChangeState}
      >
        <i className={sidebarMenu.icon}></i>
        <span>{sidebarMenu.title}</span>
        <i className="bi bi-chevron-down sidebar-nav-ddfds"></i>
      </Button>
      {show && <DropdownSideItem sidebarItems={sidebarMenu.items} />}
    </li>
  );
}
