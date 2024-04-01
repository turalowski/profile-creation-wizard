import {
  AccordionItem,
  AccordionContent,
  AccordionHeader,
} from '@/app/components/ui/accordion';
import { TaskGroupType } from '@/app/utils/types';
import { TaskGroupTitle } from './task-group-title';

type Props = {
  taskGroup: TaskGroupType;
  children: React.ReactNode;
};

/* Component to show task group */
export const TaskGroup: React.FC<Props> = props => {
  const { children, taskGroup } = props;
  const { tasks, name } = taskGroup;
  /* Count of uncompleted tasks */
  const remainingTasksCount = tasks.filter(task => !task.checked).length;

  return (
    <AccordionItem value={name} key={name}>
      <AccordionHeader>
        <TaskGroupTitle name={name} remainingTasksCount={remainingTasksCount} />
      </AccordionHeader>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};
