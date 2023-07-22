import { useMemo } from 'react';

import { useTaskContext } from '../../context/TaskProvider';
import { TaskCategory } from '../../context/TaskProvider/TaskContext';

export default function useTaskBoardCategory(category: TaskCategory) {
  const { tasks } = useTaskContext();

  return useMemo(() => {
    return tasks.filter((task) => task.category === category);
  }, [tasks, category]);
}
