import React from 'react';
import { SideBar } from './Side-Bar';
import { SideBarMenuArray } from './SideBarManu';

export function Side(): JSX.Element {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Home</span>
          </a>
        </li>
        {SideBarMenuArray.map((item, index) => (
          <SideBar sidebarMenu={item} key={index} />
        ))}
      </ul>
    </aside>
  );
}
