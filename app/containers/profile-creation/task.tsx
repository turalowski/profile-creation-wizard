import { TaskType, ToggleTaskChecked } from '@/app/utils/types';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';

type Props = {
  task: TaskType;
  groupIndex: number; // index of the task group
  taskIndex: number; // index of the task
  toggleTaskChecked: ToggleTaskChecked; // function to toggle the checked status of a task
};

/* Component to show task */
export const Task: React.FC<Props> = ({
  task,
  toggleTaskChecked,
  groupIndex,
  taskIndex,
}) => {
  /* Generate a unique id for the task based on description and value */
  const id = task.description + task.value;

  /* Handler function to toggle the checked status of the task */
  const handleCheckClick = () => {
    toggleTaskChecked(groupIndex, taskIndex);
  };

  return (
    <div className="flex items-center gap-4" key={id}>
      <Checkbox id={id} checked={task.checked} onChange={handleCheckClick} />
      <Label htmlFor={id}>{task.description}</Label>
    </div>
  );
};
