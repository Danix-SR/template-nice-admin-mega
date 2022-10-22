import React from 'react';
import { useDetectClickOut } from '../../hooks/useDetectClickOut';

export interface SideItemProps {
  children?: React.ReactNode;
  className?: string;
  id: number;
  title: string;
}

export function SideItem({
  children,
  className,
  id,
  title
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
        <span>{title}</span>
      </a>
    </li>
  );
}
