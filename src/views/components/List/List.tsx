import { useDeleteTaskMutation } from '../../../data/redux/todosApi';
import { TTask } from '../../../data/types';

import NewTaskForm from '../NewTaskForm';
import Task from '../Task';
import s from './list.module.css';

interface IList {
  id: number;
  color: string;
  name: string;
  tasks: TTask[];
}

export default function List({ id, color, name, tasks }: IList) {
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <article>
      <div className={s.list__header}>
        <h1 style={{ color: `var(--${color})` }} className={s.list__title}>
          {name}
        </h1>
      </div>
      <div className={s.list__content}>
        {tasks.map(({ id: taskId, completed, text }: TTask) => (
          <Task
            key={taskId}
            id={taskId}
            completed={completed}
            text={text}
            removeTask={() => deleteTask({ taskId })}
          />
        ))}
        <NewTaskForm listId={id} />
      </div>
    </article>
  );
}
