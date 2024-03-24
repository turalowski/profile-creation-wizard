import { useEffect, useState } from 'react';
import { TaskGroupType } from '../utils/types';
import { fetchTaskGroups } from '../utils/api';


/**
 * Custom hook for managing task groups.
 */
export const useTaskGroups = () => {
  const [taskGroups, setTaskGroups] = useState<TaskGroupType[]>([]);

  /**
   * Toggle the checked state of a task.
   */
  function toggleTaskChecked(groupIndex: number, taskIndex: number) {
    setTaskGroups(prevGroups => {
      const newTaskGroups = [...prevGroups];
      newTaskGroups[groupIndex] = {
        ...newTaskGroups[groupIndex],
        tasks: newTaskGroups[groupIndex].tasks.map((task, index) =>
          index === taskIndex ? { ...task, checked: !task.checked } : task
        ),
      };
      return newTaskGroups;
    });
  }

  // Fetch task groups on initial render
  useEffect(() => {
    async function updateTaskGroups() {
      const taskGroups = await fetchTaskGroups();
      setTaskGroups(taskGroups);
    }
    updateTaskGroups();
  }, []);

  // Return taskGroups state and toggleTaskChecked function
  return {
    taskGroups,
    toggleTaskChecked,
  };
};
