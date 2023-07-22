import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../../../context/TaskProvider/TaskContext';

interface TaskBoardItemProps {
  task: Task;
}

export default function TaskBoardItem({ task }: TaskBoardItemProps) {
  return (
    <Draggable draggableId={String(task.id)} index={1}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <h4>{task.content}</h4>
        </div>
      )}
    </Draggable>
  );
}
