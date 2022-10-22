import React from 'react';
import { Button } from '../../components/ui/button/Button';
import { DropdownSideItem } from '../ui/dropdown/Dropdown-Side-Item';
import { useDetectClickOut } from '../../hooks/useDetectClickOut';
import { SideBarProps } from './SideModel';

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
