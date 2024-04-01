import clsx from 'clsx';

type ProgressLabelProps = {
  value: string;
};

/* Component to show progress percentage */
export const ProgressLabel: React.FC<ProgressLabelProps> = props => {
  const { value } = props;
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={clsx('p-2', 'text-white text-base leading-5 font-light ')}
    >
      {value}
    </span>
  );
};
