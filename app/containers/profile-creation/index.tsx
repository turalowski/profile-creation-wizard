'use client';

import { useTaskGroups } from '@/app/hooks/useTaskGroups';
import { calculateNormalizedSum } from '@/app/utils/tasks';
import { TaskGroups } from './task-groups';
import { Header } from './haeder';
import { TaskGroupType, TaskType } from '@/app/utils/types';

/* Component to show User creation wizard */
export const ProfileCreation: React.FC = () => {
  const { taskGroups, toggleTaskChecked } = useTaskGroups();
  /* combine tasks from multiple groups to calculate progress */
  const combinedTasks: TaskType[] = taskGroups.reduce((acc: TaskType[], curr: TaskGroupType) => {
    return acc.concat(curr.tasks);
}, []);
  /* calculate completed percentage */
  const progress: number = calculateNormalizedSum(combinedTasks);
  return (
    <section className="border p-4 rounded-lg w-full">
      <Header progress={progress} />
      <TaskGroups
        taskGroups={taskGroups}
        toggleTaskChecked={toggleTaskChecked}
      />
    </section>
  );
};
