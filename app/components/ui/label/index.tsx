type LabelElement = React.HTMLAttributes<HTMLLabelElement>;
type LabelProps = LabelElement & {
  htmlFor?: string;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children, ...rest }) => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

export { Label };
