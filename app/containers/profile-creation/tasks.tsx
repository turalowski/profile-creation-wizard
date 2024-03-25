import { TaskType, ToggleTaskChecked } from '@/app/utils/types';
import { Task } from './task';

type Props = {
  tasks: TaskType[]; // list of tasks
  groupIndex: number; // group index of tasks
  groupName: string; // group name of tasks
  toggleTaskChecked: ToggleTaskChecked; // function to toggle checked state of task
};

/* Component to show list of tasks */
export const Tasks: React.FC<Props> = props => {
  const { tasks, groupName, groupIndex, toggleTaskChecked } = props;

  return (
    <div aria-label={`Tasks of the ${groupName} group`} className='px-2'>
      {tasks.map((task, taskIndex) => (
        <Task
          task={task}
          taskIndex={taskIndex}
          groupIndex={groupIndex}
          key={task.description + task.value}
          toggleTaskChecked={toggleTaskChecked}
        />
      ))}
    </div>
  );
};
