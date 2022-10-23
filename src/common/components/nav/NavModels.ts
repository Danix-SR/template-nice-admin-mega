export interface NavItemProps {
  children?: React.ReactNode;
  className?: string;
  titel: string;
  iconName: string;
  colorSpanIcon: ColorSpanIcon;
  UserNotifications: DataNavIcon[];
}

export interface NavItemProfileProps {
  children?: React.ReactNode;
  className?: string;
  titel: string;
  iconName: string;
}

export interface NavbarProps {
  children?: React.ReactNode;
}

export interface DataNavIcon {
  id: number;
  icon: string;
  title: string;
  text: string;
  fecha: Date;
  color?: string;
}

export interface DataNavProfile {
  id: number;
  icon: string;
  title: string;
}

export type ColorSpanIcon = 'Blue' | 'Red' | 'Yellow' | 'Green';
