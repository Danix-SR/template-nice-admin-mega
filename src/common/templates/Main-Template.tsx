import React from 'react';
import { MainTemplateProps } from './TemplatesModels';
import { Nav } from '../components/nav/Nav';
import { Side } from '../components/side/Side';

export function MainTemplate({
  children,
  className
}: MainTemplateProps): JSX.Element {
  return (
    <>
      <Nav />
      <Side />
      {children}
    </>
  );
}
