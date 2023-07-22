import { PropsWithChildren, useCallback, useState } from 'react';
import { TaskContext, TaskType, Task, TaskCategory } from './TaskContext';

export default function TaskProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      category: TaskCategory.Backlog,
      content:
        'Fix the padding issue with the modal view. It also effects the other views and other modals. Fix the flex layout fit a wrapper than the whole screen. (2h)',
      type: TaskType.Bug,
      owner: 1,
    },
    {
      id: 1,
      category: TaskCategory.Backlog,
      content:
        'Fix the padding issue with the modal view. It also effects the other views and other modals. Fix the flex layout fit a wrapper than the whole screen. (2h)',
      type: TaskType.Feature,
      owner: 1,
    },
    {
      id: 1,
      category: TaskCategory.InProgress,
      content:
        'Fix the padding issue with the modal view. It also effects the other views and other modals. Fix the flex layout fit a wrapper than the whole screen. (2h)',
      type: TaskType.Feature,
      owner: 1,
    },
    {
      id: 1,
      category: TaskCategory.Done,
      content:
        'Fix the padding issue with the modal view. It also effects the other views and other modals. Fix the flex layout fit a wrapper than the whole screen. (2h)',
      type: TaskType.Feature,
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
