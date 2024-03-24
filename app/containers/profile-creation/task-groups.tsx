import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionHeader,
} from '@/app/components/ui/accordion';
import { TaskIcon } from '../../components/ui/icons';
import { TaskGroupType, ToggleTaskChecked } from '@/app/utils/types';
import { Task } from './task';
import { TaskGroup } from './task-group';

type Props = {
  taskGroups: TaskGroupType[];
  toggleTaskChecked: ToggleTaskChecked;
};
export const TaskGroups: React.FC<Props> = props => {
  const { taskGroups, toggleTaskChecked } = props;

  return (
    <section className="w-[788x] ">
      <Accordion>
        {taskGroups.map((taskGroup, groupIndex) => (
          <TaskGroup
            taskGroup={taskGroup}
            key={taskGroup.name}
            toggleTaskChecked={toggleTaskChecked}
            groupIndex={groupIndex}
          />
        ))}
      </Accordion>
    </section>
  );
};
