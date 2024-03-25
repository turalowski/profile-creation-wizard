import clsx from 'clsx';

type LabelElement = React.HTMLAttributes<HTMLLabelElement>;
type LabelProps = LabelElement & {
  htmlFor?: string;
};

const Label: React.FC<LabelProps> = ({
  htmlFor,
  className,
  children,
  ...rest
}) => {
  return (
    <label htmlFor={htmlFor} className={clsx('', className)} {...rest}>
      {children}
    </label>
  );
};

export { Label };
