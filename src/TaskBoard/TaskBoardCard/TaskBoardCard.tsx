import Text from '../../ui/Text/Text';
import styles from './TaskBoardCard.module.scss';
import { Task } from '../../context/TaskProvider/TaskContext';
import TaskBoardCardUser from './TaskBoardCardUser';
interface TaskBoardItemProps {
  task: Task;
}

export default function TaskBoardCard({ task }: TaskBoardItemProps) {
  return (
    <div className={styles['category-card']}>
      <TaskBoardCardUser />
      <Text weight={400} size={14}>
        {task.content}
      </Text>
      <div>
        <div className={styles['taskTypeSquareColor']}></div>
        <Text weight={400} size={14}>
          {task.type}
        </Text>
      </div>
    </div>
  );
}
