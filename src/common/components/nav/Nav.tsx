import React from 'react';
import { LogoMega } from '../ui/logo/Logo-Mega';
import { NavItemIcon } from './Nav-Item-Icon';
import { Navbar } from './Nav-Bar';
import { DataNavIcons } from './NavDataIcon';
import { NavItemProfile } from './Nav-Item-Profile';

export function Nav(): JSX.Element {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <LogoMega />
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>
      <Navbar>
        <NavItemIcon
          titel="Notificaciones"
          iconName="bi bi-chat-left-text"
          colorSpanIcon="Blue"
          UserNotifications={DataNavIcons}
        />
        <NavItemIcon
          titel="Alertas"
          iconName="bi bi-bell"
          colorSpanIcon="Green"
          UserNotifications={DataNavIcons}
        />
        <NavItemProfile titel="Profile" iconName="bi bi-person-circle" />
      </Navbar>
    </header>
  );
}
