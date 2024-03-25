import {
  AccordionItem,
  AccordionContent,
  AccordionHeader,
} from '@/app/components/ui/accordion';
import { TaskGroupType, ToggleTaskChecked } from '@/app/utils/types';
import { TaskGroupTitle } from './task-group-title';
import { Tasks } from './tasks';

type Props = {
  groupIndex: number; // index of task group
  taskGroup: TaskGroupType; // task group
  toggleTaskChecked: ToggleTaskChecked; // function to toggle checked state of task
};

/* Component to show task group */
export const TaskGroup: React.FC<Props> = props => {
  const { groupIndex, taskGroup, toggleTaskChecked } = props;
  const { tasks, name } = taskGroup;
  /* Count of uncompleted tasks */
  const remainingTasksCount = tasks.filter(task => !task.checked).length;

  return (
    <AccordionItem value={name} key={name}>
      <AccordionHeader>
        <TaskGroupTitle name={name} remainingTasksCount={remainingTasksCount} />
      </AccordionHeader>
      <AccordionContent>
        <Tasks
          tasks={tasks}
          groupName={name}
          groupIndex={groupIndex}
          toggleTaskChecked={toggleTaskChecked}
        />
      </AccordionContent>
    </AccordionItem>
  );
};
