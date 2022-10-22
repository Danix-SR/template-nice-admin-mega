import React from 'react';
import './App.css';
import { MainTemplate } from './common/templates/Main-Template';

export function App(): JSX.Element {
  return (
    <div>
      <header>
        <MainTemplate />
      </header>
    </div>
  );
}
