import React from 'react';
import { NavItemProfileProps } from './NavModels';
import { useDetectClickOut } from '../../hooks/useDetectClickOut';
import { Button } from '../ui/button/Button';
import { Icon } from '../ui/icon/Icon';
import { DropdownNavProfile } from '../ui/dropdown/Dropdown-Nav-Profile';
import { DataNavProfiles } from './NavDataProfile';

export function NavItemProfile({
  children,
  className = '',
  titel,
  iconName,
  ...props
}: NavItemProfileProps): JSX.Element {
  const { ref, show, ChangeState } = useDetectClickOut();

  return (
    <li className={`nav-item dropdown pe-3 ${className}`}>
      <Button
        title={titel}
        className="nav-link nav-profile d-flex align-items-center pe-0 btn-Transparent-Icon"
        onClick={ChangeState}
        ref={ref}
      >
        <Icon icon={iconName}>
          <span className="d-none d-md-block dropdown-toggle ps-2">
            K. Anderson
          </span>
        </Icon>
      </Button>
      {show && <DropdownNavProfile DropdownNavProfileData={DataNavProfiles} />}
    </li>
  );
}
