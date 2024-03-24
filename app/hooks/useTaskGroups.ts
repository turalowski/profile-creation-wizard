import { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../utils/api';
import { TaskGroupType } from '../utils/types';

/**
 * Custom hook for managing task groups.
 */
export const useTaskGroups = () => {
  const [taskGroups, setTaskGroups] = useState<TaskGroupType[]>([]);

  /**
   * Fetch task groups from API and store in state.
   */
  async function fetchTaskGroups() {
    try {
      const response = await fetch(API_ENDPOINT);
      if (response.ok) {
        const taskGroups = await response.json();
        setTaskGroups(taskGroups);
      } else {
        throw new Error(await response.text());
      }
      return taskGroups;
    } catch (error) {
      console.error('Error fetching task groups:', error);
    }
  }

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
    fetchTaskGroups();
  }, []);

  // Return taskGroups state and toggleTaskChecked function
  return {
    taskGroups,
    toggleTaskChecked,
  };
};