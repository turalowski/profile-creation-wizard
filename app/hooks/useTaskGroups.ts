import { useEffect, useState } from 'react';
import { TaskGroupType } from '../utils/types';

/* API endpoint to fetch task groups */
const API_ENDPOINT: string =
  'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress';

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