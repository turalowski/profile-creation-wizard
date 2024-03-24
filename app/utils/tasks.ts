import { TaskGroupType } from './types';

export const calculateNormalizedSum = (taskGroups: TaskGroupType[]): number => {
  let totalValue = 0;
  let checkedValue = 0;

  taskGroups.forEach(group => {
    totalValue += group.tasks.reduce((acc, task) => {
      if (task.checked) {
        checkedValue += task.value;
      }
      return acc + task.value;
    }, 0);
  });

  const normalizedSum = totalValue !== 0 ? (checkedValue * 100) / totalValue : 0;

  return Number(normalizedSum.toFixed(2)); 
};