import { Draggable } from 'react-beautiful-dnd';
import { Flex } from '@mantine/core';
import { Task } from '../../context/TaskProvider/TaskContext';
import TaskBoardCard from '../TaskBoardCard/TaskBoardCard';

import Text from '../../ui/Text';

import TaskBoardItemLayout from './TaskBoardItemLayout';

import useUser from '../../hooks/useUser';
import TaskBoardCardUser from '../TaskBoardCard/TaskBoardCardUser';
import styles from './TaskBoardItem.module.scss';
interface TaskBoardItemProps {
  task: Task;
}

export default function TaskBoardItem({ task }: TaskBoardItemProps) {
  const user = useUser(task.owner);

  return (
    <Draggable draggableId={String(task.id)} index={1}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <TaskBoardCard task={task} />
          <TaskBoardItemLayout
            user={user && <TaskBoardCardUser user={user} />}
            content={
              <Text weight={400} size={14}>
                {task.content}
              </Text>
            }
            footer={
              <Flex gap="xs">
                <span className={styles['dot']}></span>
                <Text weight={400} size={14}>
                  {task.type}
                </Text>
              </Flex>
            }
          />
        </div>
      )}
    </Draggable>
  );
}
