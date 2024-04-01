import {
  ProgressLabel,
  ProgressInner,
  ProgressOuter,
} from '@/app/components/ui/progress';

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
        <ProgressLabel />
      </ProgressInner>
    </ProgressOuter>
  );
};
