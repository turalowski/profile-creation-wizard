import { ProgressInner, ProgressOuter } from '@/app/components/ui/progress';
import clsx from 'clsx';
import { ProgressLabel } from './progress-label';

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
        <ProgressLabel value={`${value}%`} />
      </ProgressInner>
    </ProgressOuter>
  );
};
