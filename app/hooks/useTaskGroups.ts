import { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../utils/api';
import { TaskGroupType } from '../utils/types';

export const useTaskGroups = () => {
  /* Fetching state. Regardless of failure or not, after the first state */
  const [taskGroups, setTaskGroups] = useState<TaskGroupType[]>([]);

  async function fetchTaskGroups() {
    try {
      const response = await fetch(API_ENDPOINT);
      const taskGroups = await response.json();
      setTaskGroups(taskGroups);
      return taskGroups;
    } catch (error) {
      console.error('Error fetching task groups:', error);
    }
  }

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

  useEffect(() => {
    fetchTaskGroups();
  }, []);

  return {
    taskGroups,
    toggleTaskChecked,
  };
};
