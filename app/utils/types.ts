export type ToggleTaskChecked = (groupIndex: number, taskIndex: number) => void;

export type TaskType = {
  description: string;
  value: number;
  checked: boolean;
};

export type TaskGroupType = {
  name: string;
  tasks: TaskType[];
};
