import { TaskType, ToggleTaskChecked } from '@/app/utils/types';
import { Task } from './task';

type Props = {
  tasks: TaskType[];
  groupIndex: number;
  toggleTaskChecked: ToggleTaskChecked;
};
export const Tasks: React.FC<Props> = props => {
  const { tasks, groupIndex, toggleTaskChecked } = props;

  return (
    <>
      {tasks.map((task, taskIndex) => (
        <Task
          task={task}
          taskIndex={taskIndex}
          groupIndex={groupIndex}
          key={task.description + task.value}
          toggleTaskChecked={toggleTaskChecked}
        />
      ))}
    </>
  );
};
