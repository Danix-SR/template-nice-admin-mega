export interface SideBarManu {
  id: number;
  title: string;
  icon: string;
  items: SideBarManuItem[];
}

export interface SideBarProps {
  children?: React.ReactNode;
  className?: string;
  sidebarMenu: SideBarManu;
}

export interface SideBarManuItem {
  id: number;
  title: string;
  icon: string;
}

export interface SideItemProps {
  children?: React.ReactNode;
  className?: string;
  id: number;
  title: string;
  icon: string;
}
