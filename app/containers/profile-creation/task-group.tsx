import {
  AccordionItem,
  AccordionContent,
  AccordionHeader,
} from '@/app/components/ui/accordion';
import { TaskGroupType, ToggleTaskChecked } from '@/app/utils/types';
import { TaskGroupTitle } from './task-group-title';
import { Tasks } from './tasks';

type Props = {
  groupIndex: number;
  taskGroup: TaskGroupType;
  toggleTaskChecked: ToggleTaskChecked;
};
export const TaskGroup: React.FC<Props> = props => {
  const { groupIndex, taskGroup, toggleTaskChecked } = props;
  const { tasks, name } = taskGroup;
  const remainingTasks = tasks.filter(task => !task.checked);
  const remainingTasksCount = remainingTasks.length;

  return (
    <AccordionItem value={name} key={name}>
      <AccordionHeader>
        <TaskGroupTitle name={name} remainingTasksCount={remainingTasksCount} />
      </AccordionHeader>
      <AccordionContent>
        <Tasks
          tasks={tasks}
          groupIndex={groupIndex}
          toggleTaskChecked={toggleTaskChecked}
        />
      </AccordionContent>
    </AccordionItem>
  );
};
