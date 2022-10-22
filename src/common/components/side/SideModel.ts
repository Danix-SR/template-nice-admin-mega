export interface sidebarMenu {
  id: number;
  title: string;
  icon: string;
  items: Array<{ id: number; title: string }>;
}

export interface SideBarProps {
  children?: React.ReactNode;
  className?: string;
  sidebarMenu: sidebarMenu;
}
