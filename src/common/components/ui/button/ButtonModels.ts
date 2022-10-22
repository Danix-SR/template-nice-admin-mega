export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  selected?: boolean;
  disabled?: boolean;
}
