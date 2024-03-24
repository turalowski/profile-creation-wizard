import { TaskGroupType, TaskType } from './types';

export const calculateNormalizedSum = (taskGroups: TaskGroupType[]): number => {
  let totalValue = 0;
  let checkedValue = 0;

  // Use reduce instead of forEach for more concise code
  taskGroups.forEach(group => {
    totalValue += group.tasks.reduce((acc, task) => {
      if (task.checked) {
        checkedValue += task.value;
      }
      return acc + task.value;
    }, 0);
  });

  // Check if totalValue is zero to prevent division by zero
  const normalizedSum = totalValue !== 0 ? (checkedValue * 100) / totalValue : 0;

  // Use Number() instead of parseFloat() for type conversion
  return Number(normalizedSum.toFixed(2)); 
};