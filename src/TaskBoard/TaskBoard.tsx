import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Flex } from '@mantine/core';

import Text from '../ui/Text';

import { TaskCategory } from '../context/TaskProvider/TaskContext';
import TaskBoardCategory from './TaskBoardCategory';

export default function TaskBoard() {
  const handleDragEnd = () => {};

  return (
    <Container fluid>
      <div>hey</div>
      <Flex gap="md">
        <DragDropContext onDragEnd={handleDragEnd}>
          <TaskBoardCategory
            title={
              <Text size="sm" color="blue">
                Backlog
              </Text>
            }
            category={TaskCategory.Backlog}
          />
          <TaskBoardCategory
            title={
              <Text size="sm" color="red">
                In Progress
              </Text>
            }
            category={TaskCategory.InProgress}
          />
          <TaskBoardCategory
            title={
              <Text size="sm" color="green">
                Done
              </Text>
            }
            category={TaskCategory.Done}
          />
        </DragDropContext>
      </Flex>
    </Container>
  );
}
