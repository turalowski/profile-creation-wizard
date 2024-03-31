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
    <div className="flex items-center gap-3">
      <TaskIcon
        aria-hidden={true}
        className={clsx({ 'text-success': allTasksCompleted })}
      />
      <span
        className={clsx({
          'text-success': allTasksCompleted,
        })}
      >
        {name}
      </span>
      <span
        className={clsx('w-6 h-6 rounded-full', 'text-white bg-red-700', {
          'bg-success': allTasksCompleted,
        })}
        role="status"
        aria-live="polite"
      >
        {remainingTasksCount}
      </span>
    </div>
  );
};
