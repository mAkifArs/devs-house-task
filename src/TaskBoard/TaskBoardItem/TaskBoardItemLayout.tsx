import { ReactNode } from 'react';
import { Flex } from '@mantine/core';

import Text from '../../ui/Text/Text';
import styles from './TaskBoardCard.module.scss';
import { Task } from '../../context/TaskProvider/TaskContext';

interface TaskBoardCardLayoutProps {
  user: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export default function TaskBoardCardLayout({ user, content }: TaskBoardCardLayoutProps) {
  return (
    <Flex direction="column" className={styles['category-card']}>
      {user}
      {content}
      <Flex gap="xs" align="center">
        <div className={styles['taskTypeSquareColor']}></div>
        <Text weight={400} size={14}>
          {task.type}
        </Text>
      </Flex>
    </Flex>
  );
}
