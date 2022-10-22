import React from 'react';
import { Nav } from '../components/nav/Nav';
import { Side } from '../components/side/Side';

export function MainTemplate(): JSX.Element {
  return (
    <>
      <Nav />
      <Side />
    </>
  );
}
