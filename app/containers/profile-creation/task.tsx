import { TaskType, ToggleTaskChecked } from '@/app/utils/types';
import { Checkbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';

type Props = {
  task: TaskType;
  groupIndex: number;
  taskIndex: number;
  toggleTaskChecked: ToggleTaskChecked;
};

export const Task: React.FC<Props> = ({
  task,
  toggleTaskChecked,
  groupIndex,
  taskIndex,
}) => {
  const id = task.description + task.value;
  const handleCheckClick = () => {
    toggleTaskChecked(groupIndex, taskIndex);
  };

  return (
    <div className="flex items-center gap-4" key={id}>
      <Checkbox
        id={id}
        checked={task.checked}
        onChange={handleCheckClick}
      />
      <Label htmlFor={id}>{task.description}</Label>
    </div>
  );
};
