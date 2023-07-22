import { createContext } from 'react';

export enum TaskCategory {
  Backlog = 'Backlog',
  InProgress = 'InProgress',
  Done = 'Done',
}

enum TaskType {
  Bug = 'Bug',
  Feature = 'Feature',
  Refactor = 'Refactor',
}

export interface Task {
  id: number;
  category: TaskCategory;
  content: string;
  type: TaskType;
  owner: string;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  moveTask: (id: number, to: TaskCategory) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);
