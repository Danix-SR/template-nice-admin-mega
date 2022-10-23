export interface DropdownNavIconProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  DropdownNavIconData: userNotification[];
}

export interface DropdownNavProfileProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  DropdownNavProfileData: userProfile[];
}

export interface userNotification {
  id: number;
  icon: string;
  title: string;
  text: string;
  fecha: Date;
  color?: string;
}

export interface userProfile {
  id: number;
  icon: string;
  title: string;
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

export interface DropdownProfileProps {
  children?: React.ReactNode;
  className?: string;
  title: string;
  iconName: string;
}
