import React from 'react';
import clsx from 'clsx';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function Heading({
  children,
  className,
  ...rest
}: HeadingProps): JSX.Element {
  return (
    <h1 className={clsx('text-2xl leading-8 font-medium', className)} {...rest}>
      {children}
    </h1>
  );
}
