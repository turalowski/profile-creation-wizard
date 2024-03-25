import React from 'react';
import clsx from 'clsx';

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
      <svg
        className={clsx(
          'absolute pointer-events-none hidden peer-checked:block stroke-whiteoutline-none text-[white]',
          tickClassName
        )}
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.49574 6.10067L0.888005 3.30201L0 4.24832L3.49574 8L10 0.946309L9.11825 0L3.49574 6.10067Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export { Checkbox };
