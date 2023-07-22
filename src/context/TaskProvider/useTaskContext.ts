import { useContext } from 'react';
import { TaskContext, TaskContextType } from './TaskContext';

export default function useTaskContext() {
  const context = useContext<TaskContextType | null>(TaskContext);

  if (context === null) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }

  return context;
}
