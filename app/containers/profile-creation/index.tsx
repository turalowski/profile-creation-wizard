'use client';

import { useTaskGroups } from '@/app/hooks/useTaskGroups';
import { calculateNormalizedSum } from '@/app/utils/tasks';
import { TaskGroups } from './task-groups';
import { Header } from './haeder';

export function ProfileCreation() {
  const { taskGroups, toggleTaskChecked } = useTaskGroups();
  const progress: number = calculateNormalizedSum(taskGroups);
  return (
    <section className="border p-4 rounded-lg w-full">
      <Header progress={progress} />
      <TaskGroups
        taskGroups={taskGroups}
        toggleTaskChecked={toggleTaskChecked}
      />
    </section>
  );
}
