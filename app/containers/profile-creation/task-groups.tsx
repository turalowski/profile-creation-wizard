import { Accordion } from '@/app/components/ui/accordion';
import { TaskGroupType, ToggleTaskChecked } from '@/app/utils/types';
import { TaskGroup } from './task-group';
import { Tasks } from './tasks';

type Props = {
  taskGroups: TaskGroupType[]; // task groups
  toggleTaskChecked: ToggleTaskChecked; // function to toggle checked state of task
};

/* Component to show task groups */
export const TaskGroups: React.FC<Props> = props => {
  const { taskGroups, toggleTaskChecked } = props;

  return (
    <Accordion>
      {taskGroups.map((taskGroup, index) => {
        const { name, tasks } = taskGroup;
        return (
          <TaskGroup taskGroup={taskGroup} key={name}>
            <Tasks
              tasks={tasks}
              groupName={name}
              groupIndex={index}
              toggleTaskChecked={toggleTaskChecked}
            />
          </TaskGroup>
        );
      })}
    </Accordion>
  );
};
