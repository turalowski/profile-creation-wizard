import { ProgressInner, ProgressOuter } from '@/app/components/ui/progress';
import clsx from 'clsx';

type Props = {
  value: number;
};

/* Component to show status of completed tasks in percentage */
export const TasksProgress: React.FC<Props> = ({ value }) => {
  return (
    <ProgressOuter>
      <ProgressInner
        value={value}
        aria-label={`Normalized value of completed tasks in percentage. ${value}% of tasks completed`}
      >
        <span
          role="presentation"
          aria-hidden="true"
          className={clsx('p-2', 'text-white text-base leading-5 font-light ')}
        >
          {value}%
        </span>
      </ProgressInner>
    </ProgressOuter>
  );
};
