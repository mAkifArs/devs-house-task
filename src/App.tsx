import TaskProvider from './context/TaskProvider';
import TaskBoard from './TaskBoard';
export default function App() {
  return (
    <TaskProvider>
      <TaskBoard />
    </TaskProvider>
  );
}
