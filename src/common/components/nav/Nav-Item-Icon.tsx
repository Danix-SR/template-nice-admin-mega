import React from 'react';
import { NavItemProps } from './NavModels';
import { useDetectClickOut } from '../../hooks/useDetectClickOut';
import { Button } from '../ui/button/Button';
import { DropdownNavIcon } from '../ui/dropdown/Dropdown-Nav-Icon';
import { Icon } from '../ui/icon/Icon';
import classNames from 'classnames';

export function NavItemIcon({
  children,
  className = '',
  titel,
  iconName,
  colorSpanIcon,
  UserNotifications,
  ...props
}: NavItemProps): JSX.Element {
  const { ref, show, ChangeState } = useDetectClickOut();
  const LetNotifications: number = UserNotifications.length;
  const cn = classNames(className, {
    'bg-primary': colorSpanIcon === 'Blue',
    'bg-danger': colorSpanIcon === 'Red',
    'bg-warning': colorSpanIcon === 'Yellow',
    'bg-success': colorSpanIcon === 'Green'
  });

  return (
    <li className={`nav-item dropdown ${className}`}>
      <Button
        title={titel}
        className="nav-link nav-icon btn-Transparent-Icon"
        onClick={ChangeState}
        ref={ref}
      >
        <Icon icon={iconName}>
          <span className={`badge ${cn} badge-number`}>{LetNotifications}</span>
        </Icon>
      </Button>
      {show && <DropdownNavIcon DropdownNavIconData={UserNotifications} />}
    </li>
  );
}
