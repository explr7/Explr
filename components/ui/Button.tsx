import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  type = 'button',
  disabled,
  onClick,
  style,
}: ButtonProps) {
  const cls = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    disabled ? 'opacity-50 pointer-events-none' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  if (href) {
    return <a href={href} className={cls} style={style}>{children}</a>;
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
