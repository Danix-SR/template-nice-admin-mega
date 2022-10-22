import React from 'react';
import './App.css';
import { Header } from './common/components/header/Header';

export function App(): JSX.Element {
  return (
    <div>
      <header>
        <Header />
      </header>
    </div>
  );
}
