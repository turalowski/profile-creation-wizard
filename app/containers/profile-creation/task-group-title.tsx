import clsx from 'clsx';
import { TaskIcon } from '../../components/ui/icons';

type Props = {
  remainingTasksCount: number;
  name: string;
};

/* Component to show title of task group */
export const TaskGroupTitle: React.FC<Props> = props => {
  const { name, remainingTasksCount } = props;
  const allTasksCompleted = remainingTasksCount === 0;

  return (
    <>
      <TaskIcon className={clsx(allTasksCompleted && 'text-success')} />
      <span className={clsx(allTasksCompleted && 'text-success')}>{name}</span>
      <span
        className={clsx(
          'w-6 h-6  text-white rounded-full',
          allTasksCompleted ? 'bg-success' : 'bg-red-700'
        )}
      >
        {remainingTasksCount}
      </span>
    </>
  );
};
