import { PropsWithChildren, useCallback, useState } from 'react';
import { TaskContext, TaskType, Task, TaskCategory } from './TaskContext';

export default function TaskProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      category: TaskCategory.Backlog,
      content: 'selam',
      type: TaskType.Bug,
      owner: 1,
    },
  ]);

  const addTask = useCallback((task: Task) => {
    setTasks((tasks) => [...tasks, task]);
  }, []);

  const moveTask = useCallback((id: number, to: TaskCategory) => {
    setTasks((tasks) => tasks.map((task) => (task.id === id ? { ...task, category: to } : task)));
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        moveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
