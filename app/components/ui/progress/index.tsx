import React, { useEffect, useState } from 'react';
import {
  ProgressProvider,
  useProgressContext,
} from '@/app/components/ui/progress/progress.context';
import clsx from 'clsx';

type SpanElementProps = React.HTMLAttributes<HTMLSpanElement>;

interface ProgressOuterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

/**
 * ProgressOuter component renders the outer container for the progress bar.
 * It wraps the children components and provides progress context.
 */
const ProgressOuter: React.FC<ProgressOuterProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <ProgressProvider>
      <div
        aria-valuemin={0}
        aria-valuemax={100}
        className={clsx(
          'rounded-full',
          'bg-[#e6fdf9] ',
          'flex items-center justify-start',
          'h-6 w-full',
          className
        )}
        role="progressbar"
        {...rest}
      >
        {children}
      </div>
    </ProgressProvider>
  );
};

interface ProgressInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * ProgressInner component renders the inner portion of the progress bar.
 * It receives the current progress value and updates its width accordingly.
 * It should we wrapped with ProgressOuter component.
 */
const ProgressInner: React.FC<ProgressInnerProps> = ({
  value,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        `h-full`,
        `text-right bg-[#02bc9c]`,
        `flex items-center justify-end`,
        `rounded-full`,
        `transition-width duration-1000 ease-in-out`,
        className
      )}
      style={{ width: `${value}%` }}
      role="progressbar"
      aria-valuenow={isNaN(value) ? undefined : value}
      aria-valuetext={`${value}%`}
      {...rest}
    >
      {children}
    </div>
  );
};

export { ProgressOuter, ProgressInner };
