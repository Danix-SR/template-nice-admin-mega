import React from 'react';
import { LogoMega } from '../ui/logo/Logo-Mega';
import { NavItem } from './Nav-Item';
import { Navbar } from './Nav-Bar';
import { Icon } from '../ui/icon/Icon';
import { DropdownNav } from '../ui/dropdown/Dropdown-Nav';

export function Nav(): JSX.Element {
  const userNotification: Array<{
    id: number;
    icon: string;
    title: string;
    text: string;
    fecha: Date;
    color?: string;
  }> = [
    {
      id: 10,
      icon: 'bi bi-exclamation-circle',
      title: 'Lorem Ipsum',
      text: 'Quae dolorem earum veritatis oditseno',
      fecha: new Date(),
      color: 'blue'
    },
    {
      id: 20,
      icon: 'bi bi-x-circle',
      title: 'Lorem Ipsum',
      text: 'Quae dolorem earum veritatis oditseno',
      fecha: new Date(),
      color: 'red'
    },
    {
      id: 30,
      icon: 'bi bi-info-circle',
      title: 'Lorem Ipsum',
      text: 'Quae dolorem earum veritatis oditseno',
      fecha: new Date(),
      color: 'green'
    },
    {
      id: 40,
      icon: 'bi bi-check-circle',
      title: 'Lorem Ipsum',
      text: 'Quae dolorem earum veritatis oditseno',
      fecha: new Date(),
      color: 'yellow'
    }
  ];
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <LogoMega />
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>
      <Navbar>
        <NavItem
          bntClassName="nav-link nav-icon btn-Transparent-Icon"
          title="Campana"
          icon={
            <Icon icon="bell">
              <span className="badge bg-primary badge-number">4</span>
            </Icon>
          }
        >
          <DropdownNav dropdownData={userNotification} />
        </NavItem>
        <NavItem
          bntClassName="nav-link nav-icon btn-Transparent-Icon"
          title="Notificaciones"
          icon={
            <Icon icon="chat-left-text">
              <span className="badge bg-success badge-number">4</span>
            </Icon>
          }
        >
          <DropdownNav dropdownData={userNotification} />
        </NavItem>
        <NavItem
          bntClassName="nav-link nav-profile d-flex align-items-center pe-0 btn-Transparent-Icon"
          className="pe-3"
          title="Perfil"
          icon={
            <Icon icon="person">
              <span className="d-none d-md-block dropdown-toggle ps-2">
                K. Anderson
              </span>
            </Icon>
          }
        >
          <div>hola</div>
        </NavItem>
      </Navbar>
    </header>
  );
}
