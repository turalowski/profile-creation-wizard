import { TaskIcon } from '../../components/ui/icons';

type Props = {
  remainingTasksCount: number;
  name: string;
};
export const TaskGroupTitle: React.FC<Props> = props => {
  const { name, remainingTasksCount } = props;

  return (
    <>
      <TaskIcon />
      {name}
      <span className="w-6 h-6 bg-red-700 text-white rounded-full">
        {remainingTasksCount}
      </span>
    </>
  );
};
