import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export function Container({ children, className, style, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`container${className ? ' ' + className : ''}`} style={style}>
      {children}
    </Tag>
  );
}
