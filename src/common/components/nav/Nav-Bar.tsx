import React from 'react';
import { NavbarProps } from './NavModels';

export function Navbar({ children }: NavbarProps): JSX.Element {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">{children}</ul>
    </nav>
  );
}
