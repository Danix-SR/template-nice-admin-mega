import React from 'react';
import { useDetectClickOut } from '../../hooks/useDetectClickOut';
import { Icon } from '../ui/icon/Icon';
import { SideItemProps } from './SideModel';

export function SideItem({
  children,
  className,
  id,
  title,
  icon
}: SideItemProps): JSX.Element {
  const { ref, show, ChangeState } = useDetectClickOut();
  return (
    <li ref={ref}>
      <a
        href={`#${id}`}
        className={`${show && 'active'}`}
        onClick={ChangeState}
      >
        <i className="bi bi-circle"></i>
        <Icon icon={icon} />
        <span>{title}</span>
      </a>
    </li>
  );
}
