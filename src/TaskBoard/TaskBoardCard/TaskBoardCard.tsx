import { Flex } from '@mantine/core';

import Text from '../../ui/Text/Text';
import styles from './TaskBoardCard.module.scss';
import { Task } from '../../context/TaskProvider/TaskContext';

interface TaskBoardItemProps {
  task: Task;
}

export default function TaskBoardCard({ task }: TaskBoardItemProps) {
  return (
    <Flex direction="column" className={styles['category-card']}>
      <Text weight={400} size={14}>
        {task.content}
      </Text>
    </Flex>
  );
}
