import { TasksProgress } from './tasks-progress';
import { Heading } from '../../components/ui/heading';

type Props = {
  progress: number;
};

export const Header: React.FC<Props> = ({ progress }) => {
  return (
    <div className="px-6 py-4 space-y-3">
      <Heading aria-label="Information about tasks for user profile creation">
        Lodgify grouped tasks
      </Heading>
      <TasksProgress value={progress} />
    </div>
  );
};
