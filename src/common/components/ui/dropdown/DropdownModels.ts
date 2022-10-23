export interface DropdownProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  dropdownData: userNotification[];
}
export interface userNotification {
  id: number;
  icon: string;
  title: string;
  text: string;
  fecha: Date;
  color?: string;
}

export interface DropdownSideItemProps {
  children?: React.ReactNode;
  className?: string;
  sidebarItems: Array<{ id: number; title: string; icon: string }>;
}

export interface DropdownItemProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title: string;
  icon: string;
  text: string;
  fecha: Date;
  color?: string;
}
