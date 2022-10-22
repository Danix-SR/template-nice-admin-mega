import React from 'react';
import { SideBar } from './Side-Bar';

export function Side(): JSX.Element {
  const sidebarMenuArray: Array<{
    id: number;
    title: string;
    icon: string;
    items: Array<{ id: number; title: string }>;
  }> = [
    {
      id: 1,
      title: 'Componentes',
      icon: 'bi bi-menu-button-wide',
      items: [
        { id: 1, title: 'Alerts' },
        { id: 2, title: 'Accordion' }
      ]
    },
    {
      id: 2,
      title: 'Forms',
      icon: 'bi bi-journal-text',
      items: [
        { id: 1, title: 'Alerts' },
        { id: 2, title: 'Accordion' }
      ]
    }
  ];
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {sidebarMenuArray.map((item, index) => (
          <SideBar sidebarMenu={item} key={index} />
        ))}
      </ul>
    </aside>
  );
}
