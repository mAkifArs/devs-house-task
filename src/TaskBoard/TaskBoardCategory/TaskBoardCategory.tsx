import { ReactNode } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import cx from 'classnames';

import { TaskCategory } from '../../context/TaskProvider/TaskContext';
import useTaskBoardCategory from './useTaskBoardCategory';
import TaskBoardItem from './TaskBoardItem';

import styles from './TaskBoardCategory.module.scss';

interface TaskBoardCategoryProps {
  title: ReactNode;
  category: TaskCategory;
}

export default function TaskBoardCategory({ title, category }: TaskBoardCategoryProps) {
  const tasks = useTaskBoardCategory(category);

  return (
    <div
      className={cx(styles['category-card'], {
        [styles['category-card--has-tasks']]: !!tasks.length,
      })}
    >
      {title}
      <Droppable droppableId={category}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task) => (
              <TaskBoardItem key={task.id} task={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
