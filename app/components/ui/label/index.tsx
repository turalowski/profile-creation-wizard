import clsx from 'clsx';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  className,
  children,
  ...rest
}) => {
  return (
    <label htmlFor={htmlFor} className={clsx('',className)} {...rest}>
      {children}
    </label>
  );
};

export { Label };
