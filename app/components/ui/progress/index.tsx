import React, { useEffect } from 'react';
import {
  ProgressProvider,
  useProgressContext,
} from '@/app/components/ui/progress/progress.context';
import clsx from 'clsx';

type HTMLElement = React.HTMLAttributes<HTMLDivElement>;
type SpanElementProps = React.HTMLAttributes<HTMLSpanElement>;

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * ProgressOuter component renders the outer container for the progress bar.
 * It wraps the children components and provides progress context.
 */
const ProgressOuter: React.FC<Omit<ProgressProps & HTMLElement, 'value'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <ProgressProvider >
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

/**
 * ProgressInner component renders the inner portion of the progress bar.
 * It receives the current progress value and updates its width accordingly.
 * It should we wrapped with ProgressOuter component.
 */
const ProgressInner: React.FC<ProgressProps & HTMLElement> = ({
  value,
  className,
  children,
  ...rest
}) => {
  const { value: currentValue, setValue } = useProgressContext();

  useEffect(() => {
    setValue(value);
  }, [value, setValue]);

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
      style={{ width: `${currentValue}%` }}
      role="progressbar"
      aria-valuenow={isNaN(value) ? undefined : value}
      aria-valuetext={`${value}%`}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * ProgressLabel component renders the label for the progress bar.
 * It displays the current progress percentage.
 * It should we wrapped with ProgressOuter component.
 */
const ProgressLabel: React.FC<Omit<SpanElementProps & ProgressProps, 'value' | 'children'>> = ({
  className,
  ...rest
}) => {
  const { value } = useProgressContext();

  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={clsx(
        'p-2',
        'text-white text-base leading-5 font-light ',
        className
      )}
      {...rest}
    >
      {value}%
    </span>
  );
};

export { ProgressOuter, ProgressInner, ProgressLabel };
