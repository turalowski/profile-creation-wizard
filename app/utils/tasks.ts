import { TaskGroupType } from './types';

/**
 * Calculates the normalized sum based on the checked tasks within the task groups.
 */
export const calculateNormalizedSum = (taskGroups: TaskGroupType[]): number => {
  let totalValue = 0; // Total value of all tasks
  let checkedValue = 0; // Total value of checked tasks
  taskGroups.forEach(group => {
    // Summing up the values of tasks within each group
    totalValue += group.tasks.reduce((acc, task) => {
      if (task.checked) {
        // If the task is checked, increment checked value by the task's value
        checkedValue += task.value;
      }
      // Accumulate task value
      return acc + task.value;
    }, 0);
  });
  // Calculating the normalized sum
  const normalizedSum =
    totalValue !== 0 ? (checkedValue * 100) / totalValue : 0;
  // Returning the normalized sum rounded to 2 decimal places
  return Number(normalizedSum.toFixed(2));
};
