import React from 'react';

export interface NavbarProps {
  children?: React.ReactNode;
}

export function Navbar({ children }: NavbarProps): JSX.Element {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">{children}</ul>
    </nav>
  );
}
