import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionHeader,
} from '@/app/components/ui/accordion';
import { TaskIcon } from '../../components/ui/icons';
import { TaskGroupType, ToggleTaskChecked } from '@/app/utils/types';
import { Task } from './task';

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
