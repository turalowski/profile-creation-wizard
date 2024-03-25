import React from 'react';
import clsx from 'clsx';
import { TickIcon } from '../icons';

interface CheckboxElement extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
}
type CheckboxProps = CheckboxElement & {
  tickClassName?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  tickClassName,
  children,
  ...rest
}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <input
        className={clsx(
          'peer relative appearance-none shrink-0 w-4 h-4 border-2 rounded-[4px] bg-white border-[#999999]',
          'focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-none outline-none',
          'checked:bg-success checked:border-0 ',
          className
        )}
        type="checkbox"
        {...rest}
      />
      <TickIcon className={tickClassName} />
    </div>
  );
};

export { Checkbox };
